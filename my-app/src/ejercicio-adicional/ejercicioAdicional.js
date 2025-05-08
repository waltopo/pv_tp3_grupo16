const productos = [
  { descripcion: "Teclado", precio: 30000 },
  { descripcion: "Auriculares", precio: 49000 },
  { descripcion: "Monitor", precio: 80000 },
  { descripcion: "Ratón", precio: 15000 },
  { descripcion: "Parlante Bluetooth", precio: 59000.90 },
];

// Paso 1: Mostrar en consola cada producto con forEach
productos.forEach(producto => {
  console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

// Paso 2: Crear un nuevo array con los productos cuyo precio sea mayor a $20
const productosMayores20 = productos.filter(producto => producto.precio > 20);
console.log(productosMayores20);

// Paso 3: Crear un array con el precio con IVA incluido (21%) usando map
const productosConIVA = productos.map(producto => {
  return {
    ...producto,
    precioConIVA: producto.precio * 1.21
  };
});
console.log(productosConIVA);

// Paso 4: Ordenar el array original de productos por precio de menor a mayor usando sort
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);

// Paso 5: Agregar un nuevo producto al final del array
productos.push({ descripcion: "Cargador inalámbrico", precio: 4000 });
console.log(productos);

// Paso 6: Eliminar el producto con el precio más bajo del array
const productoMasBarato = productos.reduce((prev, curr) => (prev.precio < curr.precio ? prev : curr));
const index = productos.indexOf(productoMasBarato);
productos.splice(index, 1);
console.log(productos);
