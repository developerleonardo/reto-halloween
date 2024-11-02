import React, { useState } from 'react'
import { MdFlipCameraAndroid } from "react-icons/md";
import './card.css'

const Card = ({ clase, rango, apariencia, poderes, img, nivel, descripcion }) => {

  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  }

  return (
    <div className={`monster-card ${flipped ? 'flipped' : ''}`}>
      <div className='face front'>
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
            <p><span>Nivel de terror: </span>{nivel}</p>
          </div>
        </div>
        <span className='flip-icon' onClick={flipCard}>
          <MdFlipCameraAndroid />
        </span>
      </div>
      <div className='face back'>
        <div className='card__characteristics'>
          <p><span>Apariencia: </span>{apariencia}</p>
        </div>
        <div className='card__characteristics'>
          <p><span>Poderes: </span>{poderes}</p>
        </div>
        <div className='card__characteristics'>
          <p><span>Descripción: </span>{descripcion}</p>
        </div>
        <span className='flip-icon' onClick={flipCard}>
          <MdFlipCameraAndroid />
        </span>
      </div>
    </div>
  )
}

export { Card }