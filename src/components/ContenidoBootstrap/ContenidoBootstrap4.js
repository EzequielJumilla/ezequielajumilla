import React from 'react'
import './ContenidoBootstrap.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoBootstrap4 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoBootstrap3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>4- 3 Archivos primarios de Bootstrap</h3>
<div className="centrar">
<img src="https://i1.wp.com/blog.webtraining.zone/wp-content/uploads/2018/02/event-boostrap.4.jpg?resize=660%2C347" /></div>
<p>
Bootstrap consiste en una colección de sintaxis compilada en tres archivos principales:<strong> Bootstrap.css, Bootstrap.js y Glyphicons.</strong> Hay que tener en cuenta que Bootstrap requiere una librería JS llamada jQuery para ejecutar plugins y componentes JS.

Estos son los tres archivos principales del framework que gestionan la interfaz de usuario y la funcionalidad de un sitio web.
</p>
<h4>Bootstrap.css</h4>
<p>
Bootstrap.css es un framework CSS que organiza y gestiona el diseño de un sitio web. Mientras que HTML gestiona el contenido y la estructura de una página web, CSS se ocupa del diseño del sitio. Por esa razón, ambas estructuras deben coexistir para realizar una acción en particular.

Bootstrap.css y sus funciones le permiten al desarrollador crear una apariencia uniforme en tantas páginas web como desee. Por lo tanto, no tendrá que dedicar horas a la edición manual.

En lugar de programar desde cero, todo lo que tienes que hacer es referir una página web al archivo CSS. Cualquier alteración necesaria se puede hacer en ese único archivo.

Las funciones de CSS no se limitan solo a los estilos de texto, ya que pueden usarse para dar formato a otros aspectos de la página web, como tablas y diseños de imágenes.
</p>
<h4>Bootstrap.js</h4>
<p>
ste archivo es la parte principal de Bootstrap. Consiste en archivos JavaScript que son responsables de la interactividad del sitio web.

Para ahorrar tiempo escribiendo sintaxis de JavaScript muchas veces, los desarrolladores tienden a usar jQuery, una popular librería de JavaScript multiplataforma de código abierto.

Aquí hay algunos ejemplos de lo que puede hacer jQuery:

Realizar solicitudes de AJAX, como restar datos de otra ubicación de forma dinámica.
Crear widgets usando una colección de complementos de JavaScript.
Crear animaciones personalizadas usando propiedades CSS.
Agregar dinamismo al contenido del sitio web.
Si bien un Bootstrap con propiedades CSS y elementos HTML puede funcionar bien, necesita jQuery para crear un diseño responsive. De lo contrario, solo puedes usar las partes estáticas de CSS.

Por lo tanto, todo ingeniero de software debería aprender sobre jQuery, ya que es una parte esencial del desarrollo web.
</p>
<h4>Glyphicons</h4>
<p>
Los íconos son una parte integral del frontend de un sitio web, ya que suelen desplegar acciones y datos dentro de la interfaz de usuario.

Bootstrap usa íconos llamados Glyphicons, que incluyen el set Glyphicons Halflings. Aunque el diseño es básico, cumplen sus funciones esenciales y su uso es gratuito.

Si quieres encontrar íconos más elegantes, Glyphicons vende varios sets premium para sitios web de nichos específicos.

También puedes descargar íconos individuales y específicos por tema de forma gratuita en varios sitios web como Flaticon, GlyphSearch e Icons8.

Para cambiar el tamaño de los Glyphicons, es necesario anular el estilo por defecto con la propiedad CSS font-size.
</p>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoBootstrap3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoBootstrap4