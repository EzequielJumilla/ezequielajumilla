import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import PantallaPrincipal from '../PantallaPrincipal/PantallaPrincipal'
import Iconos from '../IconosContenido/iconos'
import PreguntasFrecuentes from '../preguntasFrecuentes/preguntasFrecuentes'
import Footer from '../footer/footer'

const Main = () => {
  return (
    <div>
        <Header/>
        <PantallaPrincipal/>
        <Iconos/>
        
       <PreguntasFrecuentes/>
        <Footer/>
       
        
    </div>
  )
}

export default Main