import React, { useState } from 'react'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'
import Navbar from './Navbar'


const Home = ({prop}) => {
  const [recipes, setRecipes] = useState([])
  return (
    <div>
      <Navbar/>
      <IngredientList setRecipes={setRecipes}/>
      <RecipeList recipes={recipes} username={prop}/>
    </div>
  
  )
}

export default Home
