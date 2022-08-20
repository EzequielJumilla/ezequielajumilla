import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica16 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-7"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h4>1.6- Reforzando variables y constantes</h4><br/><br/>
<p>
    <strong>
*Esta es la segunda parte de variables y constantes, Vuelva a  <a href="/ContenidoLogica1-4"><strong className="blue">{1.4}</strong></a>  si no la ha leído es para un mejor proceso de aprendizaje*</strong><br/><br/>
<h4>
Ejercicio:</h4><br/>
*Constantes*<br/>
const a = 5<br/>
const b = 2<br/><br/>
<h4>
*Variables*</h4><br/>
var x = 10<br/>
var y = 5<br/>
var z = 10<br/><br/>
<h4>
*Responda*</h4><br/>
 inicio<br/>

const a = 5<br/>
const b = 2<br/>
var x = 10<br/>
var y = 5<br/>
var z = 10<br/><br/>


x = x + y - a<br/>
y = x + y - a<br/>
z = x + y -a<br/>
x = x + a * y/b<br/>
y = x + a * y/b<br/>
z = x + a * y/b<br/>

 fin<br/><br/>
 <h4>
*Respuesta*</h4><br/>
x = 10 + 5 - 5 = 10<br/>
y = 10 + 5 - 5 = 10<br/>
z = 10 + 10 - 5 = 15<br/>
x = 10 + 5 * 10 / 2 = 35<br/>
y = 35 + 5 * 10 / 2 = 60<br/>
z = 35 + 5 * 60 / 2 = 185<br/><br/>
<h4>
*Segundo ejercicio*</h4><br/>

const a = 5<br/>
var y = 10<br/>
var x = 1<br/>
var z = 4<br/><br/>
<h4>
*Responda*</h4><br/>
 inicio<br/>

const a = 5<br/>
var x = 10<br/>
var y = 1<br/>
var z = 4<br/>

x = x + z<br/>
y = x + z<br/>
z = x + z<br/>
x = z + a<br/>
y = z + y <br/>
z = x + y + z<br/><br/>



 fin<br/><br/>
<h4>
*Respuesta*</h4><br/>
x = 10 + 4 = 14<br/>
y = 14 + 4 = 18<br/>
z = 14 + 4 = 18<br/>
x = 18 + 5 = 23<br/>
y = 18 + 18 = 36<br/>
z = 19 + 36 + 23 = 78<br/>
</p>
<div className="centrar-imagen">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aCRovd0i6D4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-5"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-7"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica16