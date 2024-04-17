import React from 'react'
import "./styles/style.css"

const Card = ({canidate}) => {
  
  return (
    <div className='card'>
      <img src="src/assets/person.jpg" alt="" />
      <p>{canidate}</p>
    </div>
  )
}

export default Card