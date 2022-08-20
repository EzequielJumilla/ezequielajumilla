import React from 'react'
import './preguntasFrecuentes.css'
const PreguntasFrecuentes = () => {
  return (
    <div class="container centrar">
        <div class="row">
            <div class="container-faq">
                <div class="title-faq">
                    <h3>Preguntas Frecuentes</h3>
                </div>

                <div class="item-faq">
                    <div class="question">
                        <h3>¿Cómo utilizar la página?
                             <span>1</span></h3>
                        
                    </div>
                    
                        <p>Utilizar la página es muy sencillo, con tan solo hacer click en uno de los iconos, aparecerá la información de cada curso.<span></span></p>
                    
                </div>

                <div class="item-faq">
                    <div class="question">
                        <h3>¿Cómo comunicarse conmigo? <span>2</span></h3>
                        
                    </div>
                  
                        <p>Haciendo click en los íconos de linkedin. 
                            La otra opción es a mí gmail personal: <span className="spanEmail">ezequielagustinjumilla@gmail.com </span></p>
                   
                </div>

              


            </div>
        </div>
    </div>

  )
}

export default PreguntasFrecuentes