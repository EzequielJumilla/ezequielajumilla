import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml11 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.1-  Formato HTML & Index</h3>
<p>
Tener un archivo index subido a nuestro dominio es fundamental si se quiere tener una página web que funcione. Se puede decir más alto pero no más claro: sin index no hay página web. Así pues es sumamente importante tener un archivo index.<br/><br/>
El tema esta en que cuando creamos una página web en Internet el primer paso que hay que tener en cuenta es crear el archivo index.html. El archivo index.html es la página principal del dominio al cual se accede desde Internet, lo que vemos en primer lugar a la hora de acceder a ese nombre de dominio.<br/><br/>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uHnR-fW7dYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</p>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml11