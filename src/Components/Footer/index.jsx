import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Realizado por Leonardo Salazar</p>
      <div className='contact-section'>
        <a href="https://www.linkedin.com/in/leonardo-salazar-serna/"><CiLinkedin /></a>
        <a href="https://github.com/developerleonardo"><FaGithub /></a>
      </div>
    </footer>
  )
}

export { Footer }