function checkGuess() {
    var guess = parseInt(document.getElementById("guessInput").value);
    var randomNumber = Math.floor(Math.random() * 100) + 1;
  
    var resultText = document.getElementById("result");
    if (guess === randomNumber) {
      resultText.textContent = "Congratulations! You guessed the correct number!";
      resultText.style.color = "green";
    } else if (guess < randomNumber) {
      resultText.textContent = "Too low! Try a higher number.";
      resultText.style.color = "red";
    } else {
      resultText.textContent = "Too high! Try a lower number.";
      resultText.style.color = "red";
    }
  }
  