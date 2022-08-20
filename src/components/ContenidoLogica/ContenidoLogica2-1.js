import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica21 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/TemarioJs"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
  
   <h3>2.1- Curso completo de Lógica</h3>
   <div className="centrar">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/7TKY-jksHRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>


    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-13"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/TemarioJs"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica21