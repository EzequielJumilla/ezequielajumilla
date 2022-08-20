import React from 'react'
import './ContenidoBootstrap.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoBootstrap2 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1-2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>2- Documentación oficial Bootstrap</h3>
    <div className="centrar"> 
<img src="https://blog.tednologia.com/wp-content/uploads/2021/02/bootstrap-logo-2.png" />
    </div>
<p>
Bootstrap proporciona documentación para los desarrolladores que quieran aprender a utilizar este framework por primera vez. Aquí hay varios temas que puedes encontrar en la página de documentación de Bootstrap:<br/><br/>


<strong>Contenido:</strong> cubre el código fuente precompilado de Bootstrap.<br/><br/>
<strong>Navegadores y dispositivos:</strong> enumera todos los navegadores web y móviles compatibles y los componentes basados en móviles.<br/><br/>
<strong>JavaScript:</strong> desglosa varios plugins JS construidos sobre jQuery.<br/><br/>
<strong>Tematización:</strong> explica las variables Sass incorporadas para facilitar la personalización.<br/><br/>
<strong>Herramientas:</strong> te enseña a utilizar los scripts npm de Bootstrap para diversas acciones.<br/><br/>
<strong>Accesibilidad:</strong> cubre las características y limitaciones de Bootstrap con respecto al marcado estructural, los componentes, el contraste de colores, la visibilidad del contenido y los efectos de transición.<br/><br/>
La documentación también incluye ejemplos de código para las prácticas básicas. Incluso puedes copiar y modificar los ejemplos de código para tus proyectos, ahorrando tiempo de tener que codificar desde cero.
</p>
<div className="centrar">
<a href="https://getbootstrap.com/" target="_blank"  rel="noopener noreferrer"><button className="button-index">
  Link: <strong>Bootstrap</strong> 
</button></a>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1-2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoBootstrap2