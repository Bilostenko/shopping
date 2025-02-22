import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import { IProducts } from './models';
import { Modal } from './components/Modal';
import CreateProduct from './components/CreateProduct';

function App() {

  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProducts) => {
    setProducts(prevProducts => [...prevProducts, product]);
    setModal(false);
  }

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

      {modal && < Modal title="Create new product" onClose={()=> setModal(false)}>
        < CreateProduct onCreate = {createHandler}/>
      </Modal>
      }
      <button
       className='fixed bottom-5 right-5 rounded-full bg-yellow-700 text-white text-2xl px-4 py-2'
       onClick={() => setModal(true)}
       >+</button>
    </div>
  );
}

export default App;
