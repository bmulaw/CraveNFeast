import React from 'react'
  
const Favorite = (props) => {
  const {name, url} = props;
  return (
    <div>
      <h1> This is the {name} </h1>
      <p>{name} is located here: {url}</p>
      </div>
  )
}

export default Favorite