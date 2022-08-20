import React from 'react'
import Header from '../Header/Header'
import './IndexTemario.css'
import Footer from '../footer/footer'
import LogoGithub from '../Logos/logogithub2'

const TemarioGithub = () => {
  return (
    <div>
        <Header/>
        <div className="flexArrows ">
<a  href="/ContenidoSass2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoGithub1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
        <div className="linea"></div>  
        <div className="centrarAlllogo">
 <LogoGithub/>
 <div className="centrarAll5">
 <a href="/ContenidoGithub1"><h4>1- Introducción a Github</h4></a>
 <a href="/ContenidoGithub1"><h4>1- Introducción a Github</h4></a>
    <a href="/ContenidoGithub1-1"><h4>1.1- ¿Qué es el control de versiones?</h4></a>
    <a href="/ContenidoGithub1-2"><h4>1.2- ¿Qué es Git?</h4></a>
    <a href="/ContenidoGithub1-3"><h4>1.3- Subir repositorio</h4></a>
   
    <a href="/ContenidoGithub2"><h4>2- Video tutorial de Git y Github</h4></a>
 </div>
</div>
         <div className="linea"></div>  

         <div className="flexArrows ">
<a  href="/ContenidoSass2"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/ContenidoGithub1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>

        
        <Footer/>
    </div>
  )
}

export default TemarioGithub