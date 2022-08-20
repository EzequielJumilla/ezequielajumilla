import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio14 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>1.4- Historia de la programación</h4>
    <p>
    Los comienzos del desarrollo de la programación informática coinciden con la aparición de las primeras computadoras en la segunda mitad del siglo XX. La historia de la programación se puede describir a través del desarrollo de los diferentes lenguajes de programación:<br/><br/>

<strong>Lenguaje máquina:</strong> En este primer período se utilizaban lenguajes máquina muy básicos y limitados basados en el sistema binario (uso de los números 0 y 1 en distintas combinaciones) que es el lenguaje que los ordenadores reconocen, por lo que aún hoy todo lenguaje es convertido a este. Fue reemplazado, ya que resultaba una forma de programación tediosa y difícil.<br/><br/>
<div className="centrar-imagen">
  <img src="https://miro.medium.com/max/1024/1*tZrJRzL9OgzygcZgjHrR1g.jpeg" />
</div>
    
<strong>Lenguaje ensamblador:</strong> Más tarde comenzaron a surgir lenguajes que hacían uso de códigos de palabras. Se utilizaban palabras simples, mnemotécnicas y abreviaturas que tenían su correlativo y eran traducidas al código máquina. El lenguaje ensamblador fue incorporado porque resultaba más fácil de recordar y realizar por el usuario que el código máquina.<br/><br/>
<div className="centrar-imagen">
  <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/8581729/image/5994d506c99faa2be5115c45e61cd182" />
</div>


<strong>Lenguaje de alto nivel:</strong> A finales de la década del 50 surgió el Fortran, un lenguaje de programación desarrollado por IBM que dio inicio a la aparición de lenguajes basados en conjuntos de algoritmos mucho más complejos. Estos lenguajes se adaptaban a distintos ordenadores y eran traducidos por medio de un software al lenguaje de máquina.
<div className="centrar-imagen">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Y4qqIvUe--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/ui5xn1qpp4sgee1mryey.jpeg" />
</div>


    </p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-3"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-5"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio14