## DOM
[60 Web APIs](#60-web-apis)

[61 DOM Introducción](#61-dom-introducción)

[63 Data Attribute](#curso-de-javascript-63-dom-atributos-y-data-attributes)

[68 DOM: Creando Elementos y Fragmentos](#68-dom-creando-elementos-y-fragmentos)

[72 Manejador de Eventos](01_Fundamentos/javascript.md#curso-de-javascript-72-dom-manejadores-de-eventos)

[106 AJAX:Objeto XMLHttpRequest](#curso-de-javascript-106-ajaxobjeto-xmlhttprequest)

[111 API REST Introducción](#javascript-111-api-rest-introducción)

[112 API REST:JSON Server - API falsa local](#javascript-112-api-restjson-server-api-falsa-local)

[113 API REST:Consumo de datos con client REST](#javascript-113api-restconsumo-de-datos-con-client-rest)

## 60 WEB APIs
El DOM, que es la sigla de Document Object Model (Modelo de Objetos del Documento), es esencial. Me gustaría aclarar que no me gusta pronunciarlo como API (Interfaz de Programación de Aplicaciones) porque en este caso el DOM se refiere a una serie de objetos y mecanismos implementados en el lenguaje para interactuar con el navegador, como es la estructura del documento HTML.

Esto incluye el árbol del DOM y el control de la ventana del navegador, como la barra de direcciones, el tamaño y algunas otras características que el navegador nos puede proporcionar, como el sistema operativo en el que está el usuario o la ubicación geográfica. Esto vendría a ser el Browser Object Model (BOM).

Recientemente, ha surgido una nueva definición para interactuar con CSS, conocido como CSS Object Model (CSSOM), que consiste en un conjunto de objetos, métodos e interfaces que permiten interactuar con CSS a través de JavaScript. A partir de estos tres principales (DOM, BOM y CSSOM), hay una infinidad de APIs que nos sirven para prácticamente cualquier cosa, especialmente para el manejo de eventos, formularios, y el consumo de datos asíncronos con AJAX y Fetch.

Además, existe un objeto que nos controla el historial, el almacenamiento en la web y la ubicación del usuario: window.location. También está la API de IndexedDB, que es una pequeña base de datos que se guarda en el navegador, y el elemento `<canvas>`, que se utiliza para dibujar, así como matchMedia, que controla las media queries de CSS, pero en JavaScript.

la importancia del DOM. Como se muestra en la documentación oficial de Mozilla, el DOM es la representación de los documentos HTML y XML para trabajar con JavaScript.

Es muy importante recordar que el DOM es una interfaz estandarizada, pero su enfoque se limita al control de los nodos. Recuerda que HTML es un lenguaje de marcado, y cada etiqueta, representa un elemento que es un nodo del árbol del DOM.

El DOM es la API que tiene JavaScript en la web para manipular el código HTML y, de manera similar, el CSSOM se deriva del DOM, pero se enfoca en manipular CSS. Por ejemplo, en el CSSOM, puedes controlar eventos de animación y gestionar cómo se comportan los elementos en pantalla.

Ahora, pasemos a trabajar en algunas herramientas para aplicar dinámicamente estilos a nuestras interfaces web. El DOM y el CSSOM están relacionados: el DOM manipula HTML mediante JavaScript y CSSOM manipula CSS de la misma manera.

El BOM, o Browser Object Model, aunque no se considera una API estándar, ha evolucionado. Cada navegador tiene su propia forma de manejar ciertas características, pero en los últimos años, especialmente desde 2012-2013, los navegadores han empezado a implementar características similares y estandarizadas.

En los primeros años de este milenio, durante la llamada "guerra de los navegadores", Internet Explorer dominaba el mercado y su funcionamiento era muy diferente al de otros navegadores, lo que generaba problemas de compatibilidad. Por eso, jQuery ganó popularidad, ya que abstraía esas diferencias y proporcionaba un método unificado para realizar peticiones asíncronas.

Hoy en día, con los avances de JavaScript y las estandarizaciones en los navegadores, ya no es necesario recurrir a jQuery. A medida que avanzamos en el curso, veremos cómo utilizar el HTML y el JavaScript de manera efectiva. Vamos a seguir trabajando en la consola, aunque también comenzaremos a utilizar el código HTML.

Recuerda que el objeto global en los navegadores es window, y dentro de él encontramos otros objetos importantes, como navigator, que controla características del entorno del usuario. Por ejemplo, navigator te permite detectar el idioma del documento HTML, la plataforma (sistema operativo) y el userAgent, que proporciona información sobre el navegador que está utilizando el usuario.

Por último, el objeto history controla el historial de navegación, y location gestiona las partes de la URL. Así que asegúrate de entender cómo todo cuelga del objeto window, que es el contexto global de JavaScript.

Vamos a ver cómo se relacionan estas partes: DOM, BOM y CSSOM. A pesar de que el BOM no es considerado un estándar, la integración entre navegadores ha mejorado significativamente. Esto significa que las APIs que interactúan con el HTML, CSS y otras funciones del navegador son cada vez más efectivas.

Además, existen APIs que permiten activar funcionalidades como la síntesis de voz, que te permite enviar comandos de voz a tu computadora mediante JavaScript. Por ejemplo, puedo crear una función llamada hablar que utiliza la API de síntesis de voz para hacer que la computadora lea un texto en voz alta.

Voy a crear una función que recibirá un texto y utilizará SpeechSynthesis para convertirlo en voz. Por ejemplo, puedo declarar una variable con el texto que quiero que se lea en voz alta: "Hola, soy tu amigo y docente digital, Jonathan Marcha". Cuando ejecute esta función, mi computadora leerá el texto en voz alta.

Existen muchas APIs para controlar diversas funcionalidades, como la batería de dispositivos móviles, la ubicación geográfica, y mucho más. Así que a medida que avanzamos, verás que el mundo de las APIs web es vasto y emocionante, con muchas nuevas características implementándose constantemente.

[DOM](#dom)
## 61 DOM Introducción

El DOM es una interfaz de programación que representa un documento HTML como un árbol de nodos. Cada nodo representa un elemento, atributo, texto o comentario dentro del documento. El objeto document en JavaScript nos da acceso a la raíz de este árbol.

- `console.log(window.document);`
  Esto imprime el objeto document en la consola. Como window.document es equivalente a document, ambas líneas hacen lo mismo.
- `console.log(document);`
  Imprime el nodo raíz del DOM en la consola. Representa el documento HTML completo.
- `console.log(document.head);`
  Imprime el elemento `<head>` del documento en la consola. El `<head>` contiene metadatos sobre la página, como el título, estilos y scripts.
- `console.log(document.body);`
  Imprime el elemento `<body>` del documento en la consola. El `<body>` contiene el contenido visible de la página.
- `console.log(document.documentElement);`
  Imprime el elemento raíz del documento (normalmente `<html>`) en la consola.
- `console.log(document.doctype);`
  Imprime la declaración del tipo de documento (por ejemplo, `<!DOCTYPE html>`) en la consola.
- `console.log(document.charset);`
  Imprime la codificación de caracteres utilizada en el documento (por ejemplo, UTF-8) en la consola.
- `console.log(document.title);`
  Imprime el título del documento (definido en el elemento `<title>`) en la consola.
- `console.log(document.links);`
  Imprime una colección de todos los elementos `<a>` (enlaces) dentro del documento en la consola.
- `console.log(document.images);`
  Imprime una colección de todos los elementos `<img>` (imágenes) dentro del documento en la consola.
- `console.log(document.forms);`
  Imprime una colección de todos los elementos `<form>` dentro del documento en la consola.
- `console.log(document.styleSheets);`
  Imprime una colección de todas las hojas de estilo vinculadas al documento en la consola.
- `console.log(document.scripts);`
  Imprime una colección de todos los elementos `<script>` dentro del documento en la consola.
- `console.log(document.getSelection().toString());`
  Imprime el texto actualmente seleccionado dentro del documento en la consola.
- `document.write();`
  Este método se utiliza para escribir texto directamente en el documento, pero generalmente no se recomienda para manipular contenido dinámico, ya que puede sobrescribir el contenido existente del documento.

## Curso de javascript 62 DOM: Nodos, Elementos y Selectores

```html
<h3>Manejo del DOM</h3>
<p id="que-es">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat
  officiis tempore quidem qui sequi, omnis pariatur cum aperiam porro nobis
  nulla quaerat, et animi itaque laudantium quas nesciunt quibusdam!
</p>
<nav id="menu">
  <ul>
    <li><a href="#">Sección 1</a></li>
    <li><a href="#">Sección 2</a></li>
    <li><a href="#">Sección 3</a></li>
    <li><a href="#">Sección 4</a></li>
    <li><a href="#">Sección 5</a></li>
  </ul>
</nav>
<input type="text" name="nombre" placeholder="Nombre" />
<a class="link-dom" href="dom.html">DOM</a>
<section class="cards">
  <figure class="card">
    <img src="https://picsum.photos/200/300" alt="Tech" />
    <figcaption>Tech</figcaption>
  </figure>
</section>
```
En el archivo JavaScript, comenzaremos a ver cómo seleccionar nodos. Es importante recordar que un nodo representa cada elemento dentro del DOM. Existen distintos tipos de nodos, como nodos de elemento (las etiquetas HTML) y nodos de texto (el contenido dentro de las etiquetas). Para trabajar con HTML, nos interesan principalmente los nodos de tipo "elemento" y "texto".

Existen varias maneras de seleccionar elementos en el DOM usando JavaScript. Algunos métodos tradicionales incluyen:

- `console.log(document.getElementsByTagName())`: selecciona todos los elementos de un tipo específico (como `<li>`, `<p>`, etc.).
- `console.log(document.getElementsByClassName())`: selecciona todos los elementos con una clase específica.
- `console.log(document.getElementsByName())`: selecciona elementos con un atributo name específico (principalmente útil en formularios).
- `console.log(document.getElementById())`: selecciona un único elemento por su identificador único id.

Aunque estos métodos siguen siendo útiles, hoy en día solemos utilizar `querySelector()` y `querySelectorAll()`, que son más flexibles.

- `querySelector()` selecciona el primer elemento que coincide con un selector CSS.
- `querySelectorAll()` selecciona todos los elementos que coinciden con un selector CSS, devolviendo una NodeList.

Aunque `querySelector` es un poco más lento que `getElementById()` debido a su flexibilidad, se ha convertido en una práctica común porque puede manejar selectores CSS complejos. Para obtener, por ejemplo, todos los enlaces en una página, puedes usar `document.querySelectorAll("a")`.

Las `NodeLists` y las `HTMLCollections` se parecen a los arreglos, ya que tienen propiedades como `length`, pero no comparten todos los métodos de los arreglos. Sin embargo, podemos usar métodos como `forEach()` en las `NodeLists`.

```js
document.querySelectorAll("a").forEach((el) => console.log(el));
```

Para trabajar con los elementos seleccionados, por ejemplo, podemos recorrer una lista de nodos y realizar operaciones en cada uno de ellos. Además, más adelante exploraremos los métodos de selección y las propiedades de CSS para poder manipular y estilizar estos elementos.

## curso de javascript 63 DOM: Atributos y Data-Attributes

Sí, algunos desarrolladores utilizan el símbolo "$" al principio de los nombres de variables para indicar que la variable hace referencia a un elemento del DOM (Document Object Model).

No es obligatorio y no afecta la funcionalidad del código, pero sirve como una convención para mejorar la legibilidad y organización. De esta manera, al leer el código, se puede identificar rápidamente qué variables almacenan elementos del DOM.

`const $linkDOM = document.querySelector(".link-dom");`

¿Por qué usar noopener?

Cuando se utiliza `target="\_blank"` para abrir un enlace en una nueva pestaña, la nueva pestaña tiene acceso al objeto window de la página original a través de la propiedad window.opener. Esto puede ser un riesgo de seguridad, ya que la nueva pestaña podría usar JavaScript para manipular la página original.

Al agregar rel="noopener" al enlace, se previene q

`$linkDOM.setAttribute("rel", "noopener");`

**Data-Attributes**
Todos los data attributes de un elemento HTML se guardan en una colección JavaScript llamada dataset.

¿Qué son los data attributes?

Son atributos HTML personalizados que comienzan con data-. Se utilizan para almacenar información extra sobre un elemento que no tiene una representación visual directa en la página.

## 64 DOM: Estilos y Variables CSS

Recuerde que los atributos podemos acceder con la notacion del punto y no tanto con el metodo getAttribute, porque `console.log($linkDOM.style)` me va a regresar un objeto de tipo CSSStyleDeclaration donde es un mapa de todas las propiedades CSS validas.Muy importante estan escrita en formato camelCase, recuerden que en CSS el separador es el guion medio pero el guion medio en JS podria representar una resta numerica entonces para convertir todas la propiedades en JS valida a CSS se le quita el guion medio y utilizamos la tecnica de lowerCamelCase.

¿Qué pasa si quisiera con getComputedStyle acceder solamente a una propiedad? pues simplemente acceder al metodo ".getPropertyValue()" y pasarle el nombre de la propiedad que quiero imprimir y recuerden que es un metodo que cuelga de window pues no es necesario crear una instancia de window.

```js
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
```

## 68 DOM: Creando Elementos y fragmentos.
Recuerda que un elemento es una etiqueta HTML.
El DOM tiene un elemento que se llama ".createElement()" que va a crear un elemento del DOM HTML.

```js
const $div = document.createElement("div");
```
Recuerda que tenemos en el DOM, en la especificación del DOM existe 12 diferentes tipos de nodos, unos de ellos son las etiquetas otros son los nodos de textos.En el ejemplo practico 


## 72 DOM: Manejadores de Eventos

Los Eventos
👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario
y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se
cumplan algunas condiciones.
👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event
Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
👉 Hay 3 maneras de definir los Eventos en JS :

**1️⃣COMO ATRIBUTO DEL HTML**
👀 Muy importante:
👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
👉 Cuando una función se convierte en un Event Handler, es decir una función que se
ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en
sí, y eso lo podemos acceder con la palabra reservada 'event'

```js
function holaMundo(){
alert('Holaaa Mundo')
```

`console.log(event)`👈 con esto en la consola, se desencadena un tipo de Objeto
MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy
importantes: type y target.
👉 type.- es el tipo de evento q se desencadeno
👉 target.- es el elemento que origino el evento
👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho
elemento y los q estan en null son eventos q no tienen definida dicha función en dichos
eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo

**2️⃣COMO MANEJADOR SEMÁNTICO**

👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la
vamos definiendo
👉 cuando definamos un evento como semántico igualamos el evento semántico al
nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar

```js
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
```

👈 no le ponemos () a la función xq sino al
momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos
dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la
función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se
ejecuta.
//👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función
anónima o una arrow function
$eventoSemantico.onclick = function(e){ //👈 Toda función q se convierte en un
Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento
no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos
obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
alert(`Hola Manejador de Evento Semántico`)
console.log(e)
console.log(event)
}

COMO MANEJADOR MÚLTIPLE
//👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método
`.addEventListener()` que nos perimite levantar un Escuchador de Eventos

```js
const $eventoMultiple = document.getElementById("evento-multiple");
```

👇 este método `.addEventListener()` recibe varios parámetros, pero sólo nos
enfocaremos en 2:

1. Nombre de evento
2. Función q se va a ejecutar, pero sin parentesis

```js
$eventoMultiple.addEventListener("click", holaMundo);
```

👇 tmb podemos trabajar con una arrow function

```js
$eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2
alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el
evento de tipo semántico, esta es la ventaja de maneja evento múltiple con
addEventListener xq puede ejecutar más funciones
alert(`Hola Manejador de Evento Múltiple`)
console.log(e)
console.log(e.type)
console.log(e.target)
console.log(event)
} )

//📝NOTA:
//👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta
en dicho Evento
//👉 Una misma función nos puede servir para desencadenar eventos en diferentes
elementos
//👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta,
cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos
agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el
onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del
DOM q se estamos manejando
//👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes
Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la
limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento
semántico sólo va poder ejecutar una función.
//👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se
ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q
recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos
abreviar con la letra 'e
```

## 106: AJAX:Objeto XMLHttpRequest

Paso a seguir

1. Instanciar el objeto XMLHttpRequest().
   `const xhr = new XMLHttpRequest() `
2. Asignarle el o los eventos que vallamos estar manipulando de la pelicion, de hecho la logica de la programación va ir en esa callback.

   ` xhr.addEventListener("readystatechange", (e) => {})`

3. Abrir la petición, establecer el metodo en el que lo vamos hacer y el recurso o la url o el endpoint tambien se suele conocer cuando se habla de APIs.
   `xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); `
4. Finalmente enviar la petición con el metodo send().

   `xhr.send() `

## 111.API REST Introducción

## 112.API REST:JSON Server - API falsa local

## 113.API REST:Consumo de datos con client REST

## 118:API REST CRUD con Fetch(2/2)

## 119:API REST CRUD con Axios(1/2)

## 120:API REST CRUD con Axios(2/2)

## 145:SPA Estructura de Proyecto(assets,helpers,components)

## 146:SPA Helper de conexión a API REST 

## 147:SPA Helper de peticiones AJAX

## 148:SPA Primeros componentes de UI

## 149:SPA Componente Header

## 150:SPA Renderizado Dinámico

## 151:SPA Enrutamiento

## 152:SPA Refactorización de la App.Enrutamiento Asíncrono.

## 153:SPA Vista de Post Actual 


Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

Learn more at https://developers.google.com/idx/guides/customize-idx-env
