import React from "react";
import { RiCloseCircleFill } from 'react-icons/ri';
import './Ingredient.css'

const Ingredient = ({prop, removeIngredient}) => {
  console.log(prop)
  return prop.length
    ? prop.map((ingredient, index) => <div key={index}>{ingredient}
     <div key={index} >
        <RiCloseCircleFill onClick={() =>removeIngredient(ingredient)}/>
      </div>
    </div>)
    : null;
  
};

export default Ingredient;
