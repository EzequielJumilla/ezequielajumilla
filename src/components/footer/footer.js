import React from 'react'
import '../footer/footer.css'
import LogoLinkedin from '../Logos/logolinkedin'

import LogoGithub from '../Logos/logogithub'


const Footer = () => {
  return (
    <div>
  <footer className='header'>
  <a href="/">
 <h1>Ezequiel Jumilla</h1>
 </a>
       
 
     <nav className="iconosHeader">
       <LogoLinkedin/>
    
       <LogoGithub/>
      </nav>
 
     </footer>  


    </div>
  )
}

export default Footer