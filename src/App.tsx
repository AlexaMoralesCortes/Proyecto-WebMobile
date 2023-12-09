//
import './App.css'
import React, { useEffect, useState } from 'react';
import { getProducts } from './getProductos';
function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.ID_PRODUCTO}>
            {product.NOMBRE} - {product.DESCRIPCION} - ${product.PRECIO}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;