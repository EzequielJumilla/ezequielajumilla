import React from 'react'
import Header from '../Header/Header'
import './IndexTemario.css'
import Footer from '../footer/footer'
import LogoBootstrap from '../Logos/logobootstrap'

const TemarioBootstrap = () => {
  return (
    <div>
        <Header/>
        <div className="flexArrows ">
<a  href="/ContenidoCss16-12"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoBootstrap1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
        <div className="linea"></div>

<div className="centrarAlllogo">
 <LogoBootstrap/>
 <div className="centrarAll3">
 <a href="/ContenidoBootstrap1"><h4>1- Introducción a Bootstrap</h4></a>
 <a href="/ContenidoBootstrap1-1"><h4>1.1- Funciones básicas de Bootstrap</h4></a>
    <a href="/ContenidoBootstrap1-2"><h4>1.2- ¿Por qué deberías usar Bootstrap?</h4></a>
  
    <a href="/ContenidoBootstrap2"><h4>2-  Documentación de Bootstrap </h4></a>
    <a href="/ContenidoBootstrap3"><h4>3- Por qué no usar Bootstrap </h4></a>
    <a href="/ContenidoBootstrap4"><h4>4- 3 Archivos primarios de Bootstrap</h4></a>
    <a href="/ContenidoBootstrap5"><h4>5- Video tutorial de Bootstrap</h4></a>
   
    
    
    
</div>
</div>
<div className="flexArrows ">
<a  href="/ContenidoCss16-12"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoBootstrap1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
        <Footer/>
    </div>
  )
}

export default TemarioBootstrap