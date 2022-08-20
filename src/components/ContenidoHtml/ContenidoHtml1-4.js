import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml14 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.4- Estructura básica</h3>
<p>
La estructura básica de una página web se compone por las etiqueta Html, head y body. La primera indica el comienzo de la página; la segunda es la cabecera y contiene información descriptiva del sitio; y la tercera es la que contiene todos los elementos visibles dentro de la página.
</p>
<div className="centrar">
<img src="https://disenowebakus.net/imagenes/articulos/estructura-basica-de-una-pagina-web-en-html.jpg"/>
</div>
<h4>Etiqueta head</h4>
<p>Las listas en HTML ordenadas son aquellas que nos muestran los elementos de la lista en orden. Para representar el orden tendremos los elementos numerados. Es decir, cada uno de los elementos irá precedido de un número o letra que establezca su orden. Las listas en HTML ordenadas se representan mediante el elemento OL.</p>

<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/P4VWghxIbX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>Etiqueta body</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vBe4Iaatwho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>Etiqueta Meta</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/h5FebjAMCMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml14