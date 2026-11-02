// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".
const itemInput = document.getElementById("item");
const btnAggiungi = document.getElementById("btn-aggiungi");
let listaItem = document.getElementById("lista");

btnAggiungi.addEventListener("click", () =>{
  if(itemInput.value != ""){
    let nuovodiv = document.createElement("div");
    nuovodiv.textContent = itemInput.value;
    listaItem.appendChild(nuovodiv);
    let btn = document.createElement("div");
    btn.textContent = "Rimuovi";
    nuovodiv.appendChild(btn);
    itemInput.value = "";
    btn.addEventListener("click", () => {
      nuovodiv.remove();
    });
  }else{
    alert("Attenzione l input e vuoto");
    
  }










});
