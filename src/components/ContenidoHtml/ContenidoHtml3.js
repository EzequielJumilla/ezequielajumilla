import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml31 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml2-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml3-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>3- Enlaces</h3>
<p>

Los enlaces permiten conectar entre sí las páginas de un sitio web, así como con otros sitios Web. Éstos permiten que el navegante pueda saltar de una página a otra y de un sitio a otro rápidamente, con sólo hacer un clic.<br/>

Los enlaces suelen detectarse fácilmente. Basta normalmente con deslizar el puntero del ratón sobre las imágenes o el texto que contiene un enlace y la forma del puntero cambia, transformándose por regla general en una mano con un dedo señalador. Además suelen ir subrayados o destacados en otro color, para que el usuario no tenga dificultad en reconocerlos.
</p>
<div className="flexArrows ">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uphhHrkRLQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml2-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml3-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml31