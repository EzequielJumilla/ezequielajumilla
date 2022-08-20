import React from 'react'
import './PantallaPrincipal.css'


const PantallaPrincipal = () => {
  return (
    <div className="PantallaPrincipal ">
    <div className="estructuraPrincipal">

    <div className="centrar">
        <img className="imgpp" src="https://miro.medium.com/max/1400/1*2HDSLgcS5HVDpkZXSN5SYg.jpeg"/>
       </div>

      

        <div className="AllWorks">
        <h4>Esta página fue creada con la idea de ser un blog personal con mi aprendizaje, en caso de servirle a alguien más, me haría muy feliz.</h4><br/>    
        <p>Cuando queremos aprender a programar, normalmente no sabemos por donde empezar o usualmente el contenido que buscamos es díficil de encontrar, no lo encontramos o tenemos que abrir muchas pestañas para encontrar las diversas soluciones a los problemas que enfrentamos. La idea de este proyecto es incluir todo el material con el cuál aprendí y de esta manera hacerle el proceso de aprendizaje a los actuales y futuros programadores.</p> 
        <p>En su principio el material va a ser orientado al <strong>Frontend:</strong> <strong>Html, Css, Sass, Bootstrap,Lógica de programación, Javascript Y ReactJS.</strong> </p>
        <p>
            En un futuro cercano, la idea es incluir las siguientes tecnologías del <strong>Backend: NodeJS, Express y MongoDB. </ strong> 
        </p>
        <p>
            Y cuando tenga el nivel de un <strong>fullstack: Web 3.0, Solidity. </ strong> 
        </p>
        <div className="centrar-imagen">
   <a href="/IndexTemario">   <button className="button-index">
    
    <strong>Iniciar Curso</strong>
      
       </button> </a>
       </div> 
         </div>
     
  
    </div>
     
    </div>
  )
}

export default PantallaPrincipal