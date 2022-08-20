import React from 'react'
import Header from '../Header/Header'
import './IndexReutilizable.css'
import Logohtml from '../Logos/logohtml'
import Logocss from '../Logos/logocss'
import Logojs from '../Logos/logojavascript'
import Footer from '../footer/footer'
const IndexReutilizable = () => {
  return (

    <div>
        <Header/>
        
<div className="flexArrows ">
<a  href="/"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/mainHTML"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>
<div className="linea"></div>
         <h3>Introducción del curso</h3>
         
         <p>
            En primer lugar, como contenido introductorio al <span> desarrollo web </span>, se van a aclarar algunos conceptos previos y básicos que son de rápido entendimiento.
            
        </p>
        
        <h4>1- ¿Qué es la programación?</h4>
      <p>
        La programación es el acto de programar, es decir, organizar una secuencia de pasos ordenados a seguir para hacer cierta cosa. Este término puede utilizarse en muchos contextos, es común hablar de programación a la hora de organizar una salida, las vacaciones o de la lista de programas con sus días y horarios de emisión de los canales de televisión o la lista de películas de un cine.

       Además, en el campo de la informática, la programación es la pieza clave en la relación entre los ordenadores y los usuarios. <strong>Por lo que seremos más específicos:</strong>
       </p>
       <div className="centrar">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/6svvtOjLA-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <h4>1.1- Programación en informática</h4>
       <p>En el ámbito de la informática, la programación refiere a la acción de crear programas o aplicaciones a través del desarrollo de un código fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa.
       La programación es lo que permite que un ordenador funcione y realice las tareas que el usuario solicita.
</p>
<div className="centrar-imagen">
  <img src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" />
</div>

       <h4>1.2- Lenguaje de programación</h4>
       
       <p>
       El lenguaje de programación es un idioma artificial prediseñado formado por signos, palabras y símbolos que permite la comunicación entre el programador y el ordenador.

Las instrucciones que sigue el ordenador para la ejecución de aplicaciones y programas están escritas en lenguaje de programación y luego son traducidas a un lenguaje de máquina que puede ser interpretado y ejecutado por el hardware del equipo (parte física).

El código fuente está formado por líneas de texto que expresan en lenguaje de programación las instrucciones que debe llevar a cabo el ordenador. Este código es creado, diseñado, codificado, mantenido y depurado a través de la programación.

Existen diferentes lenguajes de programación (Java, Pearl, Python) que se valen de diversos programas en los que se vuelcan las instrucciones. Estos lenguajes varían con el tiempo, se expanden y evolucionan.

       </p>

       <div className="centrar-imagen">
  <img src="https://codigoonclick.com/wp-content/uploads/2018/02/mejores-lenguajes-de-programacion-2018.jpg" />
</div>
              <h4>1.3- ¿Para qué sirve la programación?</h4> 
      <p>
      El principal objetivo de la programación es definir instrucciones para que un ordenador pueda ejecutar sistemas, programas y aplicaciones que sean eficaces, accesibles y amigables para el usuario.

      Los programas informáticos suelen seguir algoritmos, que son el conjunto de instrucciones organizadas y relacionadas entre sí que permiten trabajar al software de los equipos de computación.

      </p>
      <div className="centrar-imagen">
  <img src="https://blog.educacionit.com/wp-content/uploads/2018/09/shutterstock-10338536170938-620x354-01.jpg" />
</div>
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

    <h4>1.5- Tipos de programación</h4>
    <p>
       <strong>
         Programación estructurada:
       </strong> Busca mejorar y reducir el tiempo del proceso al utilizar subrutinas (subalgoritmos dentro del algoritmo principal que resuelve una tarea). <br/><br/>
       <div className="centrar-imagen">
  <img src="https://www.edix.com/es/wp-content/uploads/sites/2/2021/07/estructuras-programacion-estructurada-1024x352.jpg" />
</div>
   
<strong>Programación modular:</strong> Divide los programas en módulos para trabajar con ellos y resolver los problemas de manera más simple.<br/><br/>
<div className="centrar-imagen">
  <img src="https://www.oposinet.com/wp-content/uploads/2018/07/clip_image002-2.jpg" />
</div>

<strong>Programación orientada a objetos:</strong> Utiliza objetos (entes con características, estado y comportamiento) como elementos fundamentales para la búsqueda de soluciones.
<div className="centrar-imagen">
  <img src="https://www.caracteristicasdel.com/wp-content/uploads/2021/01/Caracteristicas-de-la-Programacion-Orientada-a-Objetos.....jpg" />
</div>
</p>

<h4>1.6- Elementos de la programación</h4>
<p>
Existen ciertos elementos que son clave a la hora de conocer o ejecutar un lenguaje de programación, entre los más representativos están:<br/><br/>
<strong>Palabras reservadas:</strong> Palabras que dentro del lenguaje significan la ejecución de una instrucción determinada, por lo que no pueden ser utilizadas con otro fin.<br/>
<strong>Operadores:</strong> Símbolos que indican la aplicación de operaciones lógicas o matemáticas.<br/>
<strong>Variables:</strong> Datos que pueden variar durante la ejecución del programa.<br/>
<strong>Constantes:</strong> Datos que no varían durante la ejecución del programa.<br/>
<strong>Identificadores:</strong> Nombre que se le da a las diferentes variables para identificarlas.


</p>

        <div className="linea"></div>
         <h4>2- ¿Qué es el desarrollo web?</h4>
         

         <p>
            Desarrollo web significa <strong>construir y mantener sitios web; es el trabajo que tiene lugar en un segundo plano y que permite que una web tenga una apariencia impecable, un funcionamiento rápido y un buen desempeño para permitir la mejor experiencia de usuario.</strong> <br/> Los desarrolladores web son como duendes con poderes: nunca los ves, pero son los que hacen que todo esté bien y funcione de manera rápida y eficiente.

            Los conocimientos y habilidades vinculados al desarrollo web son los más demandados y también los mejor pagados. Se trata de una carrera con muchas posibilidades y salidas.
        
        </p>
        
        <div className="centrar">
           <iframe  width="500" height="300" src="https://www.youtube.com/embed/8kpooi7o4xI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

           </iframe>
        
        </div>
        <p>Como se puede observar en el video, hay muchas tecnologías y en un principio puede ser demasiada información y nos puede llevar a no tener una ruta de aprendizaje óptima, por eso a continuación se van a aclarar las siguientes cuestiones que es Frontend, Backeand y sus diferencias, sus rutas de aprendizajes óptimas, y definiciones claras para luego comenzar con el curso.</p>
        <div className="linea"></div>

        <h4>3- Frontend vs Backend</h4>
        <p>Si tienes interés por el desarrollo web o la programación seguro que has oído hablar de los términos frontend y backend. Estos conceptos definen los <strong> dos aspectos diferenciados que pueden programarse en el mundo del diseño web.</strong> En este artículo te explicaremos en profundidad cada uno de estos términos y sus diferencias en términos de programación. </p>   
        <div className="centrar-imagen">
  <img src="https://www.datocms-assets.com/14946/1590690600-front-end-back-end-1080x608.png?auto=format" />
</div>
        <h4>3.1- ¿Qué es Frontend? </h4>
        <div className="centrar">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N8mFHB7JDkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <p>
        Como su nombre indica, el Frontend hace referencia a <strong>la parte visible o interfaz de una página web o de un programa o aplicación móvil;</strong> aquella que verán y interactúan los usuarios que accedan. Más específicamente, hace referencia a los <strong>colores, letras, animaciones y demás elementos que pueden visualizar los usuarios.</strong> 
   

El objetivo de un desarrollador Frontend es conseguir que la página sea intuitiva, funcional y estética para los usuarios. Es, en definitiva, la parte del desarrollo de la que depende la calidad que el usuario percibe dentro de una página, programa o aplicación. 

El desarrollo Frontend se trabaja a través de tres lenguajes diferenciados: <strong>HTML, CSS y JavaScript.</strong> 
        </p>

<h4>3.2- Los 3 Principales lenguajes Frontend en desarrollo web</h4>
<p>

<Logohtml/><br/>
<strong>HTML</strong>  sirve para determinar la estructura de la página y del contenido mediante etiquetas. Es imprescindible dominar el HTML para generar una página que se posicione correctamente en buscadores, aunque también sirve para hacerla más comprensible de cara a los usuarios. 
<br/><br/>
<Logocss/> <br/>
Por otro lado, <strong>CSS</strong>  es un lenguaje que tiene como objetivo definir el estilo de la página de manera sencilla. Todas las tareas que se llevan a cabo mediante el lenguaje CSS pueden llevarse a cabo editando el código HTML de una página, aunque hacerlo requerirá mucho más tiempo. El uso del CSS permite definir el estilo de una web en lote, aplicando un estilo determinado a todas sus páginas de manera simultánea y, a su vez, permitiendo alterar elementos en masa. Algunos ejemplos de estos elementos son las fuentes, el color de la letra, tamaño, imágenes de fondo… <br/><br/>

<Logojs/> <br/>
Por último, <strong>JavaScript</strong>  tiene como objetivo permitir crear una página web interactiva. HTML y CSS son lenguajes estáticos que no permiten añadir elementos que interactúen con otros más allá del uso de enlaces. Usar JavaScript en el diseño de una web permite añadir botones interactivos, formularios y animaciones… Pese a esto, también permite funcionalidades esenciales como la implementación de cookies, aunque actualmente existen otros lenguajes que también permiten crearlas. 
</p>

<h4>3.3- ¿Qué es Backend?</h4>
  
  <div className="centrar">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZTsi1e-VJIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>
El Backend hace referencia a <strong>todos aquellos elementos de la página web, aplicación o programa, que son inaccesibles de cara a los usuarios.</strong>  Gestionar el Backend significa <strong>crear la lógica, conectarla con el servidor y gestionar los datos o bases de datos</strong> . También se encarga, en parte, de la experiencia del usuario a base de supervisar el rendimiento del frontend,<strong>vigilando que la página no caiga, optimizando para que disponga de un mayor rendimiento.</strong>

Un desarrollador Backend debe dominar lenguajes diferentes a un programador Frontend. El único que tienen en común es JavaScript, un lenguaje orientado a objetos, muy ligero de escribir y que permite manejar los datos de una página. Aun así, existen varios lenguajes que cualquier Backend developer deberá dominar.
</p>
<h4>3.4- Los 3 Principales lenguajes Backend</h4>
<p>
<div className="centrar-imagen">
  <img className="logophp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" />
</div>
<br/>
El lenguaje principal del desarrollo Backend es<strong>PHP</strong>, un lenguaje creado específicamente para el diseño web. Es un lenguaje muy sencillo de aprender, y sus usos principales se basan en gestionar la información de formularios, crear aplicaciones web, gestionar cookies y encriptar datos, por lo que es ideal para la gestión de una página desde el lado del servidor. <br/><br/>

<div className="centrar-imagen">
  <img className="logophp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png" />
</div>
<br/>
Otro de los lenguajes destacables para el desarrollo Backend es el versátil <strong>Python.</strong>  Es uno de los lenguajes más sencillos de aprender, por lo que es ideal para aquellas personas que se inicien en el mundo de la programación. La ventaja que presenta Python para el desarrollo Backend es que cuenta con una gran cantidad de librerías diseñadas para solucionar determinados problemas, lo que facilita enormemente el trabajo de los programadores. Además es un lenguaje que permite la integración con otros lenguajes, algo imprescindible en Backend. <br/><br/>

<div className="centrar-imagen">
  <img className="logophp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" />
</div><br/>
El último lenguaje destacable para Backend es <strong>Ruby.</strong>  Como Python, también es un lenguaje multiusos y busca incrementar la productividad de los desarrolladores facilitando la tarea de escribir código. Además de esto, Ruby cuenta con una gran cantidad de librerías conocidas como Gemas que facilitan la solución de numerosos problemas que puedan surgir. Además, también es muy fácil de integrar con otros lenguajes. El principal problema de Ruby es que tiene una elevada complejidad al ser muy distinto de los demás lenguajes de programación y, además, tiende a ser más lento. Es por esto que no es un lenguaje adecuado para principiantes. 
</p>

<h4>3.5- Diferencias entre Frontend y Backend</h4>
<p>Básicamente, cuando hablamos de "detrás de escena", es decir, el servidor y la base de datos que ayudan a entregar información del usuario desde una interfaz, hablamos del back-end. Es la parte del sitio con la que los usuarios no tienen contacto.

El <strong>back-end</strong>  es una parte fundamental de cualquier sitio web o aplicación web. Si está leyendo este texto, por ejemplo, es una señal de que la comunicación con el servidor fue exitosa y esto probablemente se deba al buen trabajo del programador Web Full Stack.

Cualquiera que prefiera especializarse como desarrollador de back-end actuará con lógica, funcionalidad del sitio, reglas, seguridad e integridad de la base de datos. Es decir, vivir detrás de escena de Internet requiere mucha paciencia, cuidado y concentración constante.

 <strong>Si el back-end es el desarrollo del elemento web que no vemos, el front-end es toda la parte visible de las aplicaciones y sitios web.</strong> Esta área no trata directamente con bases de datos, servidores y todas las aplicaciones de back-end complejas, pero aborda la usabilidad, los efectos visuales y la velocidad de carga, entre otros detalles.

Más directamente, <strong> el Desarrollador Front End </strong>es responsable de la interacción directa del usuario, por lo que se desarrolla cuidando el lado más visual de las aplicaciones, como el cuidado de los colores, botones, enlaces, menús y todo lo que vemos. en una página cuando estamos accediendo.

Precisamente por esto, un profesional de front-end necesita tener un ojo constante para la mejor experiencia de usuario . Es decir, las preocupaciones de front-end y back-end son opuestas pero complementarias. Los desarrolladores front-end y back-end siempre deben trabajar juntos para que la aplicación o el sitio funcionen correctamente.

Los programadores pueden trabajar tanto en el back-end como en el front-end, por eso a estos profesionales se los llama Desarrolladores Web Full Stack. En definitiva, se trata de personas con una visión más completa del negocio que trabaja de principio a fin de un proyecto. Para eso, tiene conocimientos de diferentes tecnologías de programación y lenguajes , especialmente si actúa solo.</p>
<div className="linea"></div>

<h4>4- Editores de código</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cDuvyi5vRv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>Hay muchas opciones y puede resultar confuso cuál elegir. Pero no se preocupe, en este artículo vamos a explorar algunos de los mejores editores para el desarrollo productivo.

Aunque puede editar sus proyectos web en estos editores de texto, si desea ser un desarrollador web eficiente y aumentar su rendimiento y eficiencia, entonces las herramientas preinstaladas como el Bloc de notas y Gedit tendrán deficiencias.<br/>
<strong>Es recomendable que elijas un solo editor de código. A continuación 12 recomendaciones.<br/> Mi recomedación personal es Visual Studio Code</strong>
</p>
<h4>4.1- Froala</h4>
<p>
<strong>Froala es el editor HTML WYSIWYG de próxima generación,</strong>  que es fácil de integrar para los desarrolladores, y su diseño limpio te hace sentir excelente. Ofrece un editor de texto JS de alto rendimiento que es fácil de usar para los desarrolladores.

Froala tiene más de 170 bloques de diseño basados ​​en Bootstrap para ayudarlo a crear hermosos sitios web modernos. Puede usarlo de forma gratuita en sus proyectos móviles y web. Además, la poderosa API está diseñada para hacer que el editor de texto sea fácil de interactuar y personalizar. redactor de Froala está disponible en todos los marcos y admite tecnologías de back-end que facilitan aún más el trabajo de los desarrolladores.

</p>
<div className="centrar-imagen">
<img src="https://geekflare.com/wp-content/uploads/2021/08/froala.jpg" />
</div>

<p><strong>Froala se utiliza en 100 países y en varios idiomas, incluidos los idiomas asiáticos y orientales.</strong> El editor de JavaScript es compatible con WCAG 2.0, WAI-ARIA y la Sección 508. Obtendrá código de alta calidad, lo que significa LTFCE, o puede decir Legible, Testable, Flexible, Compliant y Económico.

Obtenga cada funcionalidad a su alcance mediante el uso de atajos que puede activar especificando algunos comandos de teclado. Funciona igual en Internet Explorer, Safari y otros navegadores. Tiene un diseño moderno, vista lista para retina, temas, interfaz intuitiva, íconos SVG, Opoups, barra de herramientas personalizada, estilo personalizado, Iframe, modo de pantalla completa y mucho más.

El editor de Froala es una aplicación rápida, liviana y basada en complementos. Aprovecha los estándares HTML 5.<strong> Obtenga todas las funciones de CKEditor y TinyMCE con una elegante UX por $ 199 / año.</strong>
</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://froala.com/wysiwyg-editor/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>FROALA</strong> </a>
</button>
</div>

<h4>4.2- UltraEdit</h4>
<p>
<strong>UltraEdit es un editor de texto potente, altamente seguro y flexible disponible para Mac, Linux y Windows.</strong> Sus funciones de edición de texto hacen que la edición de columnas y listas sea una experiencia emocionante. Obtenga funciones como edición de columnas / bloques, edición de múltiples signos de intercalación y más, comportándose en ambos sentidos cuando necesite que funcione como un cursor múltiple o una potencia sencilla.

Con un clic de un botón, puede cambiar entre el sistema de menú / barra de herramientas, cinta compacta y cinta completa. UltraEdit no es comparable a los hallazgos en línea y los reemplazos masivos en todo el proyecto. También obtendrá expresiones regulares de Perl, filtros de línea, búsqueda basada en columnas, reemplazo / búsqueda a través de vibraciones y más con UltraEdit.
</p>

<div className="centrar-imagen">
<img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/c50022a6-96d9-11e6-ab78-00163ed833e7/2092230534/ultraedit-screenshot.png" />
</div>
<p>
Siempre está listo para cualquier sesión de codificación con sus scripts, plantillas de macros, plantillas inteligentes, herramientas personalizadas, cliente telnet / SSH integrado y más. Un programador o desarrollador puede beneficiarse de una potencia insuperable, carga de archivos, rendimiento, temas configurables, integración del sistema operativo y mucho más. De manera similar, una empresa o corporación obtendrá herramientas confiables, probadas, confiables y estables.

Configure su código tanto como pueda al ver a los miembros de la clase, lenguajes de programación modernosy sugerencias de funciones. No necesita ninguna configuración esotérica de terceros o complementos; simplemente use UltraEdit como de costumbre, como usa otras herramientas para realizar operaciones como cortar, copiar, pegar, eliminar y seleccionar.

Puede abrir fácilmente archivos grandes, digamos 4 GB o más, y editarlos. Obtenga beneficios como el cierre automático de etiquetas HTML / XML, listado de funciones jerárquicas, sondeo de archivos de registro, codificación / decodificación base64, corrector ortográfico, clasificación de datos, resaltado de sintaxis de código y más.
<br/>
<strong>Obtenga UltraEdit a $ 79.95 / año, incluido UltraCompare, y aproveche la prueba gratuita.</strong> 
</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://www.ultraedit.com/downloads/ultraedit-download-thank-you/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>UltraEdit</strong> </a>
</button>
</div>


<h4>4.3- Visual Studio Code</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/eurOEmEnwyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
</div>

  <p>
  Código de Visual Studio, también conocido como VS Code, es un editor de código de fuente abierta de Microsoft. Es un editor de texto multiplataforma que puede ejecutarse en cualquier dispositivo, ya sea en Linux, Windows o Mac.

Este editor de texto está enfocado a incrementar el desempeño del desarrollador. Funciones como la finalización automática y la depuración del sistema ayudan a mejorar las tareas diarias del desarrollador.

De todos los editores de código de la lista, probablemente sea el más cercano a ser un IDE. Aunque es convincente, requiere un tiempo considerable durante la puesta en marcha, que son las únicas desventajas de este editor de texto. Sin embargo, mientras lo usa, VS Code es rápido y capaz de manejar bastantes tareas emocionantes, como confirmaciones rápidas de Git o abrir y clasificar el contenido de varias carpetas.
</p>
<div className="centrar">
<img src="https://docs.microsoft.com/es-es/dotnet/core/tutorials/media/with-visual-studio-code/dotnet-run-command.png" />
</div>
<p>
VS Code tiene un terminal integrado y soporte Git integrado, lo que hace de este editor de texto uno de los mejores editores de texto del mercado. Se puede personalizar de acuerdo a sus necesidades. A través de las extensiones de VS Code, puede instalar muchas funciones y puede realizar todos los trabajos que se pueden realizar en un IDE.
</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://code.visualstudio.com/download" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Vs Code</strong> </a>
</button>
</div>
<h4>4.4- Brackets</h4>
<p>
Soportes es un editor de texto moderno, ligero y de código abierto, pero potente. Los soportes comprenden el diseño web que facilita el diseño en el navegador con herramientas visuales enfocadas y compatibilidad con preprocesadores. Está diseñado desde cero para diseñadores web y desarrolladores front-end.

Una de las mejores características de Bracket es que tiene un servidor de vista previa en vivo integrado que inicia una nueva pestaña de Chrome que muestra la página actual, y que no requiere una actualización manual cuando cambia un archivo y mientras escribe.

Otra característica es que JS lint está habilitado de forma predeterminada entre paréntesis que verificará su código Javascript al guardar, con sus resultados mostrados como un panel debajo de la ventana de edición principal.

Aunque hay un soporte de autocompletado en el soporte, no es perfecto.
</p>
<div className="centrar">
<img src="https://www.frogx3.com/wp-content/uploads/2014/05/brackets-2.gif" />
</div>

<div className="centrar-imagen">
<button className="button-index">
  <a href="https://brackets.io/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Brackets</strong> </a>
</button>
</div>
<h4>4.5- Sublime Text</h4>
<div className="centrar">
  <p>
  Texto sublime es una aplicación liviana que facilita a los desarrolladores trabajar en ella y, a pesar de ser liviana, es mucho más liviana en la cantidad de funciones que ofrece. Se construyó principalmente con una API de Python para los equipos de desarrollo que hoy están dedicando horas a codificar.

Tiene varios atajos de teclado, lo que lo hace más flexible para que el desarrollador use las diferentes funciones. Es compatible con la integración multiplataforma y se ha optimizado para una velocidad rápida y una interfaz fácil de usar. Está disponible por un período de prueba gratuito, después del cual los desarrolladores deben pagar $ 80.
  </p>
<img src="https://www.ochobitshacenunbyte.com/wp-content/uploads/2018/08/sublime-text-examble-fedora-28.jpg" />
</div>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://www.sublimetext.com/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Sublime Text</strong> </a>
</button>
</div>
<h4>4.6- Atom Editor</h4>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/naEQ5xkl5_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>
Atom es un editor de texto y código de fuente abierta para Linux, Mac OS y Microsoft Windows. Atom admite Git Control integrado y los complementos escritos en JavaScript.

Una de las características sobresalientes de Atom es que le permite compartir el progreso de su proyecto con amigos. El uso de Teletype for Atom (desde compartir conocimientos hasta enseñar) permitirá a los desarrolladores trabajar juntos en el mismo proyecto. Una de las cosas difíciles para los desarrolladores es colaborar mientras trabajan en las mismas ideas. Atom habilita esta operación directamente desde su editor de texto.
</p>
<div className="centrar">
<img src="https://mangelesbroullon.files.wordpress.com/2017/01/atom.png" />
</div>
<p>
Puede personalizar Atom de cualquier manera según sus requisitos. En Atom, todo se puede personalizar mediante CSS o JavaScript. Si desea una función que no existe, es fácil comenzar a escribir su paquete.
</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://atom.io/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Atom Editor</strong> </a>
</button>
</div>


<h4>4.7- Notepad++</h4>
<p>
notepad ++ es un editor de código ligero y de código abierto. Es un reemplazo del Bloc de notas que admite varios idiomas. Es fácil de usar y consume muy poca potencia de CPU. Las herramientas proporcionadas en él son útiles para diseñadores web y desarrolladores de aplicaciones para el usuario.

Notepad ++ ofrece resaltado de sintaxis, autocompletado, codificación de colores, numeración de líneas, edición de múltiples documentos y acercar y alejar. Está disponible solo en Windows.
</p>
<div className="centrar">
<img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/d0357f73-649c-4677-ba1a-22d5449eccf8.png?auto=format&q=50" />
</div>
<div className="centrar-imagen">

<button className="button-index">
  <a href="https://notepad-plus-plus.org/downloads/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Notepad++</strong> </a>
</button>
</div>



<h4>4.8- Light Table</h4>
<p>
Light Table es un editor de código de fuente abierta. Es liviano, su diseño de GUI es impecable y también se puede personalizar fácilmente. Podemos usar gráficos, juegos o cualquier cosa en la mesa de luz incrustándolos.

Las características de Light Table son su instalación liviana, interfaz minimalista, resaltado de sintaxis, validación de código en línea, autocompletado, administrador de complementos y temas.
</p>
<div className="centrar">
<img src="https://ayudalinux.com/wp-content/uploads/2018/12/light-table-un-potente-editor-de-codigo-abierto-gratuito-para-linux_2.jpg" />
</div>
<div className="centrar-imagen">
<button className="button-index">
  <a href="http://lighttable.com/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Light Table</strong> </a>
</button>
</div>
<h4>4.9- Bluefish</h4>
<p>
Bluefish es un potente editor de texto y código dirigido a programadores y desarrolladores web, con muchas opciones para desarrollar sitios web, scripts y código de programación. Bluefish admite muchos lenguajes de programación y de marcado. Bluefish es compatible con todas las plataformas Windows, Mac OS y Linux.
</p>
<div className="centrar">
<img src="https://lignux.com/wp-content/uploads/2016/03/bluefish-captura.png" />
</div>
<p>
El editor de código Bluefish es ligero, rápido y de alto rendimiento.

Admite múltiples interfaces de documentos, múltiples proyectos, búsqueda y reemplazo potentes, apertura de archivos recursiva, soporte multiproceso para archivos remotos, edición de pantalla completa, personalización para el lenguaje de programación, codificación Zen, múltiples soportes de codificación, funcionalidad ilimitada de rehacer / deshacer, descarga del sitio / upload y corrector ortográfico en línea. También es compatible con casi todos los lenguajes de programación.
</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://bluefish.openoffice.nl/index.html" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Bluefish</strong> </a>
</button>
</div>


<h4>4.10- Komodo Edit</h4>
<p>
Komodo editar es otro editor de texto muy popular para que los desarrolladores construyan entractive y aplicaciones excepcionales de Windows, Linux y Mac OS. Esta plataforma cuenta con potentes opciones de extensión para una codificación mejor y más cómoda.
</p>
<div className="centrar">
<img src="https://static.filehorse.com/screenshots/developer-tools/komodo-edit-screenshot-01.png" />
</div>
<p>Es uno de los mejores editores de texto gratuitos disponibles en Internet. Komodo Edit puede ser una plataforma perfecta para sus tareas de diseño web, ya que admite una amplia gama de lenguajes de script.

Como la mayoría de los editores, Komodo Edit también proporciona características esenciales que brindan una mejor experiencia de programación, como UI personalizable, edición de múltiples ventanas, vista dividida y funciones de autocompletar.</p>

<div className="centrar-imagen">
<button className="button-index">
  <a href="https://www.activestate.com/products/komodo-ide/downloads/edit/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Komodo Edit</strong> </a>
</button>
</div>
<h4>4.11- Vim</h4>
<p>Vim es una plataforma multiplataforma y uno de los editores de texto favoritos de los desarrolladores. Con soporte para Linux, Windows y Mac, el editor de texto Vim es un editor estable y confiable que integra muchas herramientas populares. Puede utilizar Vim como una interfaz de línea de comandos (CLI) y una interfaz gráfica de usuario independiente.

El editor de código tiene una comunidad grande y dedicada de sus usuarios que crean actualizaciones útiles y nuevos scripts para la plataforma. Vim es extensible y personalizable.</p>

<div className="centrar">
<img src="https://www.linuxadictos.com/wp-content/uploads/vim.jpg" />
</div>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://www.vim.org/download.php" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>Vim</strong> </a>
</button>
</div>
<h4>4.12- NetBeans</h4>
<p>NetBeans es uno de los editores de código más populares y potentes utilizados por los diseñadores web. Tiene muchas características únicas que ofrecen la mayoría de los editores. Como la mayoría de los editores de texto, NetBeans también es una aplicación gratuita y de código abierto.

Es una aplicación útil que se puede utilizar para desarrollar varias aplicaciones de escritorio, aplicaciones móviles o aplicaciones web. NetBeans admite muchos lenguajes de programación, incluidos PHP, C ++, JavaScript y muchos más.</p>

<div className="centrar">
<img src="https://www.oracle.com/ocom/groups/public/@otn/documents/digitalasset/1907038.png" />
</div>
<p>El editor de texto NetBeans también está disponible para Mac OS, Windows y Linux. El NetBeans IDE también es un tremendo Angular JS IDE y una herramienta fantástica para trabajar con Node.js</p>
<div className="centrar-imagen">
<button className="button-index">
  <a href="https://netbeans.apache.org/" target="_blank"  rel="noopener noreferrer">Link de Descarga: <strong>NetBeans</strong> </a>
</button>
</div>

<h4>4.13- Conclusión</h4>
<p>Espero que la lista anterior de editores de código le ayude con su trabajo de desarrollo. Todo depende de los escenarios de uso, así que elija lo que funcione mejor para usted. Todos los editores de texto mencionados anteriormente admiten un entorno fácil de usar y tratan de brindar al desarrollador la mejor experiencia de codificación.</p><br/>
<p><strong>En el próximo capitulo empezaremos con HTML</strong></p>
<div className="linea"></div>
<div className="flexArrows ">
<a  href="/"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
<a href="/mainHTML"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
</div>

<Footer/>
    </div>
  )
}

export default IndexReutilizable