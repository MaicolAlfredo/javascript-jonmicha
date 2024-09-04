//curso de javascript 62 DOM: Nodos, Elementos y Selectores

//metodos que ya no se utiliza
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//han sido remplazado por 2 metodos nuevos
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card").length);
document.querySelectorAll(".card").forEach((element) => {
  console.log(element);
});
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));






 */

//curso de javascript 63 DOM: Atributos y Data-Attributes

/* console.log(document.documentElement.lang);
otra manera que dice es mejor
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").getAttribute("href"));
console.log(document.querySelector(".link-dom").href);

//¿cómo puedo establecer un nuevo valor? pues con la notacion del punto.
document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "es");
document.querySelector(".link-dom").href = "https://www.google.com";
document
  .querySelector(".link-dom")
  .setAttribute("href", "https://www.google.com");

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");

$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);




*/

//curso de javascript 64 DOM: Estilos y Variables CSS

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//¿Cómo puedo establecer un nuevo valor?
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem"; */

//variables CSS - Custom Properties CSS

/* 
 <style>
      :root{
        --yelow-color:#f7df1e;
        --dark-color:#222;
      }
    </style>
*/

/* const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYelowColor = getComputedStyle($html).getPropertyValue("--yelow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYelowColor;

//¿como podria modificar el valor de una variable css?
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;








 */

//Curso de javascript 65 DOM: Clases CSS
/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList);
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");

//metodo replace, va a remplazar una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList);
//agregar o quitar varias clases, solo la separas por comas.y con remove funciona igual.
$card.classList.add("opacity-80", "sepia");
console.log($card.classList);






*/

//curso de javascript 66 DOM: Texto y HTML

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de objeto del documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>
El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
</mark>
</p>
`;

//no es parte del estandar, se creo para internet explore.
$whatIsDOM.innerText = text;
//textContent es la propiedad estandar de los navegadores.
$whatIsDOM.textContent = text;
//si quiere que el contenido se renderice como codigo html, se usa el metodo innerHTML. 
$whatIsDOM.innerHTML = text;
$whatIsDOM.auterHTML = text; 








*/

//curso de javascript 67 DOM: DOM Traversing:Recorrido del DOM

/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); 













*/

//curso de javascript 68 DOM: Creando Elementos y fragmentos.
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("React"),
  $cards = document.querySelector(".cards");

$img.setAttribute("src", "assets/react.png");
$img.setAttribute("alt", "React");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((mes) => {
  const $li = document.createElement("li");
  $li.textContent = mes;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); 








*/

//curso de javascript 69 DOM: Templates HTML

/* HTML
 <template id="template-card">
      <figure class="card">
        <img />
        <figcaption></figcaption>
      </figure>
    </template>
 */

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "React",
      img: "assets/react.png",
    },
    {
      title: "NextJs",
      img: "assets/nextjs.jpg",
    },
    {
      title: "SQL",
      img: "assets/sql.png",
    },
    {
      title: "Python",
      img: "assets/python.png",
    },
    {
      title: "PHP",
      img: "assets/php.gif",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment); 





*/

//curso de javascript 70 DOM: Modificando Elementos(Old Style)

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="assets/react.png" alt="React"
<figcaption> React</figcaption>
`;
$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]);
$cards.insertBefore($newCard, $cards.firstElementChild);
$cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards); 










*/

//curso de javascript 71 DOM: Modificando Elementos(Cool Style)
/* 
insertAdjacent...
  .insertAdjacentElement (position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin (hermano anterior)
  afterbegin(primer hijo)
  beforeend (ultimo hijo)
  afterend (hermano siguiente)

 */

/*
 */
/* $newCard.innerHTML = `
<img src="assets/react.png" alt="React"
<figcaption> React</figcaption>
`; */

/* let $contentCard = `
<img src="assets/react.png" alt="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card"); */

//$cards.insertAdjacentElement("afterbegin", $newCard);
//$newCard.insertAdjacentHTML("afterbegin", $contentCard);
//$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "React");
//$cards.insertAdjacentElement("afterbegin", $newCard);

/* $cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);
$cards.prepend($newCard);







*/

//curso de javascript 72 DOM: Manejadores de Eventos
/* function holaMundo() {
  alert("Hola Mu
  ndo");
  console.log(event);
} */

//una forma mas correcta
/* const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"); */

//cuando defines un evento como si fuera semantico solo igualas el evento semantico al nombre de la función pero sin los parentesis.
//$eventoSemantico.onclick = holaMundo;

//la limitante que tiene los manejadores semanticos es que por cada evento solamente tiene derecho a asignarle una función.
/* $eventoSemantico.onclick = function (e) {
  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'.
  alert("Hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(event);
}; */

//👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método addEventListener() que nos perimite levantar un Escuchador de Eventos
//const $eventoMultiple = document.getElementById("evento-multiple");
//👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
// 1° Nombre de evento
// 2° Función q se va a ejecutar, pero sin parentesis
//$eventoMultiple.addEventListener("click", holaMundo);
//👇 tmb podemos trabajar con una arrow function
/* $eventoMultiple.addEventListener("click", (e) => {
  //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
  alert(`Hola Manejador de Evento Múltiple`);
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
}); */

//📝NOTA:
//👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento
//👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
//👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
//👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
//👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'

//curso de javascript 73 DOM: Eventos con Parámetros y Remover Eventos
/* const $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`hola ${nombre} 	`);
  console.log(event);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  console.log(e);
  saludar(e.type);
  saludar(e.target);
  saludar(event);
}); */

//la solucion ante de las arrowfunction
/* $eventoMultiple.addEventListener("click", function () {
  saludar()
}); */

//con la arrowfunction se sinplifica
/* $eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("maicol");
}); */

// la caracteristica de una funcion anonima en los eventos es que en el momento en el que se este declarando se esta ejecuntado, digamos se pierde la referencia.Entonces para remover un manejador de eventos, es decir una funcion asociada a un evento esta tiene que estar guardada pues en una funcion puede ser una funcion declarada o expresada.
/* const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); 
















*/

//curso de javascript 74 DOM: Flujo de eventos(burbuja y captura)

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    ` hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

$divsEventos.forEach((div) => {
  //fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, { capture: false, once: true });
});









 */

//curso de javascript 75 DOM: stopPropagation y preventDefault

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    ` hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );

  e.stopPropagation();
}

$divsEventos.forEach((div) => {
  //fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, { capture: false, once: true });
});

$linkEventos.addEventListener("click", () => {
  alert("navegando");
  e.preventDefault();
  e.stopPropagation();
});












 */
//curso de javascript 76 DOM: Delegación de Eventos

/* function flujoEventos(e) {
  console.log(
    ` hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );

  e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("Click e", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("navegando");
    e.preventDefault();
  }
}); 














*/

//curso de javascript 77 BOM: Propiedades y Eventos
/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("****Evento Resize****");

  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("****Evento Scroll****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.clear();
  console.log("****Evento Load****");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.clear();
  console.log("****Evento DOMContentLoaded****");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); 









*/

//curso de javascript 78 BOM:Métodos
//window.alert();
//window.confirm();
//window.prompt();
/* const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventan"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  window.open();
});

$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
}); 









*/

//curso de javascript 79 BOM:Objetos:URL,Historial y navegador

/* console.log("****************Objeto URL(location)****************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
location.reload(); */

/* console.log("**********Objeto Historial (history)**********")
console.log(history);
console.log(history.length);
console.log(history.back());
console.log(history.forward());
console.log(history.go()); */

/* console.log("*************objeto navegador (navigator)*************");
console.log(navigator);
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */
