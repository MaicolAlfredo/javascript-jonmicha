//curso javascript 56 Propiedades dinamicas de los objetos

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuario = {
  [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuarios);

const usuarios = ["jon", "irma", "dalcely", "kala", "kenai"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
