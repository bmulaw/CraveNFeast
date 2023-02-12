import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import Ingredient from "./Ingredient";
import './IngredientList.css'

const IngredientList = (prop) => {
  const [ingredients, setIngredients] = useState([]);
  // useEffect(()=>{
  //   fetch(`http://127.0.0.1:5000/api/recipes/v2?q=[flour, plantain]`)
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       prop.setRecipes(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },[])
  const addNewIngredient = (ingredient) => {
    if (!ingredients.includes(ingredient) && ingredient !== "") {
      setIngredients([ingredient, ...ingredients]);
    }
  };

  const removeIngredient = (ingredient_ToRemove) => {
    const removeArr = [...ingredients].filter(
      (ingredient) => ingredient !== ingredient_ToRemove
    );

    setIngredients(removeArr);
  };

  const getRecipes = () => {
    fetch(`http://127.0.0.1:5000/api/recipes/v2?q=${ingredients}`)
      .then((resp) => resp.json())
      .then(function (data) {
        prop.setRecipes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <main class="container">
      <h1 className="ingredient-header">Add Your Craving, then Feast</h1>
      <section className="ingredient-form">
      <AddIngredient onSubmit={addNewIngredient} />
      <Ingredient prop={ingredients} removeIngredient={removeIngredient} />
      </section>
      <section class="btn-wrapper">
      <button class="ingredient-btn" onClick={getRecipes}>Search</button>
      <button class="ingredient-btn" onClick={() => setIngredients([])}>Clear</button>
      <h2>Tantalize Your Tastbuds Here </h2>
      </section>
    </main>
  );
};

export default IngredientList;
