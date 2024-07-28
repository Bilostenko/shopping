import React, {useState} from "react";

const CreateProduct = () => {

  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const [value, setValue] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
      type="text" 
      className="border py-2 px-4 rounded mb-2 w-full outline-0" 
      placeholder="Enter product title"
      value={value}
      onChange={changeHandler}
       />
      <button 
      type="submit" 
      className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >Create</button>
    </form>
  )
};

export default CreateProduct