import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica14 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoLogica1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>

<h4>1.4- Tipos de datos:</h4> 
      <p>
      El tipo dato es una característica del dato que le dice a la computadora que tipo de dato va a procesar. <br/><br/>
<strong>Dato:</strong>
 unidad mínima de información.<br/><br/>
<strong>Entero:</strong>
 Tipo de dato númerico. No posee decimales. Su rango es negativos a positivos. Cualquier operación de tipo entero nos da un resultado entero.<br/><br/>
<strong>Flotante:</strong>
 Tipo de dato númerico. Numeros con parte decimal. Su rango es negativos a positivos. Cualquier operación de tipo flotante mps da un resultado flotante.<br/><br/>
<strong>Caracter:</strong>
 Es cualquier símbolo o letra. Al concatenar nos da como resultado una cadena de caracteres.<br/><br/>
<strong>Lógico o Booleano:</strong>
 Verdadero o falso (False or True).<br/><br/>

En algunos lenguajes de programación se agregan otros tipos de datos, ejemplo en Javascript:<strong> Null, undefined, NaN.</strong> Si Quieres ver de que se tratan estos tipos de datos, podes verificarlo en la sección de Javascript: Tipo de datos.<br/><br/>

      </p>

      <div className="centrar">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bx4xsJ4I5VM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoLogica1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica14