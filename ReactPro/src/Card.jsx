import React from 'react'
import pro from './assets/pro.jpg'

function Card() {
  return (
    <div className='card'>
        <img src={pro} alt="Anable to prosess" className='pic' />
        <h2 className='card-h1'>Chandru</h2>
        <p className='card-p'>I am a MCA student,to become a good soul</p>
    </div>
  )
}

export default Card