## curso de javascript 63 DOM: Atributos y Data-Attributes

Sí, algunos desarrolladores utilizan el símbolo "$" al principio de los nombres de variables para indicar que la variable hace referencia a un elemento del DOM (Document Object Model).

No es obligatorio y no afecta la funcionalidad del código, pero sirve como una convención para mejorar la legibilidad y organización. De esta manera, al leer el código, se puede identificar rápidamente qué variables almacenan elementos del DOM.

`const $linkDOM = document.querySelector(".link-dom");`

¿Por qué usar noopener?

Cuando se utiliza target="\_blank" para abrir un enlace en una nueva pestaña, la nueva pestaña tiene acceso al objeto window de la página original a través de la propiedad window.opener. Esto puede ser un riesgo de seguridad, ya que la nueva pestaña podría usar JavaScript para manipular la página original.

Al agregar rel="noopener" al enlace, se previene q

`$linkDOM.setAttribute("rel", "noopener");`

**Data-Attributes**
Todos los data attributes de un elemento HTML se guardan en una colección JavaScript llamada dataset.

¿Qué son los data attributes?

Son atributos HTML personalizados que comienzan con data-. Se utilizan para almacenar información extra sobre un elemento que no tiene una representación visual directa en la página.

## Curso de javascript 72 DOM: Manejadores de Eventos

Los Eventos
👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario
y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se
cumplan algunas condiciones.
👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event
Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
👉 Hay 3 maneras de definir los Eventos en JS :
//1️⃣COMO ATRIBUTO DEL HTML
//👀 Muy importante:
/*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
*👉 Cuando una función se convierte en un Event Handler, es decir una función que se
ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en
sí, y eso lo podemos acceder con la palabra reservada 'event'
\*/
function holaMundo(){
alert('Holaaa Mundo')
console.log(event) //👈 con esto en la consola, se desencadena un tipo de Objeto
MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy
importantes: type y target.
//👉 type.- es el tipo de evento q se desencadeno
//👉 target.- es el elemento que origino el evento
//👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho
elemento y los q estan en null son eventos q no tienen definida dicha función en dichos
eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo

//2️⃣COMO MANEJADOR SEMÁNTICO
//👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la
vamos definiendo
//👉 cuando definamos un evento como semántico igualamos el evento semántico al
nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a
ejecutar
const $eventoSemantico = document.getElementById('evento-semantico')
$eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al
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
.addEventListener() que nos perimite levantar un Escuchador de Eventos
const $eventoMultiple = document.getElementById('evento-multiple')
//👇 este método .addEventListener() recibe varios parámetros, pero sólo nos
enfocaremos en 2:
// 1° Nombre de evento
// 2° Función q se va a ejecutar, pero sin parentesis
$eventoMultiple.addEventListener('click', holaMundo)
//👇 tmb podemos trabajar con una arrow function
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

## Curso de javascript 106: AJAX:Objeto XMLHttpRequest

Paso a seguir

1. Instanciar el objeto XMLHttpRequest().
   `const xhr = new XMLHttpRequest() `
   
2. Asignarle el o los eventos que vallamos estar manipulando de la pelicion, de hecho la logica de la programación va ir en esa callback.

   ` xhr.addEventListener("readystatechange", (e) => {})`
3. Abrir la petición, establecer el metodo en el que lo vamos hacer y el recurso o la url o el endpoint tambien se suele conocer cuando se habla de APIs.
   `xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); `
4. Finalmente enviar la petición con el metodo send().

   `xhr.send() `


Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

Learn more at https://developers.google.com/idx/guides/customize-idx-env