// Get references to the DOM elements


var questionTitle = document.getElementById('question-title');
var choicesEl = document.getElementById('choices');
var feedback = document.getElementById('feedback');
var timeDisplay = document.getElementById('time');
var startScreenEl = document.getElementById('start-screen');
var endScreen = document.getElementById('end-screen');
var finalScoreEl = document.getElementById('final-score');
var initialsEl = document.getElementById('initials');

var questionsDiv = document.getElementById('questions');
var choicesDiv = document.getElementById('choices');
var clearHighScoresButtonEl = document.getElementById('clear');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');

//define variables
let currentQuestionIndex = 0;
let time = 60; // Set the initial time for the quiz
let answers = [];
numberOfQuestions = questions.length;



// Function to start the quiz
function startQuiz() {
  startButton.style.display = 'none';
  endScreen.style.display = 'none';
  timeDisplay.textContent = time;
  startTimer();
  showQuestion();
}

// Function to start the timer
function startTimer() {
  var timerInterval = setInterval(function() {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}



// Function to display the current question
function showQuestion() {
    startScreenEl.classList.add("hide"); // hides start screen
  
  questionsDiv.classList.remove('hide');  // Remove the 'hide' class from the questions div
 
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.title;
  choicesDiv.innerHTML = '';
  currentQuestion.choices.forEach(function(choice) {
   var button = document.createElement('button');
   button.textContent = choice;
   button.addEventListener('click', function() {
    if (choice === currentQuestion.answer) {
     feedback.textContent = 'Correct!';
     time +=5; //add 5 points for correct answer
    } else {
     feedback.textContent = 'Wrong!';
     time -= 10; // Subtract 10 points for wrong answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
     showQuestion();
    } else {
     //endQuiz();
    }
   });
   choicesDiv.appendChild(button);
  });
 }

 // Function to end the quiz
function endQuiz() {
  questionTitle.textContent = '';
  choicesEl.innerHTML = '';
  feedback.textContent = 'Quiz is Over!';
  endScreen.style.display = 'block';
  finalScoreEl.textContent = time;
  saveScore();
  //console.log(endQuiz)
}
// Event listener for the start button
document.addEventListener("DOMContentLoaded", function() {
  var startButton = document.getElementById('start');
  if (startButton) {
    startButton.addEventListener("click", function(event) {
      startQuiz();  // Call the startQuiz function when the start button is clicked
    });
  }
});