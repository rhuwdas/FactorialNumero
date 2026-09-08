
function factorialFor(n) {
  // El factorial de 0 o 1 es 1
  if (n === 0 || n === 1) return 1;
  
  let resultado = 1;
  
  // Multiplica desde 2 hasta el número n
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

console.log(factorialFor(5)); // Resultado: 120
console.log(factorialFor(0)); // Resultado: 1