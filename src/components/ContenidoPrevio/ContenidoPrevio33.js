import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio33 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3-2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-4"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>3.3- ¿Qué es Backend?</h4>
  
  <div className="centrar">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZTsi1e-VJIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>
El Backend hace referencia a <strong>todos aquellos elementos de la página web, aplicación o programa, que son inaccesibles de cara a los usuarios.</strong>  Gestionar el Backend significa <strong>crear la lógica, conectarla con el servidor y gestionar los datos o bases de datos</strong> .También se encarga, en parte, de la experiencia del usuario a base de supervisar el rendimiento del frontend,<strong>vigilando que la página no caiga, optimizando para que disponga de un mayor rendimiento.</strong><br/><br/>

Un desarrollador Backend debe dominar lenguajes diferentes a un programador Frontend. El único que tienen en común es JavaScript, un lenguaje orientado a objetos, muy ligero de escribir y que permite manejar los datos de una página. Aun así, existen varios lenguajes que cualquier Backend developer deberá dominar.
</p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3-2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-4"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio33