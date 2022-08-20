import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica112 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-11"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-13"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
   <h3> 1.12- Decisión por casos</h3>
<p>Siempre que hay una decision hay una condición con la cuál se decide la instrucción.
Es la idea de encontrar la solución con la menor cantidad de código posible.<br/><br/>
<h4>
Sintaxis de decisión por casos</h4>
Interruptor (evaluación del caso)<br/>
  Caso(valor)<br/>
       Instrucciones<br/>
  Caso (valor)<br/>
       Instrucciones<br/>
    ......<br/>
    Por defecto<br/>
        Instrucciones<br/><br/>
        <h4>
   Fin interruptor</h4><br/>

   Con Javascript se hace con Switch<br/><br/>

   *Crear algoritmo para maquina expendedora en el cual se pueda eligir los alimentos según el nro asignado y nos asigne el precio total*<br/><br/>

   Nro de producto y precio.<br/>
   1 Papas naturales = 10$<br/>
   2 Papas con chile y limón = 11$<br/>
   3 Donitas = 9$<br/>
   4 Cacahuates = 8$<br/>
   5 Gomitas = 6$<br/><br/>

   *Respuesta*<br/>
  <strong>INICIO</strong> <br/><br/>

   Var op <br/>
   Seleciona una opción<br/>
   La selección guardar en op<br/><br/>

  * Interruptor(op)<br/>
   Caso(1)<br/>
   ingrese 10%<br/>

   Caso (2)<br/>
   ingrese 11$<br/>

   Caso(3)<br/>
   ingrese 9$<br/>

   Caso (4)<br/>
   ingrese 8$<br/>

   Caso (5)<br/>
   ingrese 6$<br/>

   Caso (6) <br/>
   Por defecto<br/>
   La opcion no existe<br/>

   Fin  del interruptor<br/><br/>

  <strong> FIN</strong><br/>

Según el valor seleccionado en op va a ser el tipo de caso a ejecutar.</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qfvuG2M5LKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-11"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-13"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica112