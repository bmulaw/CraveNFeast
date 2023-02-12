import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Recipe from './Recipe'

const Profile = () =>  {
  const [favorites,setFavorites] = useState([])
  const username = window.localStorage.getItem("user")
  useEffect (()=>{
    fetch(`http://127.0.0.1:5000/account/${username}/favorites`)
      .then(response => response.json())
      .then(data => setFavorites(data));
  })
  console.log(username)

  return (
  <div>
      <Navbar/>
      <br/><br/><br/><br/>
      <p>Welcome {username}</p>
      {
        favorites?.map((item, index)=>{
            return(
              <Recipe key={index} prop={item}/>
            )
        })
      }
      
    
  </div>
  )
}

export default Profile