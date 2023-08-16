import React, { useState } from 'react'
import Card from'./Card'
import'./Card.css'
import'./Form.css'

const Form = () => {
    const [persona, setPersona] = useState({
        nombre: '',
        color: ''
    })

    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
      const esNombreValido = persona.nombre.trim().length >= 3;
      const esColorValido = persona.color.trim().length >= 6;

      if (esNombreValido && esColorValido) {
          setEnviado(true);
          setError(false);
      } else {
          setEnviado(false);
          setError(true);
      }
  };

  return (
    <div  className="form-container">
        <label className="form-label" >Nombre</label>
        <input  className="form-input" type="text" onChange={(event) => setPersona({...persona, nombre: event.target.value})} />
        <label className="form-label">Color Favorito</label>
        <input  className="form-input" type="text" onChange={(event) => setPersona({...persona, color: event.target.value})}/>
        <button className="form-button" onClick={handleSubmit}>Enviar</button>
        {enviado && <h3>Tu Color Favorito es:</h3>}
        {error && <h3  className="error-message">Por favor chequea que la información sea correcta</h3>}
    </div>
  )
}

export default Form
