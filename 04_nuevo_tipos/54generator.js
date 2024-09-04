function* iterable() {
  yield "hola";
  console.log("hola consola");
  yield "hola2";
  console.log("Seguimos con más intrucciones de nuestro codigo");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

//elevación al cuadrado
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("Inicia Generator");
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  yield cuadrado(0);
  console.log("Termina Generator");
}

let gen = generador();
for (y of gen) {
  console.log(y);
}
