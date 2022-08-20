import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica111 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-10"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-12"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
  <h3>1.11- Diagramas de flujos.</h3>  
<p>
Herramientas para un programador. El diagrama de flujo es una manera de estructuras el código con simbología. El diagrama de flujo, también conocido como flujograma, es una herramienta utilizada para representar la secuencia de las actividades en un proceso. Para ello, muestra el comienzo del proceso, los puntos de decisión y el final del mismo. <br/>
<div className="centrar">
<img src="https://www.lifeder.com/wp-content/uploads/2020/08/diagrama-de-flujo-lifeder-decision-1024x736.jpg"/>
</div>
<h4>*Ejercicio*</h4>

1.- Programa que sume dos números e indique si el resultado, es menor, mayor o igual a 50<br/>

<h4>*Respuesta*</h4>

Inicio  Var a,e,r Primer nro (guardamos en a)  segundo Nro(guardamos en e)  sumamos a + e Si es mayor a 50(es mayor a 50)  Si es menor a 50 (es menor a 50)  Si es igual a 50.<br/><br/>


2.- Realizar un programa que pida el número de falta de un trabajador, su sueldo diario y en base a esto determine cuánto dinero ganará en la quincena. Si su sueldo quincenal es menor que 6000 tendrá un estatus igual a bajo, si es mayor a 6000 tendrá un estatus igual a sobresaliente y si es igual a 6000 tendrá un estatus igual al promedio.<br/>

Mostrar faltas,sueldo diario, sueldo quincenal y estatus
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/LpMVq9_YqEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-10"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-12"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica111