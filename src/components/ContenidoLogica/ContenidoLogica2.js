import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica2 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-13"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica2-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
   <h3>2- ¿Qué es un ciclo? Ciclo mientras</h3> 
<p>

<strong>Ciclo:</strong> Estructura que nos permite repetir un conjunto de instrucciones. Un ciclo debe ser finito, tener un principio y un final claro.
Dentro de un ciclo puede existir cualquier estructura, incluyendo otro ciclo.<br/><br/>

Para que termine un ciclo hay que brindarle una condición, por lo cual es fundamental entender <br/><br/> 
<div className="centrar-imagen">
<a href="/ContenidoLogica1-10" target="_blank"  rel="noopener noreferrer"><button className="button-index">
  Link: <strong>Operadores</strong> 
</button></a>
</div>
<br/><br/>
<strong>Ciclo Mientras (condición)</strong><br/>
    instrucciones<br/>
    Fin Mientras<br/><br/>
   <strong> Fin</strong><br/>

<h4>Este ciclo se va a ejecutar mientras la condición sea verdadera.</h4>
<br/><br/>
<strong>
*Ejercicio*</strong><br/>
Imprimir nros impares entre el 1 y 20<br/><br/>
<strong>
*Respuesta*</strong><br/><br/>
<h4>INICIO</h4>
Var N = 1<br/>
Mientas N  20<br/>
imprimir N <br/>
N = N + 2<br/>

fin mientras<br/><br/>
<strong>FINAL</strong><br/><br/>
<strong>*Explicación de la respuesta*</strong>
<br/>
Inicializamos con una variable de tipo de dato númerico y se declara un ciclo que se va a ejecutar (Mientras N  20) hasta que sea menor a 20 osea 19, si estuviera el signo = (menor o igual) sería hasta el 20.<br/>
Luego se imprime N<br/>
Y a N se le suma de a 2, al valer 1 y sumarle 2 constantemente va a imprimir los siguientes nros : 1, 3, 5, 7, 9, 11, 13, 15, 17, 19.<br/><br/>



<h4>*En Javascript existe los siguientes ciclos: While, Do while, while do, for, for in, for of*</h4>

</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Na7aLu07JOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-13"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica2-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica2