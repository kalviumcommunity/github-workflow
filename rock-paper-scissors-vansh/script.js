// script.js
let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}

function playRound(playerChoice) {
  if (round > 5) return;

  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);
  let resultText = `You chose ${playerChoice}, Computer chose ${computerChoice}. `;

  if (winner === "player") {
    playerScore++;
    resultText += "You win this round!";
  } else if (winner === "computer") {
    computerScore++;
    resultText += "Computer wins this round!";
  } else {
    resultText += "It's a tie!";
  }

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("round").textContent = round;
  document.getElementById("result").textContent = resultText;

  round++;

  if (round > 5) {
    let finalMessage = '';
    if (playerScore > computerScore) {
      finalMessage = "🎉 Congratulations! You Won The Game!";
    } else if (computerScore > playerScore) {
      finalMessage = "💻 Game Over! Computer Wins The Game!";
    } else {
      finalMessage = "🤝 It's a Tie Game! Try Again!";
    }
    document.getElementById("result").textContent += `\n${finalMessage}`;
    document.getElementById("reset-btn").classList.remove("hidden");
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("round").textContent = "1";
  document.getElementById("result").textContent = "";
  document.getElementById("reset-btn").classList.add("hidden");
}
