import React from 'react'
import './ContenidoSass.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoSass12 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoSass1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoSass2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.2- Desventajas de Sass</h3>
<div className="centrar">
<img src="https://adictotecnologico.com/wp-content/uploads/2020/04/que-es-sass-.jpg" /></div>
<p>
<strong>1-</strong>Como todo, Sass tiene algunas desventajas, que son extensibles a cualquier otro preprocesador que se utilice:<br/><br/>

<strong>2-</strong>Hay que aprender a utilizar una nueva herramienta, lo que para algunos supone una desventaja.<br/><br/>
<strong>3-</strong>Hay un tiempo de consumo en el proceso de generación o compilación del CSS, sobre todo si es el archivo SCSS es muy grande. No es mucho tiempo, pero sí que existe esa pequeña demora.<br/><br/>
<strong>4-</strong>Tiene una sintaxis más compleja que CSS.<br/><br/>
</p>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoSass1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoSass2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoSass12