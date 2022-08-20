import React from 'react'
import './ContenidoBootstrap.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoBootstrap12 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
<h3>1.2- ¿Por qué deberías usar Bootstrap?</h3>
<p>Algunos de los componentes de la interfaz de Bootstrap incluyen barras de navegación, sistemas de cuadrícula, carruseles de imágenes y botones.<br/><br/>


Si todavía no te convence si vale la pena probar Bootstrap, aquí tienes las ventajas de usarlo en comparación con otros frameworks de desarrollo web.</p><div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_1QYo_K6-5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h4>Facilidad de uso</h4>
<p>En primer lugar, Bootstrap es fácil de aprender. Debido a su popularidad, hay un montón de tutoriales y foros en línea para ayudarte a empezar.<br/><br/>

Una de las razones por las que Bootstrap es tan popular entre los desarrolladores y diseñadores web es que tiene una estructura de archivos sencilla. Sus archivos están compilados para facilitar el acceso y sólo se requieren conocimientos básicos de HTML, CSS y JS para modificarlos.<br/><br/>

También puedes utilizar los temas de los sistemas de gestión de contenidos más populares como herramientas de aprendizaje. Por ejemplo, la mayoría de los temas de WordPress se han desarrollado con Bootstrap, a los que puede acceder cualquier desarrollador web principiante.<br/><br/>

Para reducir el tiempo de carga de la página del sitio, Bootstrap minifica los archivos CSS y JavaScript. Además, Bootstrap mantiene la coherencia de la sintaxis entre los sitios web y los desarrolladores, lo que es ideal para los proyectos en equipo.</p>
<h4>Rejilla responsive</h4>
<p>Bootstrap viene con un sistema de rejilla predefinido, lo que te ahorra crear uno desde cero. El sistema de rejilla consta de filas y columnas, lo que permite crear una cuadrícula dentro de la existente en lugar de introducir media queries en el archivo CSS.<br/><br/>

Además, el sistema de rejilla de Bootstrap hace que el proceso de ingreso de datos sea más sencillo. Contiene muchas media queries, lo que te permite definir los breakpoints personalizados de cada columna en función de las necesidades de tu proyecto web.<br/><br/>

La configuración por defecto suele ser más que suficiente. Después de crear una rejilla, sólo tienes que añadir contenido a los contenedores.<br/><br/>

El sistema de rejilla de Bootstrap tiene dos clases de contenedores para adaptarse mejor a los proyectos de escritorio y móviles: <strong>un contenedor fijo (.container) y un contenedor fluido (.container-fluid).</strong><br/><br/>

La primera clase de contenedor proporciona un contenedor de ancho fijo, mientras que la segunda ofrece un contenedor de ancho completo capaz de ajustar tu proyecto a todos los tamaños de pantalla.</p>
<h4>Compatibilidad con los navegadores</h4>
<p>
Hacer que tu sitio web sea accesible a través de diferentes navegadores ayuda a reducir la tasa de rebote y a posicionarse mejor en los resultados de búsqueda. Bootstrap cumple este requisito al ser compatible con las últimas versiones de los navegadores más populares.<br/><br/>

A pesar de no ser compatible con navegadores menos conocidos como WebKit, los sitios web con Bootstrap deberían funcionar correctamente también en ellos. Sin embargo, puede haber limitaciones en cuanto a los modales y los desplegables en las pantallas más pequeñas.<br/><br/>
</p>
<h4>Sistema de imágenes de Bootstrap</h4>
<p>Bootstrap gestiona la visualización de imágenes y la capacidad de respuesta con sus reglas HTML y CSS predefinidas.<br/><br/>

Al añadir la clase .img-responsive, las imágenes se redimensionarán automáticamente en función del tamaño de la pantalla de los usuarios. Esto beneficiará el rendimiento de tu sitio web, ya que la reducción del tamaño de las imágenes forma parte del proceso de optimización del sitio.<br/><br/>

Bootstrap también proporciona clases adicionales como .img-circle y .img-rounded, que ayudan a modificar la forma de las imágenes.</p>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoBootstrap1-1"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoBootstrap2"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoBootstrap12