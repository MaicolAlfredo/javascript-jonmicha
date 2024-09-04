const json = {
  cadena: "Jon",
  numero: "25",
  booleano: true,
  arreglo: ["ajedrez", "voleibol", "programación"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com",
  },
  nulo: null,
};

console.log(json);
console.log(JSON);
console.log(JSON.parset("{}"));
console.log(JSON.parset("[1,2,3]"));
console.log(JSON.parset("true"));
console.log(JSON.parset("19"));
console.log(JSON.parset("'Hola Mundo'"));

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log(JSON.stringify(json));
