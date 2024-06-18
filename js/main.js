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

// --- Queries
const mainContainer = document.querySelector(".main");
const startBtn = document.querySelector(".start-btn");
const footerBtn = document.querySelector(".footer-btn-group");
const questionsNumberSelected = document.querySelector("#inputGroupSelect");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const optionContainer = document.querySelector(".option-container");
const nextBtn = document.querySelector(".next-btn");
let spanScore = document.querySelector(".header-score");

// --- Global Variables
const TOTAL_DATABASE_QUESTIONS = questionsData.length;
let TOTAL_EXAM_QUESTIONS = questionsNumberSelected.value;
let ARRAY_OF_QUESTION_INDEX = [];
let CURRENT_QUESTION_INDEX = 0;
let CURRENT_QUESTION = {};
let USER_SCORE = 0;

//If any change update the total value
questionsNumberSelected.addEventListener("change", (event) => {
  TOTAL_EXAM_QUESTIONS = extractNumber(event.target.value);
});

startBtn.addEventListener("click", (event) => {
  mainContainer.classList.add("active");
});

//if any Modal's button is pressed the container will close
footerBtn.addEventListener("click", (event) => {
  const button = event.target.name;
  if (button === "exit" || button === "continue") {
    mainContainer.classList.remove("active");
  }

  if (button === "continue") {
    TOTAL_EXAM_QUESTIONS = extractNumber(questionsNumberSelected.value);

    //If user selected the number of questions
    if (TOTAL_EXAM_QUESTIONS !== -1) {
      quizSection.classList.add("active");
      quizBox.classList.add("active");

      ARRAY_OF_QUESTION_INDEX = createQuestionsArray(
        TOTAL_DATABASE_QUESTIONS,
        TOTAL_EXAM_QUESTIONS
      );

      spanScore.textContent = `Score: ${USER_SCORE}/${TOTAL_EXAM_QUESTIONS}`;
      CURRENT_QUESTION_INDEX++;
      trackTotalQuestions(CURRENT_QUESTION_INDEX);
      showQuestions(CURRENT_QUESTION_INDEX);
    }
  }
});

nextBtn.addEventListener("click", (event) => {
  if (CURRENT_QUESTION_INDEX < TOTAL_EXAM_QUESTIONS) {
    disableThisElement(nextBtn);
    CURRENT_QUESTION_INDEX++;
    trackTotalQuestions(CURRENT_QUESTION_INDEX);
    showQuestions(CURRENT_QUESTION_INDEX);
  }
});

// The user selected an option
optionContainer.addEventListener("click", (event) => {
  const selectedOption = event.target.closest(".option");
  const selectedOptionName = selectedOption.getAttribute("name");
  let totalOptions = optionContainer.children.length;

  if (selectedOptionName === CURRENT_QUESTION.correctAnswer) {
    USER_SCORE++;
    spanScore.textContent = `Score: ${USER_SCORE}/${TOTAL_EXAM_QUESTIONS}`;
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
    console.log(optionContainer.children[i].disable);
  }

  removeDisableOfThisElement(nextBtn);
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
}

function trackTotalQuestions(questionNumber) {
  const spanCurrentQuestionNumber = document.querySelector(".question-total");
  spanCurrentQuestionNumber.textContent = `${questionNumber} de ${TOTAL_EXAM_QUESTIONS} Preguntas`;
}
