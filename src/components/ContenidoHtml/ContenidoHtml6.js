import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml6 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml7"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>6- Metadatos</h3>
<h4>¿Qué son los metadatos y para qué sirven?</h4>
<p>
La definición más concreta de los metadatos es qué son “datos acerca de los datos” y sirven para suministrar información sobre los datos producidos. Los metadatos consisten en información que caracteriza datos, describen el contenido, calidad, condiciones, historia, disponibilidad y otras características de los datos.
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/h5FebjAMCMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml7"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml6