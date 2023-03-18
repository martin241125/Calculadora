import React from 'react'
import '../style/Boton.css'

const Boton = (props) => {
   const esOperador = value => {
    return isNaN (value) && (value !== '.') && (value !== '=');
   };


  return (
    <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()} onClick={()=> props.manejarClic(props.children)}>
        {props.children}
    </button>
  )
}

export default Boton