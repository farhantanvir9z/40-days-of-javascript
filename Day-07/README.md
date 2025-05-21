# Day-07 Tasks complete!

## 1. Change the RPS Project
Change the if-else to switch-case as asked in the video(at 15:42).

```js
function rpsGame() {
  const userInputPrompt = prompt("Choice The option rock, paper, scissor");
  const userChoice = userInputPrompt  ?  userInputPrompt.toLowerCase() : "" ;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissor";
      break;
  }
  console.log(`User choice is ${userChoice} & computer choice is ${computerChoice}`);
  let announcment;
  if (
    (userChoice === "rock" && computerChoice === "scissor") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissor" && computerChoice === "paper")
    ) {
      announcment = "User is win!";
    } else if (userChoice === computerChoice) {
      announcment = "The game is Tie!"
    } else if (
       (computerChoice === "rock" && userChoice === "scissor") || (computerChoice === "paper" && userChoice === "rock") || (computerChoice === "scissor" && userChoice === "paper")
      ) {
        announcment = "Computer is win!";
      } else {
        announcment = "Invalid Input";
      }
  console.log(announcment);
  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    setTimeout(rpsGame, 1000);
  }
}

rpsGame();
```
## 2. Build the Secret Number Guessing Game
Create the project as explained in the video.

```js
function secretNumberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let userInputPrompt, userInput;
  let attemps = 1;
  
  while (userInput !== secretNumber) {
   userInputPrompt = prompt("Guess the number (1-10)");
   userInput = parseInt(userInputPrompt);
    if (secretNumber < userInput) {
      alert("Too high!");
    } else if (secretNumber > userInput) {
      alert("Too low!");
    } else if (secretNumber === userInput) {
      alert(`Congratulation, You guess the right number in ${attemps} attemps.`);
      break;
    };
  attemps++;
  };
  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    secretNumberGuessingGame();
  }
}
// start the Game
secretNumberGuessingGame();
```