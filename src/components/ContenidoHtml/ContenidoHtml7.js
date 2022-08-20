import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml7 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml7-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
   <h3>7- Nav</h3>
   <p>
   El elemento nav es un contenedor para enlaces de navegación, que se supone proveen formas de acceder a las secciones del sitio web, así como a documentos externos. Se supone que los vínculos dentro de este elemento corresponden a un bloque de navegación principal únicamente.
   </p>
   <div className="centrar">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/zi-ZDEjQkjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml7-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml7