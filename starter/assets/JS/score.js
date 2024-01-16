
// Save score in local storage along with user's initials
function saveHighscore() {
  var name = initialsInput.value.trim();
  if (name !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      name: name
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}

// Save user's score after pressing 'enter'
function checkforEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

initialsInput.onkeyup = checkforEnter;

// Rank previous scores in order by retrieving scores from local storage
function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.name + "-" + score.score;
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

// Clear previous scores when user clicks 'Clear Highscores'
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  printHighscores();
  window.location.reload();
}

document.getElementById("clear").addEventListener("click", clearHighscores)
