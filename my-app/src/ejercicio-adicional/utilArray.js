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
  
// Paso 3: Calcular precio con IVA (21%)
export const calcularPrecioConIVA = (productos) => {
    return productos.map(producto => ({
        ...producto,
        precioConIVA: producto.precio * 1.21
    }));
};

// Paso 4: Ordenar productos por precio de menor a mayor
export const ordenarPorPrecio = (productos) => {
    return productos.sort((a, b) => a.precio - b.precio);
};

// Paso 5: Agregar un nuevo producto al final del array
export const agregarProducto = (productos, nuevoProducto) => {
    productos.push(nuevoProducto);
    return productos;
};

// Paso 6: Eliminar el producto con el precio más bajo
export const eliminarProductoMasBarato = (productos) => {
    const precioMasBajo = Math.min(...productos.map(producto => producto.precio));
    const indiceProductoMasBarato = productos.findIndex(producto => producto.precio === precioMasBajo);
    productos.splice(indiceProductoMasBarato, 1);
    return productos;
};