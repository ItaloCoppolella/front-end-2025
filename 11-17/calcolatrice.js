function eseguiCalcoli() {
  // Prende i valori dai form
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  // se a & b sono nulli non esegue i calcoli
  
  if (a == "" || b == "") {
    alert("Hai lasciato i campi vuoti!");
  } else {
    function somma() {
      return a + b;
    }

    function sottrazione() {
      return a - b;
    }

    function prodotto() {
      return a * b;
    }

    function divisione() {
      if (a < b) {
        alert("Il dividendo non può essere inferiore al divisore!");
      } else {
        return a / b;
      }
    }

    // Risultati in console.log
    console.log("La somma è", somma());
    console.log("La sottrazione è", sottrazione());
    console.log("Il prodotto è", prodotto());
    console.log("La divisione è", divisione());
  }
}
