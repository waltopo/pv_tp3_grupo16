import { mostrarConForEach, filtrarProductosMayorA20 } from './utilArray.js';

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