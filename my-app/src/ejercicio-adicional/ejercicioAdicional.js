import { mostrarConForEach, filtrarProductosMayorA20, calcularPrecioConIVA, ordenarPorPrecio, agregarProducto, eliminarProductoMasBarato } from './utilArray.js';

const productos = [
    { 
        descripcion: "Teclado", 
        precio: 30000.55 
    },
    { 
        descripcion: "Auriculares", 
        precio: 49000.70 
    },
    { 
        descripcion: "Monitor", 
        precio: 80000.50 
    },
    { 
        descripcion: "Ratón", 
        precio: 15000.00 
    },
    { 
        descripcion: "Parlante Bluetooth", 
        precio: 59000.90 
    },

  ]
  
  //Mostrar los objetos del array
mostrarConForEach(productos);
// Filtrar productos con precio mayor a $20
const productosFiltrados = filtrarProductosMayorA20(productos);
console.log('Productos con precio mayor a $20:', productosFiltrados);
// Paso 3: Productos con IVA (21%)
const productosConIVA = calcularPrecioConIVA(productos);
console.log('\nProductos con IVA:', productosConIVA);

// Paso 4: Ordenar productos por precio (menor a mayor)
const productosOrdenados = ordenarPorPrecio(productos);
console.log('\nProductos ordenados por precio:', productosOrdenados);

// Paso 5: Agregar un nuevo producto al final
const nuevoProducto = { descripcion: "Auricular Bluetooth", precio: 50000 };
const productosActualizados = agregarProducto(productos, nuevoProducto);
console.log('\nProductos después de agregar uno nuevo:', productosActualizados);

// Paso 6: Eliminar el producto más barato
const productosSinMasBarato = eliminarProductoMasBarato(productos);
console.log('\nProductos después de eliminar el más barato:', productosSinMasBarato);