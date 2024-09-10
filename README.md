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

API son las siglas de Interfaz de Programación de Aplicaciones.
En JavaScript, las APIs proporcionan una interfaz para que los desarrolladores interactúen con las diversas funcionalidades y objetos que ofrece el navegador. Estas APIs exponen una serie de objetos y métodos que permiten:

- Manipular el DOM (Document Object Model): Acceder y modificar la estructura, el estilo y el contenido de un documento HTML. Esto incluye agregar, eliminar y modificar elementos HTML, así como manejar eventos del usuario.
- Controlar la ventana del navegador: Modificar el tamaño, la posición, la barra de direcciones y otras características de la ventana del navegador.
- Acceder a información del sistema: Obtener detalles sobre el sistema operativo, la ubicación geográfica del usuario, la resolución de pantalla y otros datos del entorno.
- Realizar operaciones de red: Hacer solicitudes HTTP para comunicarse con servidores y obtener datos.
- Utilizar funcionalidades del navegador: Acceder a funciones como almacenamiento local, historial de navegación, web sockets y muchas más.

**DOM:Document Object Model**

El DOM (Document Object Model) es una parte fundamental de JavaScript que nos permite interactuar con el contenido de una página web.El DOM está organizado en una jerarquía de nodos. Los nodos pueden ser de diferentes tipos:

- Elemento: Representa un elemento HTML (por ejemplo, `<div>`, `<p>`, `<button>`).
- Atributo: Representa un atributo de un elemento (por ejemplo, id, class).
- Texto: Representa el texto contenido dentro de un elemento.
- Comentario: Representa un comentario en el código HTML.

**¿Para qué sirve el DOM?**

- Crear contenido dinámico: Puedes añadir, eliminar o modificar elementos HTML en tiempo real, lo que permite crear páginas web más interactivas y dinámicas.
- Cambiar estilos: Puedes aplicar o modificar estilos CSS a los elementos, cambiando su apariencia visual.
- Manejar eventos: Puedes agregar eventos a los elementos (como clics, sobrevuelos, etc.) y ejecutar código cuando se produzcan estos eventos.
- Validar formularios: Puedes verificar que los datos ingresados por el usuario sean correctos antes de enviar un formulario.
- Crear animaciones: Puedes crear animaciones suaves y fluidas utilizando JavaScript y el DOM.

**EL objecto global es window**

El objeto global en JavaScript es, window en un entorno de navegador.

¿Qué significa esto?

- Contexto global: Todos los objetos, variables y funciones que se declaran a nivel global (es decir, fuera de cualquier función o bloque de código) se adjuntan automáticamente al objeto window.
- Acceso universal: Esto significa que puedes acceder a cualquier variable o función global simplemente escribiendo su nombre, sin necesidad de prefijarlo con window. Por ejemplo, si declaras `let miVariable = "Hola";`, puedes acceder a ella como miVariable o window.miVariable.
- Ventana del navegador: El objeto window representa la ventana del navegador en la que se ejecuta el código JavaScript. Proporciona una amplia gama de propiedades y métodos para interactuar con la ventana, como window.location, window.alert(), window.open(), entre otros.

**¿Qué es `document`?**

- Representación del documento HTML: En JavaScript, document es un objeto global que representa el documento HTML que se está cargando en el navegador.
- Acceso al DOM: A través de document, podemos acceder y manipular todos los elementos de la página HTML, como si fuera un árbol de nodos.

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

  ### Curso de javascript 62 DOM: Nodos, Elementos y Selectores

Metodos que no se utilizan

```js
document.getElementsByTagName("li");
document.getElementsByClassName("card");
document.getElementsByName("nombre");
```

han sido remplazado por 2 metodos nuevos

```js
document.querySelector("#menu");
document.querySelectorAll(".card");
```

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

Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

Learn more at https://developers.google.com/idx/guides/customize-idx-env
