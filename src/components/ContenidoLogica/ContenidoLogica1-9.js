import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica19 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-8"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-10"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
   <h3> 1.9- Algoritmo y decisiones</h3>
   <p>
Cuando creamos algoritmos tenes que estar muy atentos y ser extremadamente analiticos, intentando crear un algoritmo con una orden específica y no con fines variados.Tenemos que tomarlo en cuenta para evitar que la computadora caiga en un error o que no sepa que hacer, para eso esta este gran ¡Evitar ambiguedades!.<br/>
Esto quiere decir que vamos a intentar ser lo mas específicos posible y vamos evitar dejar hoyos en nuestro código.<br/><br/>

<h3>Como funcionan las instrucciones</h3>
Disponemos de una condición con instrucciones y habrá opción 1 o opción 2, cada una con un objetivo predeterminado. Un ejemplo claro de esto: Es recibir una notificación en una página que nos pregunta si sos menores o mayores, y según nuestra respuesta, el algoritmo determina una de las dos opciones.<br/><br/>
                                               <strong>INICIO</strong>    <br/><br/>
                                                   Condicion
                                               Instruccion 1: Si es mayor, accede a la página<br/>
                                               Instruccion 2: Si es menor, no accede a la página <br/><br/>   
                                               <strong>FIN</strong>    




</p>
<div className="centrar"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y9J1mxbxI0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-8"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-10"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica19