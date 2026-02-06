import {timer, createQuiz, showFinalScore, scoreShower, optionsElem} from "./ui.js"

import {quizData, questionsQty} from "./questions.js"
let questionNo = 0;
let score = 0;
let time = 20;
let intervalId = null;

function startTimer() {
  clearInterval(intervalId);
  time = 20;
  timer.innerText = time; 

  intervalId = setInterval(() => {
    time--;               
    timer.innerText = time; 

    if (time === 0) {
      clearInterval(intervalId);
      autoSubmit();      
    }
  }, 1000);
}

function autoSubmit() {
  checkAnswer(null);
  setTimeout(updateQuiz, 3000);
}

function updateQuiz() {
  questionNo++; 

  if (questionNo >= questionsQty) {
    showFinalScore(); 
    return;
  }

  createQuiz(questionNo);
}


function updateScore() {
  score++;
  scoreShower.innerText = `Score: ${score}`;   
}

function checkAnswer(selectedAnswer) {
  const { correctAnswer } = quizData[questionNo];

  const options = [...optionsElem.children]; 
  const correctElem = options.find(opt => opt.innerText === correctAnswer);
  correctElem.classList.add("correct");      

  if (selectedAnswer) {
    const selectedElem = options.find(opt => opt.innerText === selectedAnswer);

    if (selectedAnswer === correctAnswer) {
      updateScore();                         
    } else {
      selectedElem.classList.add("wrong")
    }
  }
}

export {
	questionNo,
	score,
	time,
	intervalId,
	startTimer,
	autoSubmit,
	updateQuiz,
	updateScore,
	checkAnswer
}