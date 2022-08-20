import React from 'react'
import './ContenidoSass.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoSass11 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoSass1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoSass1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.1- Funciones básicas de Sass</h3>
<p>
El uso de una herramienta como Sass proporciona una serie de ventajas, como son las siguientes:<br/><br/>

Reduce el tiempo para crear y mantener el CSS.<br/><br/>
Permite tener una organización modular de los estilos, lo cual es vital para proyectos grandes.<br/><br/>
Proporciona estructuras avanzadas propias de los lenguajes de programación, como variables, listas, funciones y estructuras de control.<br/><br/>
Permite generar distintos tipos de salida, comprimida, normal o minimizada, trabajando tanto en desarrollo como en producción, además se hace una forma muy fácil.<br/><br/>
Permite vigilar los ficheros, de tal manera que, si ha habido un cambio en la hoja de estilos, se regenera automáticamente (modo watch).<br/><br/>
Tiene muy pocas dependencias, sobre todo la nueva versión, que es dart-sass. En las anteriores versiones se dependía de muchas librerías de Ruby y era un poco engorroso de instalar, pero con la nueva versión, la instalación es muy fácil.<br/><br/>
Existen muchas herramientas asociadas, muchas librerías hechas con Sass y una comunidad muy importante de usuarios.<br/><br/>
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/BUTYDfuAspk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoSass1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoSass1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoSass11