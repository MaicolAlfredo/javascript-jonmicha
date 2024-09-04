const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona. `
      );
    }

    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}" sólo acepta letras y espacio en blanco `
      );
    }
    obj[prop] = valor;
  },
};

const jon = new Proxy(persona, manejador);
//jon.nombre = "jon18";
jon.nombre = "jon";
jon.apellido = "mircha";
jon.edad = 35;
jon.twitter = "@jonmicha";
console.log(jon);

console.log(persona);
