import React from 'react'
import './ContenidoReact.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoReact2 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoReact1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <div className="centrar-imagen">
    <h3>2- Documentación oficial</h3>
    <div className="centrar-imagen">
  <img src="https://digital55.com/wp-content/uploads/2022/01/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png" />
</div>
<button className="button-index">
  <a href="https://es.reactjs.org/docs/getting-started.html" target="_blank"  rel="noopener noreferrer">Documentación: <strong>React</strong> </a>
</button>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoReact1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact3"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoReact2