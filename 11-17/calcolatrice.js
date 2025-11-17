let a = Number(prompt("Inserisci il primo numero"));
let b = Number(prompt("Inserisci il secondo numero"));

function somma(a, b) {
  return a + b;
}

function sottrazione(a, b) {
  return a - b;
}

function prodotto(a, b) {
  return a * b;
}

function divisione(a, b) {
  return a / b;
}

console.log(somma(a, b));
console.log(sottrazione(a, b));
console.log(prodotto(a, b)); 
console.log(divisione(a, b));