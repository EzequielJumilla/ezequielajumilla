import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica110 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-9"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-11"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
   <h3>1.10- Operadores ariméticos, lógicos y relacionales.</h3> 
<p>
Operadores Ariméticos (jerarquía de operaciones):<br/><br/>
Suma = +<br/>
Resta = -<br/>
Multiplicación = *<br/>
División = /<br/>
Potencia:^<br/>
Modúlo : %<br/><br/>

Operadores Relacionales:<br/><br/>
<div className="centrar">
<img src="https://galanistaprogramando.files.wordpress.com/2013/01/relacionales1.jpg" />
</div>
<h4>Operadores Lógicos u operadores boooleanos (verdadero o falso)(true or false)</h4>

Conjunción<br/>
* And (si) = && <br/>
Son dos condiciones o más, si una es falsa el resultado es negativo. Deben ser todas las condiciones verdaderas para devolver un resultado como verdadero.<br/>
<div className="centrar">
<img src="https://d3lqdljps13i2n.cloudfront.net/recursos/123/3950873/imagen_1_1536101480.png" />
</div>
<h4>*Explicación*</h4><br/>
Verdadero AND Verdadero = Verdadero <br/>
Si la condicion 1 y 2 son verdades el resultado es verdadero <br/>

Verdadero AND Falso = Falso<br/>
Si la condicion 1 es verdadera y 2  es falsa el resultado es falso<br/>

Falso AND Verdadero = Falso<br/>
Si la condicion 1 es falsa y 2 es verdadera el resultado es falso<br/>

Falso AND Falso = Falso <br/>
Si la condicion 1 es falsa y 2  es falsa el resultado es falso<br/>


Disyunción<br/>
* Or (o) = ||<br/>
Si tan solo una de las condiciones es verdadero la condición sera correcta<br/><br/>

Verdadero OR Verdadero = Verdadero<br/>
Verdadero OR Falso = Verdadero<br/>
Falso OR Verdadero = Verdadero<br/>
Falso OR Falso = Falso<br/><br/>

<h4>Negación</h4>

* Not (no) = !=<br/>
Es todo lo contrario a los valores que recibe<br/>
NOT VERDADERO = FALSO<br/>
NOT FALSO = VERDADERO<br/>



                                               
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hnH_IrQ2bjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-9"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-11"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica110