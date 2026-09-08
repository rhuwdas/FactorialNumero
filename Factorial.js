function factorial(n) {
  // Caso base: si n es 0 o 1, el factorial es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Caso recursivo: n por el factorial de n - 1
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Resultado: 120



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
