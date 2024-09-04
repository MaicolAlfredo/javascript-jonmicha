function factorial(n) {
  // Caso base: si n es 0 o 1, el factorial es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Llamada recursiva: multiplicamos n por el factorial de n-1
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120 (5! = 5 * 4 * 3 * 2 * 1)

