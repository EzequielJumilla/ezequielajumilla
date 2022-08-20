import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio2 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
    <h4>2- ¿Qué es el desarrollo web?</h4>
    <div className="centrar-imagen">
  <img src="https://gscreativas.com/blog/wp-content/uploads/2021/02/desarrollo-web-herramientas.jpg" />
</div>
    <p>
    Desarrollo web significa construir y mantener sitios web; es el trabajo que tiene lugar en un segundo plano y que permite que una web tenga una apariencia impecable, un funcionamiento rápido y un buen desempeño para permitir la mejor experiencia de usuario. Los desarrolladores web son como duendes con poderes: nunca los ves, pero son los que hacen que todo esté bien y funcione de manera rápida y eficiente.<br/><br/>

Los conocimientos y habilidades vinculados al desarrollo web son los más demandados y también los mejor pagados. Se trata de una carrera con muchas posibilidades y salidas.  <br/><br/>

Pero, ¿cómo lograrlo?

Los desarrolladores web lo hacen a través de diversos lenguajes de programación. El lenguaje que usan en cada momento depende del tipo de tarea que están haciendo. El desarrollo web se divide, de forma general, en Frontend (la parte cliente) y Backend (la parte servidor).<br/><br/>

Frontend, Backend o Full-stack, ¿quién es quién?

Un desarrollador Frontend se encarga de la composición, diseño e interactividad usando HTML, CSS y JavaScript. El desarrollador Frontend toma una idea y la convierte en realidad. Lo que ves y lo que usas, como por ejemplo el aspecto visual del sitio web, los menús desplegables y el texto, son creados por el desarrollador Frontend, que escribe una serie de programas para dar estructura, forma e interactividad a estos elementos. Estos programas se ejecutan después a través de un navegador.<br/><br/>

El desarrollador Backend se encarga de lo que no se ve, es decir, dónde se almacenan los datos. Sin datos no hay Frontend. El Backend consiste en el servidor que acoge la web, una aplicación para ejecutarlo y una base de datos. El desarrollador Backend utiliza programas de computación para asegurar que el servidor, la aplicación y la base de datos tengan un desempeño regular conjunto. Además, analiza qué necesita la empresa y proporciona soluciones de programación eficientes. Para hacer este increíble trabajo, utiliza una serie de lenguajes del lado del servidor, como PHP, Ruby, Python y Java.<br/><br/>

Si te interesan tanto el Frontend como el Backend, deberías plantearte convertirte en desarrollador·a Full-stack. El desarrollador Full-stack está a cargo tanto del Frontend como del Backend, y necesita saber cómo funciona la web a todos los niveles para determinar cómo se van a coordinar la parte cliente y la parte servidor. Para alcanzar este nivel de experiencia hace falta más tiempo, claro, puesto que hay más que aprender.  <br/><br/>
    </p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-6"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio2