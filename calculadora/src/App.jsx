import { useState } from 'react'
import {evaluate, prodDependencies } from 'mathjs'
import './App.css'
import Boton from './components/Boton'
import Portal from './components/Portal'
import BotonClear from './components/BotonClear'
import Logo from './components/Logo'


function App() {
  const [ input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    } else{
      alert('Por favor ingrese valores validos')
    }
  }

  return (
    <div className="App">
      <Logo />
      <div className='caja-calculadora'>
        <Portal input={input}/>
        <div className="fila">
           <Boton manejarClic={agregarInput}>1</Boton>
           <Boton manejarClic={agregarInput}>2</Boton>
           <Boton manejarClic={agregarInput}>3</Boton>
           <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
           <Boton manejarClic={agregarInput}>5</Boton>
           <Boton manejarClic={agregarInput}>6</Boton>
           <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
           <Boton manejarClic={agregarInput}>8</Boton>
           <Boton manejarClic={agregarInput}>9</Boton>
           <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={calcularResultado}>=</Boton>
           <Boton manejarClic={agregarInput}>0</Boton>
           <Boton manejarClic={agregarInput}>.</Boton>
           <Boton manejarClic={agregarInput}>/</Boton>

        </div>
        <div className="fila">
          <BotonClear manejarClic={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
      
    </div>
  )
}

export default App
