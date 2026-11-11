// ================================

const cachedElements = [
  "questionLabel",
  "answerInput",
  "submit",
  "next",
  "form",
  "output",
  "answer",
  "paragraph",
  "causes",
  "ethics",
  "time",
  "general",
];

const DOM = {};

let quizState = "general";

cachedElements.forEach((id) => {
  DOM[id] = document.getElementById(id);
});

// ================================

window.onload = function setStartingQuestion() {
  (generalQuiz.randChoice(),
    (DOM.questionLabel.textContent = `${generalQuiz.randQuestion}`));
};

// ================================

DOM.next.onclick = function (event) {
  event.preventDefault();

  if (quizState == "general") {
    generalQuiz.randChoice();
    DOM.questionLabel.textContent = `${generalQuiz.randQuestion}`;
  } else if (quizState == "causes") {
    causesQuiz.randChoice();
    DOM.questionLabel.textContent = `${causesQuiz.randQuestion}`
  }
};

// ================================

class Causes {
  constructor() {
    const questions = ["What is efficient cause?", "What is material cause?"];

    const answers = [
      "The thing or state of affairs that brings something about",
      'That which is given to the question, "What is it made of?"',
    ];
  }
}

class General {
  constructor() {
    this.questions = [
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
      "What are existents?",
    ];

    this.answers = [
      "The thing or state of affairs that brings something about",
      "Arguing from something specific to something general",
      'That which is given to the question, "What is it made of?"',
      "The premises being true would guarantee that the conclusion is true; the conclusion cannot be true if the premises are false",
      "Valid and all premises are true",
      "Comparing properties of two things with common properties to infer shared properties",
      "Time is a literal thing that flows",
      "Time isn't literal and is purely a concept",
      "A proposition offered to lead to a conclusion within an argument",
      "Taking specific instances to form a broad concept that applies to a larger group",
      "Something that is literally real",
    ];
  }

  randChoice() {
    this.randNum = Math.floor(Math.random() * this.questions.length);

    DOM.paragraph.style.display = "none";

    this.randQuestion = this.questions[this.randNum];
    this.submitClick();
  }

  submitClick() {
    DOM.submit.onclick = function (event) {
      event.preventDefault();

      this._getInput();
    };
  }

  _getInput() {
    let input = DOM.answerInput.value;
    input = input.toLocaleLowerCase();

    if (input == this.answers[this.randNum].toLocaleLowerCase()) {
      DOM.output.textContent = "Correct!";
    }

    this.showAnswer();
  }

  showAnswer() {
    if (DOM.output.textContent == "Correct!") {
      DOM.output.style.color = "lime";
      this.randChoice();
      DOM.answerInput.value = "";
    } else {
      DOM.paragraph.style.display = "block";
      DOM.answer.textContent = this.answers[this.randNum];
      DOM.answerInput.value = "";
    }
  }
}

generalQuiz = new General();
causesQuiz = new Causes();
