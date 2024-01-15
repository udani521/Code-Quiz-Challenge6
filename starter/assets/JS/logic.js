
// Get references to the DOM elements
const startButton = document.getElementById('start');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const feedback = document.getElementById('feedback');
const timeDisplay = document.getElementById('time');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
let time = 60; // Set the initial time for the quiz

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
  const timerInterval = setInterval(function() {
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
  // Remove the 'hide' class from the questions div
  questionsDiv.classList.remove('hide');
 
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.title;
  choicesDiv.innerHTML = '';
  currentQuestion.choices.forEach(function(choice) {
   const button = document.createElement('button');
   button.textContent = choice;
   button.addEventListener('click', function() {
    if (choice === currentQuestion.answer) {
     feedback.textContent = 'Correct!';
    } else {
     feedback.textContent = 'Wrong!';
     time -= 10; // Subtract 10 seconds for wrong answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
     showQuestion();
    } else {
     endQuiz();
    }
   });
   choicesDiv.appendChild(button);
  });
 }

// Function to end the quiz
function endQuiz() {
  questionTitle.textContent = 'All done!';
  choices.innerHTML = '';
  feedback.textContent = '';
  endScreen.style.display = 'block';
  finalScore.textContent = time;
}

// Event listener for the start button
startButton.addEventListener('click', startQuiz);





