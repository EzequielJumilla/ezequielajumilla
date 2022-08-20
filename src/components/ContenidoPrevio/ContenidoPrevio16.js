import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio16 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>1.6- Elementos de la programación</h4>
<p>
Existen ciertos elementos que son clave a la hora de conocer o ejecutar un lenguaje de programación, entre los más representativos están:<br/><br/>
<strong>Palabras reservadas:</strong> Palabras que dentro del lenguaje significan la ejecución de una instrucción determinada, por lo que no pueden ser utilizadas con otro fin.<br/>
<strong>Operadores:</strong> Símbolos que indican la aplicación de operaciones lógicas o matemáticas.<br/>
<strong>Variables:</strong> Datos que pueden variar durante la ejecución del programa.<br/>
<strong>Constantes:</strong> Datos que no varían durante la ejecución del programa.<br/>
<strong>Identificadores:</strong> Nombre que se le da a las diferentes variables para identificarlas.


</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0WiIWO60NGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio16