import React, {useState} from 'react'

const AddIngredient = (prop) => {
  const [input, setInput] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();
    prop.onSubmit(input)
    setInput('');
  };
  
  return (

    <div>
      <form>
      <input 
      type='text'
      placeholder="Add Ingredient" 
      value={input} 
      name='text'
      onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Ingredient</button>

      </form>
    </div>
    
)}

export default AddIngredient
