const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

function popup()
 {
    let popup = document.createElement('div');
    popup.classList.add('popup'); 
    let image = document.createElement('img');
    image.src = 'images/YouWon.PNG';

    let btn = document.createElement('button');
    btn.addEventListener('click', function() {
        document.body.removeChild(popup);
    });
    popup.appendChild(image);
    popup.appendChild(btn);

    document.body.appendChild(popup);
}

console.log();


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.dataset.name

    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = 'Result:'+ checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
/*
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK" ){
      return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
      return( player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
} */

function checkWinner(){
    let result = "You Loose !"
   
    if(player == computer){

      result = "Draw";
   

    }
    if((computer == "ROCK" && player=="PAPER") || (computer == "PAPER" && player== "SCISSORS" )||(computer== "SCISSORS"&& player == "ROCK")){
     popup();
      result = "You Win !";

 
      
    }
    console.log(result)

    return result; 
    }

/*************************************Image d'accueil**************************************** */
document.addEventListener("DOMContentLoaded", function() {
    var accueil = document.getElementById("accueil");

    // Créer une nouvelle image
    var img = new Image();
    img.src = "images/LetsPlay.PNG"; //  chemin de l' image
    img.alt = "Image d'accueil";

    // Ajouter l'image à l'élément d'accueil
    accueil.appendChild(img);

    // Disparaître après 6 seconde (1000 millisecondes)
    setTimeout(function() {
        accueil.style.display = "none";
    }, 6000);

    
});

/**
 images pour les resultats
 */
/*const accueil = document.getElementById("accueil");
*/

