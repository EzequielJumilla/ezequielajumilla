import React from 'react'
import './ContenidoCss.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoCss1 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/TemarioCss"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoCss1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>1- Introduccion a Css</h3>
    <p>
    CSS u «Hoja de estilos en cascada» es un lenguaje vinculado a HTML donde definimos los estilos de nuestras páginas web. Funciona a base de reglas, tenemos un selector (etiquetas o conjunto de etiquetas de HTML) que a través de una declaración le damos valor a las propiedades de diseño.
    </p>
    <div className="centrar">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AN453so4Mh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h3>Como vincular HTML y CSS</h3>

    <div className="centrar">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Q0VGpvvMUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/TemarioCss"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoCss1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoCss1