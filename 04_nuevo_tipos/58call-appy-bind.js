//this es windows
console.log(this);

this.lugar = "Contexto Global";

function saludar() {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar} `);
}

saludar();

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Jon");
saludar.call(null, "Hola", "Jon");
saludar.call(this, "Hola", "Jon");
//apply utiliza arreglo
saludar.apply(obj, ["Adios", "Mircha"]);
saludar.apply(null, ["Adios", "Mircha"]);
saludar.apply(this, ["Adios", "Mircha"]);

this.nombre = "window";

const persona = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hola ${this.nombre} `);
  },
};

persona.saludar();

const otraPersona = {
  //saludar: persona.saludar.bind(this),
  saludar: persona.saludar.bind(persona),
};

otraPersona.saludar();
