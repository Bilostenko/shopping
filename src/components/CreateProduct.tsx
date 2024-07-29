import React, { useState } from "react";
import { IProducts } from "../models";

const productData: IProducts = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  }
}

const CreateProduct = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(false);
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError(true);
      return;
    }

    productData.title = value;

    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: value,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
    })
      .then(res => res.json())
      .then(json => console.log("this is", json))
      .catch(error => console.error('Error:', error));
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 rounded mb-2 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />

      <div className="justify-between">
        {error && (
          <span className="color-red font-bold">You need enter data</span>
        )}
        <button
          type="submit"
          className="py-2 px-4 border bg-yellow-400 hover:text-white"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
