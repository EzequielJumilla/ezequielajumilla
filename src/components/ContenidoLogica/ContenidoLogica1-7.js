import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica17 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-8"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>

   <h3> 1.7- Jerarquía de operaciones (La matemáticas en la programación)</h3>
<div className="centrar">
  <img src="https://www.allexcell.com.ar/images/tabla%20de%20precedencias.png"/>
</div>
<p>
<h4>¿Necesito saber mátematicas para poder programar?</h4><br/><br/>
Si, necesitamos saber mátematicas, pero normalmente de manera básica, sirve más que nada para tener lógica a la hora de programar.<br/><br/>
<h4>
¿Son difíciles las matématicas?</h4>
<p>
Hay personas que les cuesta menos, pero eso no es motivo para desanimarse al practicar constantemente y tener buena disciplina, las mejoras no tardaran en llegar.</p>
<h4>
¿Para qué utilizo las matématicas en la programación?</h4>
Realizar una cuenta para saber cuanto dinero debe darle un programa a un cliente.
Programa para banco, cuantas transferencia se estan realizando, cuantos clientes, cuanto dinero.<br/><br/>
<strong>Redes Sociales, algoritmos, estadisticas a videos que nos gustan.</strong><br/><br/>
<strong>Sistemas Operativos:</strong> Mac, Windows, Linux.<br/><br/>
<strong>Buscadores:</strong> Mozilla, Google Chrome. Al realizar nuestra busqueda con palabras claves.<br/><br/>
<strong>Juegos:</strong> Al perder una vida se te resta.<br/><br/>
<strong>Celulares</strong><br/><br/>
<strong>Cajeros del Banco</strong><br/><br/>
<strong>Autos:</strong> control de gasolina, aceite, kilometraje,etc.<br/><br/>
<strong>Robots<br/><br/>
Google Maps:</strong> Coordenadas y direcciones.<br/><br/>

Las computadores trabajan con matématicas y estas matématicas trabajan con <strong>*Operadores*</strong>.

<strong>Operadores:</strong> Signos que relacionan variables, constantes o expresiones.



<h4>Operacion      Operador</h4> 
   Suma           +  <br/><br/>
   Resta          - <br/><br/>
Multiplicación    *<br/><br/>
División          /<br/><br/>
Potencia          ^<br/><br/>
Modúlo            %<br/><br/>

<strong>
*Reglas al progranar expresiones matématicas*</strong><br/><br/>
* Una expresión se escribe en una sola línea, ejemplo: R = a + b<br/><br/>
<strong>
* La computadora resuelve las operaciones en orden jerárquico. El orden es el siguiente:</strong><br/><br/>
1.=Potencia<br/><br/>
2.=Multiplicación y División<br/><br/>
3.=Suma y Resta<br/><br/>
 
R = a + b * c + d<br/><br/>

* En caso de querer realizar otro orden se utilizan paréntesis<br/><br/>
(a + b) * c + d<br/><br/>

* En caso de haber más paréntesis se reselve el más interno<br/><br/>
R = (((a+b)*2)+3) * 2<br/><br/>

<h4>*Ejercicios*</h4><br/><br/>
EJERCICIOS DE EXPRESIONES ALGEBRAICAS<br/><br/>
Ejercicio nº 1.-<br/><br/>
Expresa en lenguaje algebraico cada uno de los siguientes enunciados:<br/><br/>
a) El 30% de un número.<br/><br/>
b) El área de un rectángulo de base 3 cm y altura desconocida.<br/><br/>
c) El perímetro de un rectángulo de base 3 cm y altura desconocida.<br/><br/>




<h4>*Respuestas a los ejercicios*</h4><br/><br/>
SOLUCIONES EJERCICIOS DE EXPRESIONES ALGEBRAICAS<br/><br/>
<h4>Ejercicio nº 1</h4><br/><br/>


Expresa en lenguaje algebraico cada uno de los siguientes enunciados:<br/><br/>
a) El 30% de un número.<br/><br/>
b) El área de un rectángulo de base 3 cm y altura desconocida.<br/><br/>
c) El perímetro de un rectángulo de base 3 cm y altura desconocida.<br/><br/>


<h4>Solución:</h4><br/><br/>
a) 0,3x<br/><br/>
b) 3x<br/><br/>
c) 6 + 2x<br/><br/>
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/au3VqQsKfyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-8"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica17