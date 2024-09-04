// curso javascript 53
//const iterable = [1, 2, 3, 4, 5];
//const iterable = new Set([1, 3, 3, 3, 2, 3, 4, 5, 6, 6]);
//const iterable = "hola mundo";
const iterable = new Map([
  ["nombre", "luis"],
  ["edad", 25],
]);

//accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
