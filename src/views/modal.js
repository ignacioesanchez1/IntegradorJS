import { productoActivo, setProductoActivo } from "../../main.js";
import { handleDeleteProduct } from "../services/products.js";

// Función para abrir el modal y rellenar los datos si hay un producto activo
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const deleteButton = document.getElementById("deleteButton");

if (productoActivo){
    deleteButton.style.display = "block"; 
} else{
    deleteButton.style.display = "none"; 
}

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
              imagen = document.getElementById("img"),
              precio = document.getElementById("precio"),
              categoria = document.getElementById("categoria");
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
    }
};

// Función para cerrar el modal y reiniciar el formulario
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    resetModal(); // Reiniciar los campos del formulario
    setProductoActivo(null); // Resetear el producto activo
};

// Reiniciar el modal (vaciar el formulario)
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
          imagen = document.getElementById("img"),
          precio = document.getElementById("precio"),
          categoria = document.getElementById("categoria");
    
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoría";
};

// Función que maneja el evento de cancelar
export const handleCancelButton = () => {
    closeModal();
};

// Eliminar elementos
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener('click', () => {
        handleDeleteButton();
});

const handleDeleteButton = () => {
    handleDeleteProduct(); // Llamar a la función que elimina el producto
};