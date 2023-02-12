import React from 'react'
import Favorite from './Favorite';
import {mockRecipes} from ".../mockRecipes";

function FavoritesList() {
  return (
    <div>FavoritesList
    {mockRecipes.map(favorite => <Favorite key={favorite.id} {...favorite}/>)}
    </div>
  )
}

export default FavoritesList