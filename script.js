let computerOptions = ["rock", "scissors", "paper"];
let playerScore = 0;
let computerScore = 0;

const btn = document.querySelector("#play");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissor");
const paperBtn = document.querySelector(".paper");
const form = document.querySelector('form');
const winner = document.querySelector('#winner');
const btnReload = document.querySelector('#reload')

// Här hämtar datorn namnet du knappar in i form rutan och hamnar i en egen H2 tagg.

form.addEventListener('submit', (event)=>{
    event.preventDefault(); //Förhindrar default-beteendet

    const text = document.querySelector('#textInput').value;
    document.querySelector('#name').innerText = text;
    console.log(text);
    form.reset();
})

//Här kommer spel alternativen (sten, sax, påse) i form av knappar. 
//varje knapp har egna If statements.

// STEN //
rockBtn.addEventListener("click", () => {
  console.log("rock");
  const alternativIndex = Math.round(
    Math.random() * (computerOptions.length - 1)
  );
  console.log(computerOptions[alternativIndex]);

  if ("rock" == computerOptions[alternativIndex]) {
    result.innerText = "Oavgjort!";
 
  } else if (computerOptions[alternativIndex] == "paper") {
    result.innerText = 'Du valde: Sten ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    computerScore++;
  } else if (computerOptions[alternativIndex] == "scissors") {
    result.innerText = 'Du valde: Sten ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    playerScore++;
  }
  score.innerText = `Spelare:${playerScore} / Dator:${computerScore}`;

  if(playerScore === 3){
    winner.innerText = 'Grattis du vann!';
  }
  else if(computerScore === 3){
    winner.innerText = 'Datorn vann!';
  }
});

// SAX //
scissorsBtn.addEventListener("click", () => {
  console.log("scissors");
  const alternativIndex = Math.floor(Math.random() * computerOptions.length);
  console.log(computerOptions[alternativIndex]);

  if ("scissors" == computerOptions[alternativIndex]) {
    result.innerText = "Oavgjort!";
  } else if (computerOptions[alternativIndex] == "paper") {
    result.innerText = 'Du valde: Sax ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    playerScore++;
  } else if (computerOptions[alternativIndex] == "rock") {
    result.innerText = 'Du valde: Sax ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    computerScore++;
  }
  score.innerText = `Spelare:${playerScore} / Dator:${computerScore}`;

  if(playerScore === 3){
    winner.innerText = 'Grattis du vann!';
  }
  else if(computerScore === 3){
    winner.innerText = 'Datorn vann!';
  }
});

// PÅSE //
paperBtn.addEventListener("click", () => {
  console.log("paper");
  const alternativIndex = Math.round(
    Math.random() * (computerOptions.length - 1)
  );
  console.log(computerOptions[alternativIndex]);

  if ("paper" == computerOptions[alternativIndex]) {
    result.innerText =  "Oavgjort!";
  } else if (computerOptions[alternativIndex] == "rock") {
    result.innerText = 'Du valde: Påse ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    playerScore++;
  } else if (computerOptions[alternativIndex] == "scissors") {
    result.innerText = 'Du valde: Påse ' + '/ Datorn valde: ' + computerOptions[alternativIndex];
    computerScore++;
  }
  score.innerText = `Spelare:${playerScore} / Dator:${computerScore}`;

  if(playerScore === 3){
    winner.innerText = 'Grattis du vann!';
  }
  else if(computerScore === 3){
    winner.innerText = 'Datorn vann!';
  }
  
});

// OMSTARTS KNAPP //
btnReload.addEventListener('click', () =>{
  location.reload()
})