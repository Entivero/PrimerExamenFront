import React from 'react'
import'./Card.css'

const Card = ({props}) => {
  return (
    <div className="card">
    <h2>Información Ingresada:</h2>
    <p>Hola {props.data.nombre} Sabemos que tu color favorito es el {props.data.color}</p>
  </div>
  )
}

export default Card
