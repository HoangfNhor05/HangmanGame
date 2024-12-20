const wordDisplay = document.querySelector(".word-display");
const keyBoardDiv = document.querySelector(".keyBoard");
const guessedText = document.querySelector(".guesses-text b");
const hangmanImg = document.querySelector(".hangman-box img");
const gamemodal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetter = [], wrongGuessCount = 0;
const maxGuess = 6;

const resetGame = () => {
  correctLetter = [];
  wrongGuessCount = 0;
  hangmanImg.src = `img/hangman-${wrongGuessCount}.svg`;
  guessedText.innerHTML = `${wrongGuessCount} / ${maxGuess}`
  keyBoardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
  wordDisplay.innerHTML = currentWord.split("").map(() => ` <li class="letter"></li> `).join("");
  gamemodal.classList.remove("show");
}

// selecting a random word and hint from the wordlist
const getRamdomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
  currentWord = word;
  document.querySelector(".hint-text b").innerHTML = hint;
  resetGame();
}

const GameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory ? `You found the word:` : `The correct word was: `;
    gamemodal.querySelector("img").src = `img/${isVictory ? 'victory' : 'lost'}.gif`;
    gamemodal.querySelector("h4").innerHTML = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
    gamemodal.querySelector("p").innerHTML = `${modalText} <b> ${currentWord} </b>`;
    gamemodal.classList.add("show");
  }, 200);
}

const initGame = (buttons, clickedLetter) => {

  // checking if clickedLetter is exist on the currentWord
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetter.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    })
  }
  else {
    wrongGuessCount++;
    hangmanImg.src = `img/hangman-${wrongGuessCount}.svg`;
  }
  buttons.disabled = true;
  guessedText.innerHTML = `${wrongGuessCount} / ${maxGuess}`

  if (wrongGuessCount === maxGuess) return GameOver(false);
  if (correctLetter.length == currentWord.length) return GameOver(true);
}
//creating keyboard buttons 
for (let i = 97; i < 122; i++) {
  const buttons = document.createElement("button");
  buttons.innerHTML = String.fromCharCode(i);
  keyBoardDiv.appendChild(buttons);
  buttons.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRamdomWord();
playAgainBtn.addEventListener("click", getRamdomWord);