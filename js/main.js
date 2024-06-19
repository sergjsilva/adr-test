const modalBtns = document.querySelector(".modal-buttons");
const mainContainer = document.querySelector(".main");
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", (event) => {
  mainContainer.classList.add("active");
});

modalBtns.addEventListener("click", (event) => {
  const button = event.target.name;
  if (button === "exit" || button === "continue") {
    mainContainer.classList.remove("active");
  }
  if (button === "continue") {
    var section = document.querySelector(".home");
    const cardContainer = document.querySelector(".card-container");
    section.style.display = "none";
    cardContainer.style.display = "";
  }
});
