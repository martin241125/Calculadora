import React from 'react'
import saint from '../assets/saintSeiya.jpg'
import '../App.css'

const Logo = (props) => {
  return (
    <div className='logo-container'>
      <img src={saint} alt=""
      className='logo' />
      {props.logo}

    </div>
  )
}

export default Logo