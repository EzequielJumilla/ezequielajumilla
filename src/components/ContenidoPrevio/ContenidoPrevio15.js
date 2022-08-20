import React from 'react'
import './ContenidoHtml.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const ContenidoPrevio15 = () => {
  return (
   
      <div>
        <Header/>
        
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <div className="linea"></div>
        <h4>1.5- Tipos de programación</h4>
    <p>
       <strong>
         Programación estructurada:
       </strong> Busca mejorar y reducir el tiempo del proceso al utilizar subrutinas (subalgoritmos dentro del algoritmo principal que resuelve una tarea). <br/><br/>
       <div className="centrar-imagen">
  <img src="https://www.edix.com/es/wp-content/uploads/sites/2/2021/07/estructuras-programacion-estructurada-1024x352.jpg" />
</div>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/maVwtr6a-q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p>
La programación estructurada es una teoría orientada a mejorar la claridad, calidad y tiempo de desarrollo utilizando únicamente subrutinas o funciones. Basada en el teorema del programa estructurado propuesto por Böhm y Jacopini, ha permitido desarrollar software de fácil comprensión. ¿Repetimos? ¡No te asustes! Vamos a contarte de forma sencilla y rápida todo lo que debes saber sobre la programación estructurada.<br/><br/>
<h3>Características y ventajas</h3>
El teorema del programa estructurado es la base teórica sobre la que se construyó esta nueva forma de programar, ya que nos da la característica fundamental de la programación estructurada. Postula que, simplemente con la combinación de tres estructuras básicas, es suficiente para expresar cualquier función computable. Parece sencillo, ¿verdad? En realidad, lo es y, precisamente por eso, se abre inmediatamente el debate entre los programadores que querían continuar con el sistema anterior y los que abrazaban estas nuevas estructuras de control con los ojos cerrados. ¿Quién crees que ganó?  <br/><br/>

Vale, nadie fue declarado vencedor inmediatamente, pero sí que es cierto que ‘los Digital Workers de los años 70’ empezaban a ver poco a poco las grandes ventajas que ofrecía la programación estructurada sobre el código espagueti (los programas de computación antiguos que tenían una estructura de control de flujo compleja e incomprensible). Y, ¿qué ventajas eran esas?<br/><br/>

Los programas desarrollados con la programación estructurada son más sencillos de entender, ya que tienen una estructura secuencial y desaparece la necesidad de rastrear los complejos saltos de líneas (propios de la sentencia Goto) dentro de los bloques de código para intentar comprender la lógica interna. <br/><br/>
Como consecuencia inmediata de lo anterior, otra ventaja es que los programas resultantes tendrán una estructura clara, gracias a que las sentencias están ligadas y relacionadas entre sí.<br/><br/>
La fase de prueba y depuración de los programas se optimiza, ya que es mucho más sencillo hacer el seguimiento de los fallos y errores y, por tanto, detectarlos y corregirlos. <br/><br/>
El coste del mantenimiento de los programas que usan la programación estructurada es más reducido. ¿Por qué? Pues porque modificar o extender los programas es más fácil al estar formados por una estructura secuencial.<br/><br/>
Al ser más sencillos los programas, son más rápidos de crear y los programadores aumentan su rendimiento. <br/><br/>
Las 3 estructuras básicas 
Ya nos ha quedado claro que la programación estructurada es una forma de programar más sencilla que se basa únicamente en la combinación de tres órdenes. Pero, ¿cuáles son esos tipos de estructuras de control que son capaces de expresarlo todo?<br/><br/>

Secuencia. La estructura secuencial es la que se da de forma natural en el lenguaje, porque las sentencias se ejecutan en el orden en el que aparecen en el programa, es decir, una detrás de la otra.<br/><br/>
Selección o condicional. La estructura condicional se basa en que una sentencia se ejecuta según el valor que se le atribuye a una variable booleana. ¡Un pequeño inciso! Una variable booleana es aquella que tiene dos valores posibles. Por tanto, esta estructura se puede ejecutar de dos formas distintas, dependiendo del valor que tenga su variable.<br/><br/>
Como apunte para los verdaderos amantes de la programación: para las estructuras condicionales o de selección, Python dispone de la sentencia if, que puede combinarse con elif y/o else.<br/><br/>
Iteración (ciclo o bucle). La estructura de repetición ejecuta una o un conjunto de sentencias siempre que una variable booleana sea verdadera. Para los bucles o iteraciones, los lenguajes de programación usan las estructuras while y for.<br/><br/>
</p>
<div className="linea"></div>
<strong>Programación modular:</strong> Divide los programas en módulos para trabajar con ellos y resolver los problemas de manera más simple.<br/><br/>
<div className="centrar-imagen">
  <img src="https://www.oposinet.com/wp-content/uploads/2018/07/clip_image002-2.jpg" />
</div>

<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CvTVEb67zyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p>
  <h3>Qué es programación modular? </h3>

Como vimos, básicamente la programación modular consiste en dividir un programa en distintos subprogramas independientes. De esta forma el software principal se vuelve más fácil de manejar.<br/><br/>

Pero además, los subprogramas resultantes del programa principal pueden también ser divididos en subprogramas más pequeños aún.<br/><br/>

Lo que se busca con ello básicamente es poder lograr obtener subprogramas lo más simple posibles. De esta manera los problemas pueden ser resueltos de forma fácil por un lenguaje de programación.<br/><br/>

Esto es gracias a que la programación modular permite en principio dividir la complejidad de un problema, y además se puede reutilizar el código de un programa en cualquier momento.<br/><br/>

Para ello se utiliza la técnica denominada Top-Down o análisis descendente.<br/><br/>

La técnica Top-Down hace posible diseñar una solución a un problema a través de la segmentación, y su nombre refiere a que este procedimiento se realiza de arriba hacia abajo.<br/><br/>
En informática, la programación modular utiliza el proceso de segmentación, con lo cual se diseñan pequeños bloques de códigos independientes para subprogramas, que serán parte luego del software mayor.<br/><br/>

Ten en cuenta que en la mayoría de los casos esta técnica Top-Down se utiliza en conjunto con pseudocódigo, para de esta manera poder generar una herramienta de diseño de algoritmos adecuada.<br/><br/>

En el proceso de segmentación entran en juego los módulos, los cuales además se integran entre sí de manera jerárquica para conformar el programa que se está desarrollando.<br/><br/>
<h3>Qué es el módulo? </h3>

Como ya te podrás imaginar, cada uno de los módulos son parte integrante de un conjunto superior, es decir de un programa mayor.<br/><br/>

Es decir que cada módulo de un programa es básicamente cada una de las partes de ese programa, y que fueron creados como subprogramas con tareas para específicas y definidas.<br/><br/>

Entonces podemos decir que cada módulo es un segmento, una rutina, una subrutina, un subalgoritmo o un procedimiento que permite ejecutar una tarea específica, y que opera dentro del módulo principal.<br/><br/>
Sin embargo, cabe aclarar que un módulo no es simplemente una función o un procedimiento, porque en realidad puede contener en sí muchos de ellos.<br/><br/>

Por ende, ten en cuenta que cada módulo es un bloque de sentencias que resuelve un problema particular.<br/><br/>
<h3>Características de la programación modular </h3>

En la programación modular la premisa es que todo programa tiene un módulo principal.
<br/><br/>
A su vez ese módulo está dividido en submódulos. Cada uno de estos submódulos ejecutan una tarea específica, por lo que su código es independiente.
<br/><br/>
A pesar de esa independencia, el control siempre lo tendrá el módulo principal.
<br/><br/>
Debido a esta conformación, la programación modular incluye una serie de características esenciales. Estas características son las siguientes:
<br/><br/>
<h4>Modularidad</h4>


El programa incluye subprogramas que han sido desarrollados con códigos independientes.<br/><br/>
Cada módulo es un conjunto de sentencias que permiten realizar una acción u operación.
Gracias a su modularidad, la programación modular permite disponer de pequeños módulos o sentencias simples que se acoplan a la función principal del software, en reemplazo de una única función principal larga.<br/><br/>
Cada uno de los módulos es más fácil de comprender, con lo cual es posible al final tener una gran solución para un problema complejo.<br/><br/>
La comunicación entre estos subprogramas se realiza por medio de parámetro=variable.<br/><br/>
<h4>Funcionalidad</h4>


En la programación modular es necesario utilizar funciones que incluyen definición, comandos y sentencias.<br/><br/>
Todas las funciones incluyen una sentencia de retorno.
Las funciones utilizan las sentencias de las variables adicionales.
Variable<br/><br/>

La programación modular incluye variables que se encuentran dentro de la función principal del programa.<br/><br/>
Con cada función que se ejecuta, las variables tienen un valor específico, aunque como su nombre lo indica, este valor puede cambiar cada vez que se lleva a cabo dicha función.<br/><br/>
Existen dos tipos de variables: Las variables locales y las variables globales. Estas últimas son definidas de forma externa al programa principal, pero están relacionadas a las funciones que se encuentran dentro del programa.<br/><br/>
<h4>Procedimental</h4>


Está orientada por completo a la escritura de código para la creación de funciones.
No toma en cuenta los datos.

<h3>Ventajas programación modular</h3>
Como has podido ver hasta ahora, la programación modular tiene muchas ventajas. Algunas de las mismas son:<br/><br/>

Gracias a su estructuración, es capaz de reducir la complejidad y los alcances del problema.<br/><br/>
Debido a lo anterior, también es posible reducir el tamaño del problema.
También favorece el entendimiento del problema. Esta característica es muy interesante cuando más de un programador tiene que hacerse cargo del mantenimiento del programa.<br/><br/>
Facilita la cooperación entre programadores. Esto es muy útil en proyectos muy grandes y complejos.<br/><br/>
Una de las características más importantes es la posibilidad de reutilizar el código.
La estructura de la programación modular permite que el código se pueda escribir y leer con más facilidad. Una opción más que interesante en proyectos en los que participan muchos programadores.<br/><br/>
También te permite que la lógica del programa sea mucho más clara. Un punto a favor en proyectos grandes.<br/><br/>
La estructura de la programación modular permite proteger la ejecución del programa. Es decir que tiene la capacidad de proveer seguridad para evitar que se destruyan datos en forma accidental.<br/><br/>
La propia estructuración de la programación modular posibilita una solución rápida y efectiva de los problemas mayores. Luego de ello los programadores podrán centrarse en los detalles menos importantes, como la GUI y demás.<br/><br/>
Con respecto a la depuración de los errores de un desarrollo, esta es mucho más sencilla de llevar a cabo. Esto es debido a que en primera instancia se corrigen errores en los módulos del nivel inferior. En este mismo sentido, se favorece la modificación del código.<br/><br/>
En la programación modular, el desarrollo del programa es independiente del proyecto.
La característica más destacada de la programación modular es sin dudas la posibilidad de desarrollar programas mucho más eficientes.<br/><br/>
Otra ventaja de este tipo de programación es la posibilidad de la utilización múltiple de los módulos.<br/><br/>
<h3>Desventajas de programacion modular</h3>
Así como la programación modular tiene sus claras ventajas, también ofrece una buena cantidad de desventajas con respecto a otros paradigmas de programación.<br/><br/>

Alguna de las desventajas de la programación modular son las siguientes:<br/><br/>

Ofrece una estructura por demás orientada a objetos. La programación modular usa interfaces, lo cual es muy eficiente. Para ello, muchos frameworks ofrecen sets completos de clases intercambiables. Ejemplos de ellos existen varias clases capaces de implementar una interfaz de persistencia. Pero esto lleva a confusión cuando se utilizan entornos de desarrollo integrado, conocidos como IDE. En este sentido, en el caso de querer hallar la fuente de un método, por ejemplo el IDE podría mostrar una extensa lista de archivos. Todos con referencia a un método con ese nombre.
<br/><br/>
Otra desventaja importante de la programación modular es que existen muchos módulos que contienen funciones mínimas. Todos estos módulos, a la hora de ejecutar el programa, suman tiempo de procesamiento. Esto significa que si se usan muchos de estos módulos pequeños, se aumenta la necesidad de tiempo de proceso, tanto para la compilación como para la ejecución. Asimismo aumentará el tamaño del paquete del ejecutable.
<br/><br/>
Como saben todos los programadores, descomponer un código en módulos no tiene mucho sentido. Muchos de los códigos que se utilizan nunca cambian, y por ello no tiene demasiada razón intentar mejorarlos, ya que se funcionan a la perfección. En este sentido, existen códigos muy usados que no se ven muy lindos en el papel, pero que funcionaron a la perfección durante años.
</p>
<div className="linea"></div>
<strong>Programación orientada a objetos:</strong> Utiliza objetos (entes con características, estado y comportamiento) como elementos fundamentales para la búsqueda de soluciones.
<div className="centrar-imagen">
  <img src="https://www.caracteristicasdel.com/wp-content/uploads/2021/01/Caracteristicas-de-la-Programacion-Orientada-a-Objetos.....jpg" />
</div>
<div className="centrar">
<iframe width="560" height="315" src="https://www.youtube.com/embed/zsw54F3aFNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
La Programación Orientada a Objetos (POO) es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos. <br/><br/>

A lo largo de la historia, han ido apareciendo diferentes paradigmas de programación. Lenguajes secuenciales como COBOL o procedimentales como Basic o C, se centraban más en la lógica que en los datos. Otros más modernos como Java, C# y Python, utilizan paradigmas para definir los programas, siendo la Programación Orientada a Objetos la más popular. <br/><br/>

Con el paradigma de Programación Orientado a Objetos lo que buscamos es dejar de centrarnos en la lógica pura de los programas, para empezar a pensar en objetos, lo que constituye la base de este paradigma. Esto nos ayuda muchísimo en sistemas grandes, ya que en vez de pensar en funciones, pensamos en las relaciones o interacciones de los diferentes componentes del sistema.<br/><br/>

Un programador diseña un programa de software organizando piezas de información y comportamientos relacionados en una plantilla llamada clase. Luego, se crean objetos individuales a partir de la plantilla de clase. Todo el programa de software se ejecuta haciendo que varios objetos interactúen entre sí para crear un programa más grande.<br/><br/>
<h4>¿Por qué POO?</h4>
La Programación Orientada a objetos permite que el código sea reutilizable, organizado y fácil de mantener. Sigue el principio de desarrollo de software utilizado por muchos programadores DRY (Don’t Repeat Yourself), para evitar duplicar el código y crear de esta manera programas eficientes. Además, evita el acceso no deseado a los datos o la exposición de código propietario mediante la encapsulación y la abstracción, de la que hablaremos en detalle más adelante.<br/><br/>
<h4>
Clases, objetos e instancias</h4>
¿Cómo se crean los programas orientados a objetos? Resumiendo mucho, consistiría en hacer clases y crear objetos a partir de estas clases. Las clases forman el modelo a partir del que se estructuran los datos y los comportamientos.<br/><br/>

El primer y más importante concepto de la POO es la distinción entre clase y objeto.
<br/><br/>
Una clase es una plantilla. Define de manera genérica cómo van a ser los objetos de un determinado tipo. Por ejemplo, una clase para representar a animales puede llamarse ‘animal’ y tener una serie de atributos, como ‘nombre’ o ‘edad’ (que normalmente son propiedades), y una serie con los comportamientos que estos pueden tener, como caminar o comer, y que a su vez se implementan como métodos de la clase (funciones).<br/><br/>

Un ejemplo sencillo de un objeto, como decíamos antes, podría ser un animal. Un animal tiene una edad, por lo que creamos un nuevo atributo de ‘edad’ y, además, puede envejecer, por lo que definimos un nuevo método. Datos y lógica. Esto es lo que se define en muchos programas como la definición de una clase, que es la definición global y genérica de muchos objetos.<br/><br/>
<div className="centrar-imagen">
  <img src="https://profile.es/wp-content/media/POO.jpg" />
</div>
Con la clase se pueden crear instancias de un objeto, cada uno de ellos con sus atributos definidos de forma independiente. Con esto podríamos crear un gato llamado Paco, con 3 años de edad, y otro animal, este tipo perro y llamado Pancho, con una de edad de 4 años. Los dos están definidos por la clase animal, pero son dos instancias distintas. Por lo tanto, llamar a sus métodos puede tener resultados diferentes. Los dos comparten la lógica, pero cada uno tiene su estado de forma independiente.<br/><br/>

Todo esto, junto con los principios que vamos a ver a continuación, son herramientas que nos pueden ayudar a escribir un código mejor, más limpio y reutilizable.

<h3>4 Principios de la Programación Orientada a Objetos </h3>
<h4>La encapsulación</h4>
La encapsulación contiene toda la información importante de un objeto dentro del mismo y solo expone la información seleccionada al mundo exterior. 
Esta propiedad permite asegurar que la información de un objeto esté oculta para el mundo exterior, agrupando en una Clase las características o atributos que cuentan con un acceso privado, y los comportamientos o métodos que presentan un acceso público.<br/><br/>

La encapsulación de cada objeto es responsable de su propia información y de su propio estado. La única forma en la que este se puede modificar es mediante los propios métodos del objeto. Por lo tanto, los atributos internos de un objeto deberían ser inaccesibles desde fuera, pudiéndose modificar sólo llamando a las funciones correspondientes. Con esto conseguimos mantener el estado a salvo de usos indebidos o que puedan resultar inesperados. <br/><br/>

Usamos de ejemplo un coche para explicar la encapsulación. El coche comparte información pública a través de las luces de freno o intermitentes para indicar los giros (interfaz pública). Por el contrario, tenemos la interfaz interna, que sería el mecanismo propulsor del coche, que está oculto bajo el capó. Cuando se conduce un automóvil es necesario indicar a otros conductores tus movimientos, pero no exponer datos privados sobre el tipo de carburante o la temperatura del motor, ya que son muchos datos, lo que confundiría al resto de conductores.<br/><br/>
<h4>
La abstracción</h4>
La abstracción es cuando el usuario interactúa solo con los atributos y métodos seleccionados de un objeto, utilizando herramientas simplificadas de alto nivel para acceder a un objeto complejo.<br/><br/>

En la programación orientada a objetos, los programas suelen ser muy grandes y los objetos se comunican mucho entre sí. El concepto de abstracción facilita el mantenimiento de un código de gran tamaño, donde a lo largo del tiempo pueden surgir diferentes cambios.<br/><br/>

Así, la abstracción se basa en usar cosas simples para representar la complejidad. Los objetos y las clases representan código subyacente, ocultando los detalles complejos al usuario. Por consiguiente, supone una extensión de la encapsulación. Siguiendo con el ejemplo del coche, no es necesario que conozcas todos los detalles de cómo funciona el motor para poder conducirlo.<br/><br/>
<h4>
La herencia</h4>
La herencia define relaciones jerárquicas entre clases, de forma que atributos y métodos comunes puedan ser reutilizados. Las clases principales extienden atributos y comportamientos a las clases secundarias. A través de la definición en una clase de los atributos y comportamientos básicos, se pueden crear clases secundarias, ampliando así la funcionalidad de la clase principal y agregando atributos y comportamientos adicionales.<br/><br/>

Volviendo al ejemplo de los animales, se puede usar una sola clase de animal y agregar un atributo de tipo de animal que especifique el tipo de animal. Los diferentes tipos de animales necesitarán diferentes métodos, por ejemplo, las aves deben poder poner huevos y los peces, nadan. Incluso cuando los animales tienen un método en común, como moverse, la implementación necesitaría muchas declaraciones «si» para garantizar el comportamiento de movimiento correcto. Por ejemplo, las ranas saltan, mientras que las serpientes se deslizan. El principio de herencia nos permite solucionar este problema.<br/><br/>
<h4>
El polimorfismo</h4>
El polimorfismo consiste en diseñar objetos para compartir comportamientos, lo que nos permite procesar objetos de diferentes maneras. Es la capacidad de presentar la misma interfaz para diferentes formas subyacentes o tipos de datos. Al utilizar la herencia, los objetos pueden anular los comportamientos principales compartidos, con comportamientos secundarios específicos. El polimorfismo permite que el mismo método ejecute diferentes comportamientos de dos formas: anulación de método y sobrecarga de método.<br/><br/>

Alrededor de estos principios de la programación orientada a objetos se construyen muchas cosas. Por ejemplo, los Principios SOLID, o los Patrones de diseño, que son recetas que se aplican a problemas recurrentes que se han encontrado y se repiten en varios proyectos.<br/><br/>
<h3>Beneficios de Programación Orientada a Objetos</h3>
<p>Reutilización del código.<br/><br/>
Convierte cosas complejas en estructuras simples reproducibles.<br/><br/>
Evita la duplicación de código.<br/><br/>
Permite trabajar en equipo gracias al encapsulamiento ya que minimiza la posibilidad de duplicar funciones cuando varias personas trabajan sobre un mismo objeto al mismo tiempo.<br/><br/>
Al estar la clase bien estructurada permite la corrección de errores en varios lugares del código.<br/><br/>
Protege la información a través de la encapsulación, ya que solo se puede acceder a los datos del objeto a través de propiedades y métodos privados.<br/><br/>
La abstracción nos permite construir sistemas más complejos y de una forma más sencilla y organizada.<br/><br/>
</p>
</p>
        <div className="linea"></div>
        <div className="flexArrows ">
        <a  href="/ContenidoPrevio1-4"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
        <a href="/ContenidoPrevio1-6"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
        </div>
        <Footer/>
        </div>
    
  )
}

export default ContenidoPrevio15