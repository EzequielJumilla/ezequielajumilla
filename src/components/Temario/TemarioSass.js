import React from 'react'
import Header from '../Header/Header'
import './IndexTemario.css'
import Footer from '../footer/footer'
import Logosass from '../Logos/logosass'

const TemarioSass = () => {
  return (
    <div>
        <Header/>
        <div className="flexArrows ">
<a  href="/ContenidoBootstrap5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoSass1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
        <div className="linea"></div>
        <div className="centrarAlllogo">
 <Logosass/>
 <div className="centrarAll4">
 <a href="/ContenidoSass1"><h4>1- Introducción a Sass</h4></a>
    <a href="/ContenidoSass1-1"><h4>1.1- Funciones básicas de Sass</h4></a>
   <a href="/ContenidoSass1-2"><h4>1.2- Desventajas de utilizar Sass</h4></a>
 <a href="/ContenidoSass2"><h4>2- Curso con Proyecto Sass</h4></a>
 </div>
</div>
        <div className="linea"></div>
        <div className="flexArrows ">
<a  href="/ContenidoBootstrap5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoSass1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
        
        <Footer/>
    </div>
  )
}

export default TemarioSass