import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import { IProducts } from './models';
import { Modal } from './components/Modal';
import CreateProduct from './components/CreateProduct';

function App() {

  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false)
  const getResource = async (url: string) => {
    setLoading(true);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    const data = await res.json();
    setLoading(false); // Встановлюємо loading на false після отримання даних
    return data;
  };

  useEffect(() => {
    getResource('https://fakestoreapi.com/products?limit=4')
      .then(data => setProducts(data))
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className='text-center'>LOADING...</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
      < Modal title="Create new product">
        < CreateProduct />
      </Modal>
    </div>
  );
}


export default App;
