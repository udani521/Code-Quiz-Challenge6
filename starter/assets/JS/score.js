
 // Get references to the DOM elements
const highscoresList = document.getElementById('highscores');
const clearButton = document.getElementById('clear');

// Function to display high scores
function displayHighscores() {
  // Retrieve high scores from local storage
  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  highscoresList.innerHTML = '';
  highscores.forEach(function(score) {
    const li = document.createElement('li');
    li.textContent = `${score.initials}: ${score.score}`;
    highscoresList.appendChild(li);
  });
}

// Function to clear high scores
function clearHighscores() {
  localStorage.removeItem('highscores');
  displayHighscores();
}

// Event listener for the clear button
clearButton.addEventListener('click', clearHighscores);

// Display high scores when the page loads
displayHighscores();






