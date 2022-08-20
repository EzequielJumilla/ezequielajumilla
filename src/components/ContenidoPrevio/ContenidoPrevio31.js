import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio31 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>3.1- ¿Qué es Frontend? </h4>
        <div className="centrar">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N8mFHB7JDkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <p>
        Como su nombre indica, el Frontend hace referencia a <strong>la parte visible o interfaz de una página web o de un programa o aplicación móvil;</strong> aquella que verán y interactúan los usuarios que accedan. Más específicamente, hace referencia a los <strong>colores, letras, animaciones y demás elementos que pueden visualizar los usuarios.</strong> 
   

El objetivo de un desarrollador Frontend es conseguir que la página sea intuitiva, funcional y estética para los usuarios. Es, en definitiva, la parte del desarrollo de la que depende la calidad que el usuario percibe dentro de una página, programa o aplicación. 

El desarrollo Frontend se trabaja a través de tres lenguajes diferenciados: <strong>HTML, CSS y JavaScript.</strong> 
        </p>
        <div className="linea"></div>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio31