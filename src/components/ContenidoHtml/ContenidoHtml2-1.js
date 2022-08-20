import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml21 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>2.1- Etiquetas de Titulos</h3>
<p>Etiquetas de Títulos
Hay hasta 6 etiquetas en HTML para definir títulos o secciones. Todas ellas llevan por defecto el texto en negrita, y son: <strong> h1, h2, h3, h4, h5 y h6</strong>. La etiqueta h1 es la de mayor importancia y por tanto se utiliza para definir los titulares de la página. La importancia del resto de etiquetas es descendente, de forma que la etiqueta h6 es la que se utiliza para delimitar las secciones menos importantes de la página.

Todas ellas tienen su respectiva etiqueta de cierre, y al igual que en los párrafos, el texto del título va encerrado entre las etiquetas de apertura y cierre. <br/><br/>



Al igual que los párrafos, estas son etiquetas de bloque, de manera que empiezan siempre al principio de una nueva línea y provocan que el elemento siguiente se coloque siempre al principio de una nueva línea.

El tamaño del texto de las etiquetas va decreciendo desde la h1 con un tamaño más grande a la h6 que es la de menor tamaño.</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QrJyvzjjDT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml21