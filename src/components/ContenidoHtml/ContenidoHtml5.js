import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml5 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>5- Formularios</h3>
<p>
Los formularios en HTML sirven al propósito de recolectar información proporcionada por los visitantes del sitio, la cual es luego enviada nuevamente al servidor. Para su correcto funcionamiento es importante que el formulario provisto en HTML sea acompañado de un código del lado servidor, al que denominaremos "agente procesador", que se encargará de recibir y procesar la información como el autor vea conveniente. Este procesamiento puede consistir en, por ejemplo, el almacenamiento de la información o su envío mediante correo electrónico.
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QDOfODwsfuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml5