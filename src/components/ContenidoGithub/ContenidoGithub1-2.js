import React from 'react'
import './ContenidoGithub.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoGithub12 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoGithub1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoGithub1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>1.2-  ¿Qué es Git?</h3>
    <p>
    Hoy en día, Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo. Git es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds, el famoso creador del kernel del sistema operativo Linux, en 2005. Un asombroso número de proyectos de software dependen de Git para el control de versiones, incluidos proyectos comerciales y de código abierto. Los desarrolladores que han trabajado con Git cuentan con una buena representación en la base de talentos disponibles para el desarrollo de software, y este sistema funciona a la perfección en una amplia variedad de sistemas operativos e IDE (entornos de desarrollo integrados).
    </p>
    <div className="centrar">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VdGzPZ31ts8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoGithub1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoGithub1-3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoGithub12