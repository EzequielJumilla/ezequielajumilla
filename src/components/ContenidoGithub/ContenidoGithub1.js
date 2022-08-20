import React from 'react'
import './ContenidoGithub.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoGithub1 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/TemarioGithub"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoGithub1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1- Introducción a Github</h3>
<p>
Github es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, y que fue comprada por Microsoft en junio del 2018.<br/><br/> La plataforma está creada para que <strong> los desarrolladores suban el código de sus aplicaciones y herramientas,</strong> y que como usuario no sólo puedas descargarte la aplicación, sino también entrar a su perfil para leer sobre ella o colaborar con su desarrollo.
</p>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yah1k9qWkCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/TemarioGithub"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoGithub1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoGithub1