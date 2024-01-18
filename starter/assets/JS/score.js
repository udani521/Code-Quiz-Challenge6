

function saveScore(){ //saves score
  //updates local storge to current score
  finalScore = parseInt(localStorage.getItem("final-score")); //sets score total
  //console.log(finalScore); //logs score total
};

function displayScore(){ //displays score
  questionsEl.classList.add("hide"); //hides questions
  endScreenEl.classList.remove("hide"); //shows end screen
  finalScoreEl.textContent = finalScore; //displays score
  //displays score on screen in text section
};
//-----------initials progression-----------//
let highscores = []; //create empty array

function saveInitials() {
  let initials = initialsEl.value;
  let score = finalScoreEl.textContent; // Assuming finalScoreEl contains the final score

  let highscores = JSON.parse(localStorage.getItem('highscores')) || []; // Retrieve existing high scores or initialize as empty array
  highscores.push({ initials: initials, score: score }); // Add new initials and score to the highscores array
  localStorage.setItem('highscores', JSON.stringify(highscores)); // Save the updated highscores array to local storage
}

function displayHighScores() {
  let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  let highscoresList = document.getElementById('highscores');

  // Clear previous high scores
  highscoresList.innerHTML = '';

  // Display each high score and initials
  highscores.forEach(function(entry) {
    let listItem = document.createElement('li');
    listItem.textContent = entry.initials + ' - ' + entry.score;
    highscoresList.appendChild(listItem);
  });
}
document.addEventListener("DOMContentLoaded", function() {
  displayHighScores();
});
// Clear previous scores when user clicks 'Clear Highscores'
function clearHighscores() {
  window.localStorage.removeItem("highscores");
 
  window.location.reload();
}

document.addEventListener("click", function(event) {
  if (event.target.id === "highscores") {
    clearHighscores();
  }
});

const clearButton = document.getElementById("clear");
if (clearButton) {
  clearButton.addEventListener("click", clearHighscores);
}

//-----------game reset-----------//
function resetGame(){ //resets game
finalScore = 0; //sets score to 0
localStorage.setItem("score", 0);
initialsEl = ""; //sets initials to empty
currentQuestionIndex = 0; //sets current question index to 0
answers = []; //sets answers to empty
timeLeft = 60; //sets time left to 60
};
//add event listener for submit button to save initials and save score
document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById('submit');
  submitButton.addEventListener("click", function(event) {
    saveInitials();
  });
});
