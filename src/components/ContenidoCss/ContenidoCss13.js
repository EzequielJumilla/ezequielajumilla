import React from 'react'
import './ContenidoCss.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoCss13 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoCss12"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoCss14"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>13- Conceptos de Grid</h3>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9w3gy2dYN_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoCss12"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoCss14"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoCss13