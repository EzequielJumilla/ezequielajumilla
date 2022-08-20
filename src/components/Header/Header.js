import React from 'react'
import '../Header/Header.css'
import LogoLinkedin from '../Logos/logolinkedin'

import LogoGithub from '../Logos/logogithub'

const Header = () => {
  return (
   
    <header className='header'>
  
    
<a href="/" ><h1>Ezequiel Jumilla</h1></a> 
      

    <nav className="iconosHeader">
      <LogoLinkedin/>
      
      <LogoGithub/>
     </nav>

    </header>  
    
 
    
     
  )
}

export default Header