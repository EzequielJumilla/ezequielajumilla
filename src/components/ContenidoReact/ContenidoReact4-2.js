import React from 'react'
import './ContenidoReact.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoReact42 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoReact4-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact4-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>4.2- Propiedades</h3>
    <p></p>
    <div className="centrar">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FOWO07pImCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoReact4-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact4-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoReact42