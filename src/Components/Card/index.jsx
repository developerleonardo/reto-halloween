import React from 'react'
import './card.css'

const Card = ({ clase, rango, apariencia, poderes, img }) => {
  return (
    <div className='monster-card'>
      <div className='card__img__container'>
        <img src={img} alt="" />
      </div>
      <div className='card__description'>
        <div className='card__characteristics'>
          <p><span>Mounstruo: </span>{clase}</p>
        </div>
        <div className='card__characteristics'>
          <p><span>Nombre: </span>{rango}</p>
        </div>
        <div className='card__characteristics'>
          <p><span>Poderes: </span>{poderes}</p>
        </div>
      </div>
    </div>
  )
}

export { Card }