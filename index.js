// ================================

const questions = [
  "What does PICIT stand for?",
  "What is a contention?",
  "Name literary devices:",
  "Name persuasive techniques:",
  "What do you include in the publication?",
  "Where do you find the intention?"
]

const answers = [
  "Publication, issue, contention, intention, target audience.",
  "The author's view on the issue.",
  "Alliteration, imagery, emotive language, non-linear, contrast, ambiguity, analogy, metaphor, onomatopoeia, anecdote, allusion, irony, juxtaposition, symbolism, tone, characterisation, repetition.",
  "Appeal to family values, appeal to patriotism, reason & logic, irony and sarcasm, cliche, appeal to modernity, ad hominem., appeal to fear, puns, inclusive language, generalisation, repetition, appeal to justice, hyperbole, rhetorical question.",
  "Author, date, publisher.",
  "In the last few paragraphs."
]

const questionLabel = document.getElementById("questionLabel");
const answerInput = document.getElementById("answerInput");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const form = document.getElementById("form");
const output = document.getElementById("output");

// ================================

window.onload(randChoice(), questionLabel.textContent = `${randQuestion}`);


next.onclick = function (event) {
  event.preventDefault();
  randChoice();

  questionLabel.textContent = `${randQuestion}`;
};


function randChoice() {
  let randNum = Math.random();

  if (randNum <= 0.2) {
    selectedQuestion = 1;
  }
  else if (randNum <= 0.4 && randNum > 0.2) {
    selectedQuestion = 1;
  }
  else if (randNum <= 0.6 && randNum > 0.4) {
    selectedQuestion = 2;
  }
  else if (randNum <= 0.8 && randNum > 0.6) {
    selectedQuestion = 3;
  }
  else if (randNum <= 1 && randNum > 0.8) {
    selectedQuestion = 4
  }

  randQuestion = questions[selectedQuestion];
  submitClick(selectedQuestion)
};


function submitClick(selectedQuestion) {
  submit.onclick = function (event) {
    event.preventDefault();

    _getInput(selectedQuestion);
  };
}


function _getInput(selectedQuestion) {
  let input = answerInput.value;

  if (input == answers[selectedQuestion]) {
    output.textContent = "Correct!"
  }
  else {
    output.textContent = "Incorrect";
  }

  changeColor();
}


function changeColor() {
  if (output.textContent == "Correct!") {
    output.style.color = "lime"
  }
  else {
    output.style.color = "red"
  }
}