import React from 'react'
import "./styles/style.css"
import person from "../assets/person.jpg"

const Card = ({canidate}) => {

  return (
    <div className='card'>
      <img src={person} alt="" />
      <p>{canidate}</p>
    </div>
  )
}

export default Card