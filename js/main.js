import {
  extractNumber,
  createQuestionsArray,
  getQuestionById,
  formatCorrectAnswer,
  formatIncorrectAnswer,
  disableThisElement,
  removeDisableOfThisElement,
} from "./utility.js";

import { questionsData } from "../db/db.js";

const modalBtns = document.querySelector(".modal-buttons");
const mainContainer = document.querySelector(".main");
const startBtn = document.querySelector(".start-btn");
const questionsNumberSelected = document.querySelector("#inputGroupSelect");
const spanScore = document.querySelector(".user-score");
const questionTrack = document.querySelector(".question-track");

// --- Global Variables
const TOTAL_DATABASE_QUESTIONS = questionsData.length;
export let TOTAL_EXAM_QUESTIONS = questionsNumberSelected.value;
let ARRAY_OF_QUESTION_INDEX = [];
let CURRENT_QUESTION_INDEX = 0;
let CURRENT_QUESTION = {};
let USER_SCORE = 0;

startBtn.addEventListener("click", (event) => {
  mainContainer.classList.add("active");
});

modalBtns.addEventListener("click", (event) => {
  const button = event.target.name;
  if (button === "exit" || button === "continue") {
    mainContainer.classList.remove("active");
  }
  if (button === "continue") {
    TOTAL_EXAM_QUESTIONS = extractNumber(questionsNumberSelected.value);

    //If user selected the number of questions
    if (TOTAL_EXAM_QUESTIONS !== -1) {
      ARRAY_OF_QUESTION_INDEX = createQuestionsArray(
        TOTAL_DATABASE_QUESTIONS,
        TOTAL_EXAM_QUESTIONS
      );
      spanScore.textContent = `Acertos: ${USER_SCORE}/${TOTAL_EXAM_QUESTIONS}`;
      questionTrack.textContent = `Pregunta 1 de 5`;
      var section = document.querySelector(".home");
      const cardContainer = document.querySelector(".card-container");
      section.style.display = "none";
      cardContainer.style.display = "";

      CURRENT_QUESTION_INDEX++;
      trackTotalQuestions(CURRENT_QUESTION_INDEX);
    }
  }
});

//If any change update the total value
questionsNumberSelected.addEventListener("change", (event) => {
  TOTAL_EXAM_QUESTIONS = extractNumber(event.target.value);
});

function trackTotalQuestions(questionNumber) {
  const spanCurrentQuestionNumber = document.querySelector(".question-track");
  spanCurrentQuestionNumber.textContent = `${questionNumber} de ${TOTAL_EXAM_QUESTIONS} Preguntas`;
}
