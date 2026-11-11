// ================================

const questions = [
  "What is efficient cause?",
  "What is an inductive argument?",
  "What is material cause?",
  "Explain validity.",
  "Explain soundness.",
  "What is an analogy?",
  "What are A-Theories of time?",
  "What are B-Theories of time?",
  "What is a premis?",
  "What is generalisation?",
  "What are existents?"
]

const answers = [
  "The thing or state of affairs that brings something about",
  "Argue from specific to general",
  "That which is given to the question, \"What is it made of?\"",
  "The premises being true would guarantee that the conclusion is true; the conclusion cannot be true if the premises are false",
  "Valid and all premises are true",
  "Comparing properties of two things with common properties to infer they will share more properties",
  "Time is a literal thing that flows",
  "Time isn't literal and is purely a concept",
  "A proposition offered to lead to a conclusion within an argument",
  "Taking specific instances to form a broad concept that applies to a larger group",
  "Something that is literally real"
]

const questionLabel = document.getElementById("questionLabel");
const answerInput = document.getElementById("answerInput");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const form = document.getElementById("form");
const output = document.getElementById("output");
const answer = document.getElementById("answer")
const paragraph = document.querySelector("p")

// ================================

window.onload(randChoice(), questionLabel.textContent = `${randQuestion}`);


next.onclick = function (event) {
  event.preventDefault();
  randChoice();

  questionLabel.textContent = `${randQuestion}`;
};


function randChoice() {
  let randNum = Math.floor(Math.random() * questions.length);

  randQuestion = questions[randNum];
  submitClick(randNum)
};


function submitClick(randNum) {
  submit.onclick = function (event) {
    event.preventDefault();

    _getInput(randNum);
  };
}


function _getInput(randNum) {
  let input = answerInput.value;
  input = input.toLocaleLowerCase()

  if (input == answers[randNum].toLocaleLowerCase()) {
    output.textContent = "Correct!";
  }

  showAnswer(randNum);
}


function showAnswer(randNum) {
  if (output.textContent == "Correct!") {
    output.style.color = "lime";
    randChoice()
    answerInput.value = ""
  }
  else {
    paragraph.style.display = "block";
    answer.textContent = answers[randNum]
    answerInput.value = "";
  }
}