import React from 'react'
import './ContenidoBootstrap.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoBootstrap3 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoBootstrap2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap4"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>3- Por qué no usar Bootstrap</h3>
<p>
A pesar de sus ventajas, Bootstrap tiene ciertas limitaciones que no son adecuadas para determinados tipos de proyectos.<br/><br/>

Dado que Bootstrap tiene un estilo visual consistente, necesita una fuerte personalización y sustitución de estilos para hacer que un proyecto sea diferente de otro. De lo contrario, todos los sitios web construidos con este framework tendrán los mismos componentes de navegación, estructura y diseño, lo que les dará un aspecto poco profesional.<br/><br/>

El hecho de tener un gran número de funciones implica que los archivos son de gran tamaño. El uso de Bootstrap en tu proyecto puede ralentizar el tiempo de carga del sitio web y sobrecargar tu servidor. Para evitar este problema, asegúrate de añadir sólo las clases que necesites y utiliza la versión minificada de los archivos.<br/><br/>

Aunque Bootstrap es compatible con la última versión de los navegadores más populares, no ocurre lo mismo con las versiones más antiguas. Esto significa que el aspecto de tu sitio web dependerá totalmente de la voluntad de los usuarios de actualizar sus navegadores.<br/><br/>

Otro inconveniente es que los estilos de Bootstrap son relativamente voluminosos. Esto puede dar lugar a una salida de HTML innecesaria, que desperdicia recursos de la unidad central de procesamiento.<br/><br/>

Aunque es fácil de usar, Bootstrap tiene una pequeña curva de aprendizaje al principio. Se necesita tiempo para aprender las clases y componentes disponibles, lo que puede resultar complicado para alguien sin conocimientos técnicos.
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/svqTySGut7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoBootstrap2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap4"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoBootstrap3