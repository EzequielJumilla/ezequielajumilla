import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio11 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>1.1- Programación en informática</h4>
       <p>En el ámbito de la informática, la programación refiere a la acción de crear programas o aplicaciones a través del desarrollo de un código fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa.
       La programación es lo que permite que un ordenador funcione y realice las tareas que el usuario solicita.
</p>
<div className="centrar-imagen">
  <img src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" />
</div>
<p>La programación informática es el proceso por medio del cual se diseña, codifica, limpia y protege el código fuente de programas computacionales. A través de la programación se dictan los pasos a seguir para la creación del código fuente de programas informáticos. De acuerdo con ellos el código se escribe, se prueba y se perfecciona.</p>
<p>
La programación se guía por una serie de reglas y un conjunto pequeño de órdenes, instrucciones y expresiones que tienden a parecerse a una lengua natural acotada. El lenguaje de programación, son todas aquellas reglas o normas, símbolos y palabras particulares empleadas para la creación de un programa y con él, ofrecerle una solución a un problema determinado.

El lenguaje de programación es el responsable de que la computadora siga paso a paso las órdenes que el programador ha diseñado en el algoritmo. Con esto se entiende que el lenguaje de programación es una especie de intermediario entre el ordenador y el usuario, para que este último pueda darle respuesta a los problemas mediante la computadora y haciendo uso de palabras (funciones), que le interpretan dicho programa al computador para la realización de ese trabajo.
</p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio11