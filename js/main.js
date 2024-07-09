import {
  extractNumber,
  createQuestionsArray,
  getQuestionById,
  formatCorrectAnswer,
  formatIncorrectAnswer,
  disableThisElement,
  removeDisableOfThisElement,
  getSelectedRadioValue,
  setProgress,
} from "./utility.js";

import { questionsData, messagesData } from "../db/db.js";

const modalBtns = document.querySelector(".modal-buttons");
const mainContainer = document.querySelector(".main");
const startBtn = document.querySelector(".start-btn");
//const questionsNumberSelected = getSelectedRadioValue();
const spanScore = document.querySelector(".user-score");
const questionTrack = document.querySelector(".question-track");
const optionContainer = document.querySelector(".quiz-options");
const nextBtn = document.querySelector(".next-btn");
const resultBtn = document.querySelector(".result-btn");

// --- Global Variables
const TOTAL_DATABASE_QUESTIONS = questionsData.length;
let TOTAL_EXAM_QUESTIONS = getSelectedRadioValue();

let ARRAY_OF_QUESTION_INDEX = [];
let CURRENT_QUESTION_INDEX = 0;
let CURRENT_QUESTION = {};
let USER_SCORE = 0;

startBtn.addEventListener("click", (event) => {
  mainContainer.classList.add("active");
});

resultBtn.addEventListener("click", (event) => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.display = "none";

  const resultBox = document.querySelector(".result-box");
  resultBox.style.display = "";
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Has acertado ${USER_SCORE} de ${TOTAL_EXAM_QUESTIONS} preguntas`;
  /*drawResult();*/
});

modalBtns.addEventListener("click", (event) => {
  const button = event.target.name;
  if (button === "exit" || button === "continue") {
    mainContainer.classList.remove("active");
  }
  if (button === "continue") {
    TOTAL_EXAM_QUESTIONS = getSelectedRadioValue();

    //If user selected the number of questions
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
    showQuestions(CURRENT_QUESTION_INDEX);
  }
});

function trackTotalQuestions(questionNumber) {
  const spanCurrentQuestionNumber = document.querySelector(".question-track");
  spanCurrentQuestionNumber.textContent = `${questionNumber} de ${TOTAL_EXAM_QUESTIONS} Preguntas`;
}

// The user selected an option
optionContainer.addEventListener("click", (event) => {
  const selectedOption = event.target.closest(".option");
  const selectedOptionName = selectedOption.getAttribute("name");
  let totalOptions = optionContainer.children.length;

  if (selectedOptionName === CURRENT_QUESTION.correctAnswer) {
    USER_SCORE++;
    spanScore.textContent = `Acertos: ${USER_SCORE}/${TOTAL_EXAM_QUESTIONS}`;
    formatCorrectAnswer(selectedOption);
  } else {
    formatIncorrectAnswer(selectedOption);
    for (let i = 0; i < totalOptions; i++) {
      if (
        optionContainer.children[i].getAttribute("name") ===
        CURRENT_QUESTION.correctAnswer
      ) {
        formatCorrectAnswer(optionContainer.children[i]);
      }
    }
  }

  for (let i = 0; i < totalOptions; i++) {
    disableThisElement(optionContainer.children[i]);
  }
  if (CURRENT_QUESTION_INDEX < TOTAL_EXAM_QUESTIONS) {
    removeDisableOfThisElement(nextBtn);
  } else {
    resultBtn.classList.remove("btn-secondary");
    resultBtn.classList.add("btn-success");
    resultBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
    const grade = (USER_SCORE / TOTAL_EXAM_QUESTIONS) * 10;
    console.log(`Grade is ${grade}`);
    getMessageFromScore(grade);
  }
});

function showQuestions(counterVal) {
  // Find question text at quiz box
  const questionText = document.querySelector(".question-text");

  let id = ARRAY_OF_QUESTION_INDEX[counterVal - 1];
  CURRENT_QUESTION = getQuestionById(id);

  let optTag = `<button class="option text-start mb-2 btn btn-outline-secondary" name="A">
                <span>A. ${CURRENT_QUESTION.options[0]}
              </button>
              <button
                class="option text-start mb-2 btn btn-outline-secondary"
                name="B"
              >
                <span>B. ${CURRENT_QUESTION.options[1]}</span>
              </button>
              <button
                class="option text-start mb-2 btn btn-outline-secondary"
                name="C"
              >
                <span>C. ${CURRENT_QUESTION.options[2]}</span>
              </button>
              <button
                class="option text-start mb-2 btn btn-outline-secondary"
                name="D"
              >
                <span>D. ${CURRENT_QUESTION.options[3]}</span>
              </button>`;

  // Change the content
  questionText.textContent = `${counterVal}. ${CURRENT_QUESTION.text}`;
  optionContainer.innerHTML = optTag;
  disableThisElement(nextBtn);
  resultBtn.style.visibility = "hidden";
}

nextBtn.addEventListener("click", (event) => {
  if (CURRENT_QUESTION_INDEX < TOTAL_EXAM_QUESTIONS) {
    disableThisElement(nextBtn);
    CURRENT_QUESTION_INDEX++;
    trackTotalQuestions(CURRENT_QUESTION_INDEX);
    showQuestions(CURRENT_QUESTION_INDEX);
  }
});

function getMessageFromScore(score) {
  const titleMessage = document.querySelector(".result-message");
  const subtitleMessage = document.querySelector(".comment-message");
  const percentageContainer = document.querySelector(".percentage");
  const value = score * 10;
  /* percentageContainer.textContent = `${value}%`;*/
  setProgress(value);

  let message;

  if (score < 5) {
    message = messagesData.find((msg) => msg.grade === "reprovado");
  } else if (score >= 5 && score <= 7.9) {
    message = messagesData.find((msg) => msg.grade === "notable");
  } else if (score >= 8 && score <= 8.9) {
    message = messagesData.find((msg) => msg.grade === "sobresaliente");
  } else if (score >= 9 && score <= 10) {
    message = messagesData.find((msg) => msg.grade === "honor");
  } else {
    console.log("ERROR:: Invalid Data in function ShowGradeMessage!");
    return;
  }

  titleMessage.textContent = message.gradeText;
  subtitleMessage.textContent = message.comment;
}
