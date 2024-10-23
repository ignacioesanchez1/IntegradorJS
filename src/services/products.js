import { productoActivo } from "../../main.js";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage.js";
import { closeModal, handleCancelButton, openModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";

const cancelButton = document.getElementById("cancelButton");
const acceptButton = document.getElementById("acceptButton");

if (cancelButton) {
    cancelButton.addEventListener('click', () => {
        handleCancelButton();
    });
}

if (acceptButton) {
    acceptButton.addEventListener('click', () => {
        handleSaveOrModifyElement();
    });
}

// Función que maneja la creación o modificación de un elemento
const handleSaveOrModifyElement = () => {
    const nombre = document.getElementById("nombre").value,
          imagen = document.getElementById("img").value,
          precio = document.getElementById("precio").value,
          categoria = document.getElementById("categoria").value;
    
    let object = null;

    // Si productoActivo no es nulo, modificar el producto existente
    if (productoActivo) {
        object = {
            ...productoActivo, // Mantener el ID y otras propiedades existentes
            nombre,
            imagen,
            precio,
            categoria
        };
    } else {
        // Si productoActivo es nulo, crear un nuevo producto
        object = {
            id: new Date().toISOString(), // Generar un nuevo ID
            nombre,
            imagen,
            precio,
            categoria
        };
    }

    console.log(object);

    setInLocalStorage(object); // Guardar el producto en localStorage
    handleGetProductsToStore(); // Actualizar la lista de productos
    closeModal(); // Cerrar el modal
};

// Función para eliminar productos
export const handleDeleteProduct = () => {
    const products = handleGetProductLocalStorage();
    const result = products.filter((el) => el.id === productoActivo.id);
    localStorage.setItem("products", JSON.stringify(result));
    const newProducts = handleGetProductLocalStorage();
    handleRenderList(newProducts);
    closeModal();
};
