// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

////// PSEUDOCODICE /////
// al click sul bottone si crea una nuova griglia quadrata con 100 celle quadrate dentro,
// ogni riga deve contenere 10 celle
// ogni cella deve contenere un numero da 1 a 100 in modo progressivo,
// al click sulla cella, stessa cambia il colore in azzurro e rilascia un messaggio in console col numero clickato.

const btn = document.getElementById("bottone");

btn.addEventListener("click", function () {
  for (let i = 1; i <= 100; i++) {
    // creo l'elemento html div
    const box = document.createElement("div");
    // inseriamo un numero in un div
    box.innerHTML = i;
    // agiungo la classe box al div
    box.classList.add("box");
    const bomb = document.createElement("bomb");
    // se la classe bomb include i
    if (bombs.includes(i)) {
      // allora aggiungo la classe bomb
      box.classList.add("bomb");
    }
    // preso div col id grid
    const grid = document.getElementById("grid");
    // inserito il box dentro il grid
    grid.append(box);
    // aggiungo eventlistener al click
    box.addEventListener("click, boxClick");
  }
});
function boxClick() {
  const randomNumber = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  if (this.classList.contain("bomb")) this.classList.add("red");
  else this.classList.add("green");
  return boxClick;
  console.log(randomNumber);
}
