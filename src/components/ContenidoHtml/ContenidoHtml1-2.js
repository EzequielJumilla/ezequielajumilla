import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml12 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.2- Etiquetas HTML</h3>
<p>
Antes de entrar en materia, conviene explicar de que vamos a hablar. Las etiquetas HTML son pequeños bloques de código, que indican al navegador como debe interpretar el contenido recogido entre dichas etiquetas. Por ejemplo, si queremos «pintar» un párrafo de texto, hay una etiqueta especifica para que el navegador interprete ese texto como un párrafo. Estas etiquetas cuentan además con atributos que podemos añadir y que en sí, pueden determinar como será el comportamiento específico que tendrá la etiqueta. Te dejo por aquí un listado de atributos HTML para complementar esta entrada.
<br/><br/>
Las etiquetas HTML comienzan siempre con el símbolo « » y finalizan con el símbolo («  »). Entre medias de estos dos símbolos irá el nombre de la etiqueta que queremos que el navegador interprete.
<br/><br/>
Todas las etiquetas HTML están compuestas por una etiqueta de apertura, y una etiqueta de cierre. Aunque hay excepciones, como por ejemplo la etiqueta para cargar una imagen que son llamadas etiquetas huérfanas, ya que solo tienen etiqueta de apertura.
<br/><br/>
Las etiquetas de cierre se construyen con una barra «/» justo antes de la propia etiqueta y los símbolos « » y « ». 
</p>

<div className="centrar-imagen">
  <img src="https://i.postimg.cc/k4s9SqbT/Anatom-a-de-Etiqueta.png" />
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml12