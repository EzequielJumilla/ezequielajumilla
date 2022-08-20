import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml4 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml3-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>4- Div</h3>
<h4>¿Qué es una etiqueta HTML?</h4>
<p>Una etiqueta div es una etiqueta que define las divisiones lógicas existentes en el contenido de una página web. Puede utilizar etiquetas div para centrar bloques de contenido, crear efectos de columna y crear diferentes áreas de color, entre otras posibilidades</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/zYgWEkRN_W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h4>Div como contenedor</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/k6T2Lokkx6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml3-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml4