import React from 'react'
import './ContenidoBootstrap.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoBootstrap11 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h4>1.1- Funciones básicas de Bootstrap</h4>
<p>Bootstrap está constituido por una serie de archivos CSS y JavaScript responsables de asignar características específicas a los elementos de la página.<br/><br/>
<strong>
Hay un archivo principal llamado bootstrap.css, que contiene una definición para todos los estilos utilizados. Básicamente, la estructura del framework se compone de dos directorios:</strong><br/><br/>
<strong>
Css:</strong> contiene los archivos necesarios para la estilización de los elementos y una alternativa al tema original.<br/><br/>
<strong>
Js:</strong> contiene la parte posterior del archivo bootstrap.js (original y minificado), responsable de la ejecución de aplicaciones de estilo que requieren manipulación interactiva.<br/><br/>

</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/H_K9Kfq-PNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoBootstrap11