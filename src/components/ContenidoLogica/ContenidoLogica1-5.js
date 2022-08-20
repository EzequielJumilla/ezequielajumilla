import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica15 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>

<h4>1.5- Variables y Constantes.</h4>
    <p>
    <strong>Variable: </strong> Es un espacio en memoria que va a guardar datos y estos van a ser de los (1.3 Tipos de datos)
estudiados con anterioridad.Estos datos van a estar almacenados bajo el nombre de una variable, pueden ser modificadas. Y durante el proceso puedan ir variando su valor, Ej: <br/><br/>

<h4>Como declarar una variable:</h4><br/><br/>

var Numero = 1<br/>
var Numero = Numero + 1<br/><br/>
<strong>¿Cuál es el valor de Numero?</strong>

<h4>Explicación:</h4><br/><br/><strong>
var = variable.<br/>
Numero = nombre de la variable.<br/>
1 = (tipo de dato)<br/></strong>
<br/><br/>
var = variable <br/>
Numero = nombre de la variable<br/>
Numero = valor de variable Numero <br/>
+1 = se le suma uno al valor de Numero <br/><br/>
<strong>El resultado es: 2</strong>
<br/><br/>
<h4>*Esto con const no sería posible*</h4><br/><br/>
<strong>
Uncaught SyntaxError:</strong> Identifier 'numero' has already been declared = Error del mismo codigo con const en JAVASCRIPT
<br/><br/><strong>
Ejemplo gráfico:</strong>
Supongamos que tenemos una caja, la variable es la caja porque es donde se pueden almacenar elementos y el nombre de la variable va a hacerla diferenciar del resto , los elementos que vamos a decidir guardar son los tipos de datos.
    </p>
    <div className="centrar-imagen">
  <img src="https://www.cursosgis.com/wp-content/uploads/2-54.jpg" />
</div>
<p>
  <strong>
Constante:</strong> La diferencia entre las variables y las constantes es que las constantes no cambian con el tiempo.Es un espacio en memoria que va a guardar datos y estos van a ser de los <strong>(1.4 Tipos de datos)</strong>
estudiados con anterioridad. Va a tener un nombre que identifique a la constante. Ej de constantes: 
Si tuvieramos que programar un reloj, uno de los tipos de datos que se va a mantener por siempre son los 60 en los minutos o segundos,por eso nos beneficiaria crear una constante y asignarle valor 60.<br/><br/>

<h4>*Como declarar una constante:<br/><br/></h4>


<strong className="red">const</strong> <strong className="verde">relojSegundos</strong>  =<strong> 60</strong><br/><br/>
<h4>Explicacion de la declaración:</h4>
<br/><br/>

<strong className="red">const</strong>
 =<strong> constante</strong><br/><br/>

<strong className="verde">relojSegundos</strong> 
=<strong > nombre de la constante<br/><br/>
</strong>
<strong>60
 = valor asignado</strong><br/><br/>
<h4>Otros ejemplos de constantes:</h4>
<br/><br/>
<strong className="red">const</strong> <strong className="verde">pi</strong> = <strong>3.1416</strong><br/><br/>
<strong className="red">const</strong> <strong className="verde">iva</strong> = <strong>21</strong><br/><br/>
<strong className="red">const</strong> <strong className="verde">nombre</strong> = <strong>"Ezequiel"</strong><br/><br/>
<strong className="red">const</strong> <strong className="verde">letra</strong> = <strong>"a"</strong><br/><br/>
<h4>
*Un ejemplo un poco mas complejo*</h4><br/><br/>
var Numero = 1<br/><br/>
var Numero = Numero + 1<br/><br/>

Explicación:<br/><br/>
var = variable.<br/><br/>
Numero = nombre de la variable.<br/><br/>
1 = tipo de dato<br/><br/>

var = variable<br/><br/>
Numero = nombre de la variable<br/><br/>
Numero = valor de variable Numero <br/><br/>
+1 = se le suma uno al valor de Numero <br/><br/>
<h4>
*Esto con const no sería posible*<br/><br/>
</h4>
<strong>Uncaught SyntaxError:</strong> Identifier 'numero' has already been declared = Error del código con const<br/><br/>
<h4>*Los  ejemplos que fueron mostrados son ejempleficados por la sintaxis de variables en Javascript: Var , let, const*</h4>
<br/><br/>
<h4>Ejercicio :</h4>
 <br/><br/>
Inicio <br/><br/>
<strong className="red">const</strong> <strong className="verde">pi</strong> = 3.1416<br/><br/>
<strong className="red">const</strong> <strong className="verde">n1</strong>= 1.0<br/><br/>
<strong className="red">const</strong> <strong className="verde">n2</strong> = 2.5<br/><br/>
<strong className="red">const</strong> <strong className="verde">n3</strong> <br/><br/>

<strong className="verde">n3</strong> = pi<br/><br/>
<strong className="verde">n1</strong> = n3 + pi<br/><br/>
<strong className="verde">n2</strong> = n1 / n2<br/><br/>
<strong className="verde">n3</strong> = n1 + n2<br/><br/>
<strong className="verde">n1</strong> = pi<br/><br/>
<strong className="verde">n1</strong>=n1 - pi<br/><br/>

Fin
<h4>
¿Cuál es el valor de n1, n2 y n3?</h4><br/><br/>
<strong>
Resultado <strong className="verde">n1</strong> =<br/><br/>
resultado <strong className="verde">n2</strong> = <br/><br/>
resultado <strong className="verde">n3</strong> =<br/><br/></strong>
<h4>
Respuesta:</h4><br/><br/>
<strong className="verde">n3</strong> = 3.1416<br/><br/>
<strong className="verde">n1</strong> = 6.2832<br/><br/>
<strong className="verde">n2</strong> =2.51328<br/><br/>
<strong className="verde">n3</strong> =8.7048<br/><br/>
<strong className="verde">n1</strong> =3.1416<br/><br/>
<strong className="verde">n1</strong> = 0.0<br/><br/>
<h4>
Por lo que </h4><br/><br/>
<strong className="verde">n1</strong> = 0.0<br/><br/>
<strong className="verde">n2</strong> = 2.51328<br/><br/>
<strong className="verde">n3</strong> = 8.79648<br/><br/>
</p>
<div className="centrar-imagen">
  <img src="https://slideplayer.es/slide/12351591/73/images/13/Escuela+Superior+de+Inform%C3%A1tica.+UCLM.jpg" />
</div><br/><br/>
<div className="centrar-imagen">
<iframe width="560" height="315" src="https://www.youtube.com/embed/bUcuRRsKmGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica15