import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoHtml1 = () => {
  return (
    <div>
   <Header/>
        
        <div className="flexArrows ">
        <a  href="/TemarioHtml"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoHtml1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
<h3>1-Introducción a HTML</h3>
<p><strong>
  HTML es el lenguaje con el que se define el contenido de las páginas web.</strong> Básicamente se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que compondrán una página web, como imágenes, listas, vídeos, etc.<br/><br/>

El HTML se creó en un principio con objetivos divulgativos de información con texto y algunas imágenes. No se pensó que llegara a ser utilizado para crear área de ocio y consulta con carácter multimedia (lo que es actualmente la web), de modo que, el HTML se creó sin dar respuesta a todos los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han presentado ya. El HTML 4.01 es el último estándar a febrero de 2001. Actualización a mayo de 2005, en estos momentos está apunto de presentarse la versión 5 de HTML, de la que ya se tiene un borrador casi definitivo.<br/><br/>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/10GHKjgQIR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
El HTML es un lenguaje de marcación de elementos para la creación de documentos hipertexto, muy fácil de aprender, lo que permite que cualquier persona, aunque no haya programado en la vida, pueda enfrentarse a la tarea de crear una web. HTML es fácil y pronto podremos dominar el lenguaje. Más adelante se conseguirán los resultados profesionales gracias a nuestras capacidades para el diseño y nuestra vena artista, así como a la incorporación de otros lenguajes para definir el formato con el que se tienen que presentar las webs, como CSS.<br/><br/>

Una vez conocemos el concepto de HTML os vamos a adelantar algunas cosas más. Este lenguaje se escribe en un documento de texto, por eso necesitamos un editor de textos para escribir una página web. Así pues, el archivo donde está contenido el código HTML es un archivo de texto, con una peculiaridad, que tiene extensión .html o .htm (es indiferente cuál utilizar). De modo que cuando programemos en HTML lo haremos con un editor de textos, lo más sencillo posible y guardaremos nuestros trabajos con extensión .html, por ejemplo mipagina.html</p>

        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/TemarioHtml"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoHtml1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
    </div>
  )
}

export default ContenidoHtml1