// const max = prompt("Enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess == random){
//         console.log("You are right! Congrats !! random number was ", random);
//         break;
//     }else if (guess < random){
//         guess = prompt("Hint: Your guess was to small. Please try again!");
//     } else {
//         guess = prompt("Hint: Your guess was to large. Please try again!");
//     }
// }


const maxInput = document.getElementById('maxNumber');
const guessInput = document.getElementById('guessInput');
const startGameButton = document.getElementById('startGame');
const submitGuessButton = document.getElementById('submitGuess');
const quitGameButton = document.getElementById('quitGame');
const maxDisplay = document.getElementById('maxDisplay');
let random;

// Start the game when the "Start Game" button is clicked or Enter is pressed
startGameButton.addEventListener('click', startGame);
maxInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        startGame();
    }
});

function startGame() {
    const max = maxInput.value;
    if (max) {
        maxDisplay.textContent = max; // Update the displayed max number
        document.getElementById('gameArea').classList.remove('hidden');
        document.getElementById('hint').textContent = '';
        random = Math.floor(Math.random() * max) + 1;
    }
}

// Submit the guess when the "Submit Guess" button is clicked or Enter is pressed
submitGuessButton.addEventListener('click', submitGuess);
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitGuess();
    }
});

function submitGuess() {
    const guess = guessInput.value;
    const hint = document.getElementById('hint');
    if (guess == "quit") {
        hint.textContent = "User quit the game.";
        document.getElementById('gameArea').classList.add('hidden');
    } else if (guess == random) {
        hint.textContent = `You are right! Congrats !! The random number was ${random}`;
    } else if (guess < random) {
        hint.textContent = "Hint: Your guess was too small. Please try again!";
    } else {
        hint.textContent = "Hint: Your guess was too large. Please try again!";
    }
}

// Quit the game when the "Quit Game" button is clicked
quitGameButton.addEventListener('click', function() {
    document.getElementById('hint').textContent = "User quit the game.";
    document.getElementById('gameArea').classList.add('hidden');
});
