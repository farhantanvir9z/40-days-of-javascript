import {questionsQty, quizData} from "./questions.js"
import {startTimer, score} from "./quizLogic.js"

var answer = null;
const nextBtn = document.querySelector(".nextBtn");
const scoreShower = document.querySelector(".score");
const timer = document.querySelector("time");
const questionElem = document.querySelector(".question");
const optionsElem = document.querySelector(".options");

function createQuiz(quizNo) {
    if (quizNo >= questionsQty) return;

    const { question, options } = quizData[quizNo];

    questionElem.innerText = question;
    optionsElem.innerHTML = "";

    options.forEach(option => {
        const li = document.createElement("li");
        li.classList.add("option");
        li.innerText = option;
        optionsElem.appendChild(li);
    });
    nextBtn.disabled = true;
    answer = null;
    startTimer();
}

function showFinalScore() {
    questionElem.innerText = "Quiz Finished 🎉";
    optionsElem.innerHTML = "";
    timer.innerText = "00";
    nextBtn.disabled = true;
    scoreShower.innerText = `Final Score: ${score} / ${questionsQty}`;
}

export {
    nextBtn,
    scoreShower,
    timer,
    answer,
    questionElem,
    optionsElem,
    createQuiz,
    showFinalScore
};
