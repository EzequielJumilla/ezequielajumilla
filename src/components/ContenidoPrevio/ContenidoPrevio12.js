import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio12 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>1.2- Lenguaje de programación</h4>
        <div className="centrar">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gFMMmi-EYEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       
       <p>
       El lenguaje de programación es un idioma artificial prediseñado formado por signos, palabras y símbolos que permite la comunicación entre el programador y el ordenador.

Las instrucciones que sigue el ordenador para la ejecución de aplicaciones y programas están escritas en lenguaje de programación y luego son traducidas a un lenguaje de máquina que puede ser interpretado y ejecutado por el hardware del equipo (parte física).

El código fuente está formado por líneas de texto que expresan en lenguaje de programación las instrucciones que debe llevar a cabo el ordenador. Este código es creado, diseñado, codificado, mantenido y depurado a través de la programación.

Existen diferentes lenguajes de programación (Java, Pearl, Python) que se valen de diversos programas en los que se vuelcan las instrucciones. Estos lenguajes varían con el tiempo, se expanden y evolucionan.

       </p>

       <div className="centrar-imagen">
  <img src="https://codigoonclick.com/wp-content/uploads/2018/02/mejores-lenguajes-de-programacion-2018.jpg" />
</div>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio12