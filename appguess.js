const maxInput = document.getElementById('maxNumber');
const guessInput = document.getElementById('guessInput');
const startGameButton = document.getElementById('startGame');
const submitGuessButton = document.getElementById('submitGuess');
const quitGameButton = document.getElementById('quitGame');
const maxDisplay = document.getElementById('maxDisplay');
let random;
let max;

// Start the game when the "Start Game" button is clicked or Enter is pressed
startGameButton.addEventListener('click', startGame);
maxInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        startGame();
    }
});

function startGame() {
    max = parseInt(maxInput.value);
    if (max) {
        maxDisplay.textContent = max; // Update the displayed max number
        document.getElementById('gameArea').classList.remove('hidden');
        document.getElementById('hint').textContent = '';
        random = Math.floor(Math.random() * max) + 1;
        guessInput.focus(); // Automatically focus on the guess input box
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
    const guess = parseInt(guessInput.value);
    const hint = document.getElementById('hint');
    
    if (isNaN(guess) || guess < 1 || guess > max) {
        alert("Your number is Out of Range!");
        return;
    }

    if (guess === random) {
        hint.textContent = `You are right! Congrats !! The random number was ${random}`;
        // Keep the guessed number in the input box
    } else {
        hint.textContent = guess < random ? "Hint: Your guess was too small. Please try again!" : "Hint: Your guess was too large. Please try again!";
        guessInput.value = ''; // Clear the input box for a new guess
        guessInput.focus(); // Automatically focus on the guess input box
    }
}

// Quit the game when the "Quit Game" button is clicked
quitGameButton.addEventListener('click', function() {
    // Reload the page to reset the game
    location.reload();
});