import React from 'react'
import './ContenidoLogica.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoLogica1 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/TemarioLogica"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>1- Lógica de programación</h3>
         
         <p>
            En este capitulo se va a dar toda la información necesaria para <span>aprender, comprender y desarrollar nuestra lógica de programación </span>
            
        </p>
        

    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/TemarioLogica"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoLogica1-1"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoLogica1