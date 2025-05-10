// Paso 1: Mostrar en consola cada producto con forEach
export const mostrarConForEach = (productos) => {
    productos.forEach(({ descripcion, precio }) => {
        console.log(`
        Descripción: ${descripcion}
        Precio: $${precio}`);
    });
}
// Función para filtrar productos con precio mayor a $20
export const filtrarProductosMayorA20 = (productos) => {
    return productos.filter(({ precio }) => precio > 20);
};
  
  