// TODO scrivi lo script
let soluzione1 = document.getElementById("soluzione1");
let soluzione2 = document.getElementById("soluzione2");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
let sol1 = 0;
let delta = 0;
let solRad = 0
let sol2 = 0;
const btnCalcola = document.getElementById("btn-calcola");


btnCalcola.addEventListener("click", () =>{
  let a = parseFloat(aInput.value);
  let b = parseFloat(bInput.value);
  let c = parseFloat(cInput.value);
  delta = ((b**2) - (4*a*c));
  console.log(delta);
  if(delta >= 0){
    solRad = Math.sqrt(delta);
    sol1 = ((-b + solRad) / (2*a));
    console.log(solRad);
    sol2 = ((-b - solRad) / (2*a));
    if(sol1 == sol2){
      soluzione1.textContent = sol1;

    }else{
      soluzione1.textContent = sol1;
      soluzione2.textContent = sol2;
    }


  }else{
    soluzione1.textContent = "Impossibile";
    soluzione2.textContent = " ";
  }


  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = 'black';
  ctx.fillRect(250, 0, 1, 500);
  ctx.fillRect(0, 250, 500, 1);



});