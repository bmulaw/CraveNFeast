import React from 'react'
import Recipe from './Recipe'
import './RecipeList.css'

const RecipeList = (prop) => {
  console.log(prop)
  return (
    <div className='recipe-row'>
      {prop.recipes.length?
      prop.recipes.map((recipe,index)=>{
        return (
          <Recipe key={index} prop={recipe} username={prop.username} className="column"/>
        ) 
      }): null}
      </div>

    

  )
}

export default RecipeList