import React from 'react'
import Logocss from '../Logos/logocss'
import './iconos.css'
import LogoHtml from '../Logos/logohtml'
import LogoJavascript from '../Logos/logojavascript'
import LogoSass from '../Logos/logosass'

import Logologica from '../Logos/logologica'
import LogoGithub from '../Logos/logogithub2'
import Logoreact from '../Logos/logoreact'
import Logonodejs from '../Logos/logonode'
import Logoexpress from '../Logos/logoexpress'
import Logomongodb from '../Logos/logomongodb'
import Logoweb3 from '../Logos/logoweb3'
import Logosolidity from '../Logos/logosolidity'
import LogoBootstrap from '../Logos/logobootstrap'
import Netflix from '../img/netflix.png'
import Festival from '../img/festival.png'
import Cafe from '../img/cafe.png'


const Iconos = () => {
  return (
    <div className="centrar" >
        <div className="fondo"> </div>
        <h3 className="tituloIconos centrar">Tecnologías en el curso</h3>
        <br/>
        
         <div className="estructuraIconos centrar">
            <LogoHtml />
            <Logocss />
            <LogoBootstrap/>
            <LogoSass/>
            <LogoGithub/>
            <Logologica/>
            <LogoJavascript />
            <Logoreact/>
         </div>

         <div className="fondo"></div> 
         
        <h3 className="tituloIconos centrar">Proximamente Backend</h3>
         
        <div className="estructuraIconos1 centrar ">
            <Logonodejs />
            <Logoexpress />
            <Logomongodb/>
            </div>
         

         <div className="fondo "></div>
         <h3 className="tituloIconos centrar">Proximamente Web 3.0</h3>
         
         <div className="estructuraIconos2 centrar">
            <Logoweb3/>
            <Logosolidity/>
             
         </div>
         <div className="fondo">
         
         </div>

         <h3 className="tituloIconos centrar">Mis Proyectos</h3>
         <div className="estructuraIconos1 centrar">
<div>
            <img className="Netflix" src={Netflix} />
            <div className="centrar">
<button className="button-index">
  <a href="https://lustrous-dieffenbachia-37d8c3.netlify.app/" target="_blank"  rel="noopener noreferrer">Link Proyecto: <strong>Netflix</strong> </a>
</button>
</div>
<br/>
<div className="centrar">
<button className="button-index">
  <a href="https://github.com/EzequielJumilla35/EzequielJumilla35.netflix.github.io" target="_blank"  rel="noopener noreferrer">Código Github: <strong>Netflix</strong> </a>
</button>
</div>
</div>
<div>
            <img className="Festival" src={Festival} />
            <div className="centrar">
<button className="button-index">
  <a href="https://rainbow-cajeta-8a7167.netlify.app/" target="_blank"  rel="noopener noreferrer">Link Proyecto: <strong>Festival</strong> </a>
</button>
</div>
<br/>
<div className="centrar">
<button className="button-index">
  <a href="https://github.com/EzequielJumilla35/Festival" target="_blank"  rel="noopener noreferrer">Código Github: <strong>Festival</strong> </a>
</button>
</div>
</div>

<div>
            <img  className="Cafe" src={Cafe} />
            <div className="centrar">
<button className="button-index">
  <a href="https://startling-duckanoo-5d3e23.netlify.app/" target="_blank"  rel="noopener noreferrer">Link Proyecto:<strong>Café</strong> </a>
</button>

</div>
<br/>
<div className="centrar">
<button className="button-index">
  <a href="https://github.com/EzequielJumilla35/blogCafe" target="_blank"  rel="noopener noreferrer">Código Github:<strong>Café</strong> </a>
</button>
</div>
</div>


            </div>
            <div className="fondo"> </div>
<div>
            <h3 className="tituloIconos centrar">Crea tu propio Portafolio</h3>

            <div className="centrar">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5Lyr84XjN-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
</div>
            <div className="fondo"> </div>
       
    </div>
  )
}

export default Iconos