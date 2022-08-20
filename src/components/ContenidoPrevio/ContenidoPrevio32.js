import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
import Logohtml from '../Logos/logohtml'
import Logojs from '../Logos/logojavascript'
import Logocss from '../Logos/logocss'
const ContenidoPrevio32 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>3.2- Los 3 Principales lenguajes Frontend en desarrollo web</h4>
<p>

<Logohtml/><br/>
<strong>HTML</strong>  sirve para determinar la estructura de la página y del contenido mediante etiquetas. Es imprescindible dominar el HTML para generar una página que se posicione correctamente en buscadores, aunque también sirve para hacerla más comprensible de cara a los usuarios. 
<br/><br/>
<Logocss/> <br/>
Por otro lado, <strong>CSS</strong>  es un lenguaje que tiene como objetivo definir el estilo de la página de manera sencilla. Todas las tareas que se llevan a cabo mediante el lenguaje CSS pueden llevarse a cabo editando el código HTML de una página, aunque hacerlo requerirá mucho más tiempo. El uso del CSS permite definir el estilo de una web en lote, aplicando un estilo determinado a todas sus páginas de manera simultánea y, a su vez, permitiendo alterar elementos en masa. Algunos ejemplos de estos elementos son las fuentes, el color de la letra, tamaño, imágenes de fondo… <br/><br/>

<Logojs/> <br/>
Por último, <strong>JavaScript</strong>  tiene como objetivo permitir crear una página web interactiva. HTML y CSS son lenguajes estáticos que no permiten añadir elementos que interactúen con otros más allá del uso de enlaces. Usar JavaScript en el diseño de una web permite añadir botones interactivos, formularios y animaciones… Pese a esto, también permite funcionalidades esenciales como la implementación de cookies, aunque actualmente existen otros lenguajes que también permiten crearlas. 
</p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio3-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio3-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio32