import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio3 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>3- Frontend vs Backend</h4>
        <p>Si tienes interés por el desarrollo web o la programación seguro que has oído hablar de los términos frontend y backend. Estos conceptos definen los <strong> dos aspectos diferenciados que pueden programarse en el mundo del diseño web.</strong> En este artículo te explicaremos en profundidad cada uno de estos términos y sus diferencias en términos de programación. </p>   
        <div className="centrar-imagen">
  <img src="https://www.datocms-assets.com/14946/1590690600-front-end-back-end-1080x608.png?auto=format" />
</div>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio3