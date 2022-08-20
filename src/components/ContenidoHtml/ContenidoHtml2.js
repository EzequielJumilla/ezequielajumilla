import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'



const ContenidoHtml2 = () => {
  return (
    <div>
    <Header/>
        
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml2-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>2- HTML semantico</h3>
<p>Estas son las ventajas más importantes que nos brinda la escritura de un marcado semántico<br/><br/>

<h3>Código más claro y fácil de mantener</h3>
Puede que te hayas preguntado para qué usar ciertas etiquetas, cómo una etiqueta nav para contener tu barra de navegación, si esto sería igual a no usarla, o a usar una etiqueta div. O puede que lo hagas solo porque es recomendado.<br/><br/>

Es cierto que muchas de estas etiquetas no representaran ningún cambio en la distribución del contenido o en la forma en la que se visualiza el texto, pero esta práctica permite que nuestro código tenga mayor sentido, y se acerque más a un idioma natural, donde cada elemento utilice las palabras adecuadas.<br/><br/>

Tal vez en un proyecto pequeño esto no podría representar una diferencia sustancial, pero cuando un proyecto comienza a escalar, añadiendo más páginas y más líneas de código, la presencia de etiquetas semánticas que nos ayuden a ubicarnos y sirvan de referencia natural será una enorme ventaja.<br/><br/>

<h3>Ayuda a tu sitio a ser accesible</h3>
La accesibilidad es una parte del desarrollo web que está adquiriendo notoriedad y relevancia en los últimos años, por el creciente uso del internet, y lo indispensable que se ha hecho para todas las personas, incluyendo a personas con diversidad funcional.<br/>

Existe una considerable cantidad de usuarios que dependen de un software lector de pantalla para navegar por el internet, así como otros usuarios que solo navegan en internet mediante el uso del teclado, por lo que asegurarnos de que los lectores de pantalla puedan leer cada elemento, y que cada uno de estos pueda ser accesible mediante el teclado es fundamental.<br/><br/>

El HTML semántico no solo se trata de utilizar las nuevas etiquetas semánticas, sino de utilizar las etiquetas correctas para cada elemento o sección de tu sitio web, para que sea fácil de navegar para todos los usuarios.<br/><br/>

Esto quiere decir que si por ejemplo utilizar una etiqueta a es importante que coloques una dirección en su atributo href, y si no, probablemente puedes utilizar otra etiqueta en su lugar, pues los lectores de pantalla reconocerán esto como un link.<br/><br/>

De igual forma, aunque no necesariamente relacionado con el marcado semántico, asegurarse de no ocultar elementos y hacerlos accesibles solo con cursor o dar un tamaño de fuente o colores poco legibles no es una buena práctica y dificulta la accesibilidad, por lo que es importante informarse y utilizar las mejores prácticas.<br/><br/>

<h3>Mejora tu posicionamiento SEO</h3>
Tu posicionamiento SEO puede verse afectado, positiva o negativamente de acuerdo a diversos factores, desde la forma en la que está redactado el contenido, el uso de palabras claves, un diseño responsivo o que el sitio sea accesible.

Google es el motor de búsqueda más usado en todo el mundo, y es más probable que los usuarios ingresen a un sitio web mediante un motor de búsqueda, y no introduciendo directamente la dirección URL, por lo que es importante comprender y satisfacer sus criterios para un buen posicionamiento SEO.

En el caso de Google, utilizan un algoritmo de aprendizaje automático, el cual analiza el código de nuestro sitio web, y utiliza el marcado y las etiquetas utilizadas para entender mejor el propósito del sitio.

Por ello, utilizar un marcado semántico facilitará a los algoritmos de posicionamiento analizar nuestro sitio y darle un mejor índice de posicionamiento. Así como ayudar a la accesibilidad de este, el cual también favorece nuestro SEO.

</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pJb0UliJ1EM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoHtml1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoHtml2-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoHtml2