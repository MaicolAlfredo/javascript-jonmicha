/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */
function contarCaracter(cadena = "") {
  if (!cadena) {
    console.warn("no ingresaste ninguna cadena");
  } else {
    console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres `);
  }
}
/* contarCaracter();
contarCaracter("hola mundo"); */

//pero lo mejor sería
const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("no ingresaste ninguna cadena")
    : console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres `);

//contarCaracteres("hola mundo");

/*2) Programa una función que te devuelva el texto recortado según el
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá
"Hola".*/
const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("no ingresaste el texto")
    : longitud === undefined
    ? console.warn("no ingresaste la longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

/* recortarTexto();
recortarTexto("hola hola");
recortarTexto("", 5);
recortarTexto("hola mundo", 4); */

/*3) Programa una función que dada una String te devuelva un Array de
textos separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá
['hola', 'que', 'tal'].*/

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("no ingresaste el texto")
    : separador === undefined
    ? console.warn("no ingresaste el caracter separador")
    : console.info(cadena.split(separador));

/* cadenaAArreglo("hola mundo", "");
cadenaAArreglo();
cadenaAArreglo("hola que tal", " "); */

/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola
Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("no ingresaste un texto");

  if (veces === undefined)
    return console.warn("no ingresaste el número de veces a repetir el texto");

  if (veces === 0) console.error("El numero de veces no puede ser 0");

  if (Math.sign(veces) === -1)
    console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) {
    console.info(`${texto},${i}`);
  }
};

/* repetirTexto("hola mundo", 3);
repetirTexto("hola mundo", 0);
repetirTexto("hola mundo", -20);
repetirTexto("", 20);
repetirTexto("hola mundo");
 */

//Curso de javascript 36. Ejercicios de Lógica de Programación

/*5) Programa una función que invierta las palabras de una cadena de texto, pe.
miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("no ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

/* invertirCadena();
invertirCadena("hola mundo"); */

/*6) Programa una función para contar el número de veces que se repite
una palabra en un texto largo, pe. miFuncion("hola mundo adiós mundo",
"mundo") devolverá 2.*/
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("no ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces.`);
};

/* textoEnCadena();
textoEnCadena("", "mundo");
textoEnCadena("hola mundo adiós mundo");
textoEnCadena(
  "hola mundo adiós mundo yolo mundo holi mundo chao mundo",
  "mundo"
); */

/*7) Programa una función que valide si una palabra o frase dada, es un
palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
devolverá true.*/
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();

  let alReves = palabra.split("").reverse().join("");
  return palabra === alReves
    ? console.info(
        `Si es palíndromo, Palabra original ${palabra}, Palabra al reves ${alReves}`
      )
    : console.info(
        `No es palindromo, palara original ${palabra}, Palabra al reves ${alReves}`
      );
};

/* palindromo();
palindromo("hola mundo");
palindromo("salas"); */

/*8) Programa una función que elimine cierto patrón de caracteres de un
texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1,
2, 3, 4 y 5.*/
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

/* eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); */

//curso de javasript 37. Ejercicios de Lógica de Programación ( 4 / 10 )
//9) Programa una función que obtenga un número aleatorio entre 501 y 600.
const aliatorio = () => console.info(Math.round(Math.random() * 100 + 500));
//aliatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un número `);

  numero = numero.toString();

  let alRevez = numero.split().reverse().join();

  return numero === alRevez
    ? console.info(
        `Sí es capicua, Número original ${numero},Número al revés ${alRevez}`
      )
    : console.info(
        `No es capícua, Número original ${numero}, Numero al reves ${alRevez}`
      );
};
/* capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
capicua(212.212); */

/* 11) Programa una función que calcule el factorial de un número (El
factorial de un entero positivo n, se define como el producto de todos los
números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un Número");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es número`);

  if (numero === 0) return console.error("EL Número no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
};

/* factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5); */

//curso de javasript 38. Ejercicios de Lógica de Programación ( 5 / 10 )
/* 12) Programa una función que determine si un número es primo (aquel que solo
es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un Número");

  if (typeof numero !== "number")
    return console.error(`EL valor "${numero}" ingresado, No es un número`);

  if (numero === 0) return console.error("El numero no puede ser 0");

  if (numero === 1) return console.error("El número no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");
  
  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El número ${numero},NO es primo `)
    : console.log(`El número ${numero}, SÍ es primo`);
};
/* numeroPrimo();
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200); */
