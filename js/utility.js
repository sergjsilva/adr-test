import { questionsData } from "../db/db.js";

export function extractNumber(str) {
  const ERROR = -1;
  let match = str.match(/\d+/);

  if (match) {
    let numberOfQuestions = parseInt(match[0]);
    return numberOfQuestions; // Output: 15
  } else {
    return ERROR;
  }
}

function createArray(total) {
  return Array.from({ length: total }, (_, i) => i + 1);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
  return array;
}

// Função para selecionar totalQuestions aleatórias de um total de TOTAL
export function createQuestionsArray(totalInDatabase, totalOfQuestions) {
  // Create an array with all IDs
  let arrayWithAllIds = createArray(totalInDatabase);

  // Shuffled array
  let shuffledArray = shuffleArray(arrayWithAllIds);

  // Seleciona os primeiros totalQuestions IDs do array embaralhado
  return shuffledArray.slice(0, totalOfQuestions);
}

// Retrieve an object from ID
export function getQuestionById(id) {
  return questionsData.find((question) => question.id === id);
}

export function formatCorrectAnswer(element) {
  element.classList.remove("btn-outline-secondary");
  element.classList.add("btn", "btn-success");
}

export function formatIncorrectAnswer(element) {
  element.classList.remove("btn-outline-secondary");
  element.classList.add("btn", "btn-danger");
}

export function disableThisElement(element) {
  element.disabled = true;
}

export function removeDisableOfThisElement(element) {
  element.disabled = false;
}

export function getSelectedRadioValue() {
  const selectedRadio = document.querySelector(
    'input[name="radioBtn"]:checked'
  );
  const selectedValue = selectedRadio ? selectedRadio.value : "No selection";
  return selectedValue;
}

export function setProgress(percent) {
  const progressCircle = document.querySelector(".progress-circle");
  progressCircle.style.setProperty("--percent", percent);
  document.querySelector(
    ".progress-circle .percentage"
  ).textContent = `${percent}%`;
}
