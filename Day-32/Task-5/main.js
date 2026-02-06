import {
    questionNo,   
    intervalId,   
    updateQuiz,   
    checkAnswer   
} from "./quizLogic.js";

import {
    nextBtn,   
    optionsElem,  
    createQuiz,   
} from "./ui.js";

var answer = null;
optionsElem.addEventListener("click", e => {
  if (e.target.tagName !== "LI") return;

  answer = e.target.innerText;
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  if (answer === null) return;

  clearInterval(intervalId);
  checkAnswer(answer);
  setTimeout(updateQuiz, 3000);
});

createQuiz(questionNo);
