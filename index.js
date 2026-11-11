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

// ================================

cachedElements.forEach((id) => {
  DOM[id] = document.getElementById(id);
});

// ================================

DOM.causes.onclick = function runCauses() {
  quizState = "causes";
}

DOM.general.onclick = function runCauses() {
  quizState = "general";
}

// ================================

DOM.next.onclick = function (event) {
  event.preventDefault();
  DOM.output.style.display = "none";

  if (quizState == "general") {
    generalQuiz.runAnswers();
  } else if (quizState == "causes") {
    causesQuiz.runAnswers();
  }
};

// ================================

class RunTheme {
  constructor(theme) {
    this.questions = theme.questions
    this.answers = theme.answers
  }

  randChoice() {
    this.randNum = Math.floor(Math.random() * this.questions.length);
    DOM.paragraph.style.display = "none";

    this.randQuestion = this.questions[this.randNum];
    this.submitClick();
  }

  submitClick() {
    DOM.questionLabel.textContent = this.randQuestion
    DOM.submit.onclick = (event) => {
      event.preventDefault();
      this.getInput();
    };
  }

  getInput() {
    let input = DOM.answerInput.value;
    input = input.toLowerCase()
    DOM.output.style.display = "block";

    if (input == this.answers[this.randNum].toLowerCase()) {
      DOM.output.textContent = "Correct!";
    } else {
      DOM.output.textContent = "Incorrect";
      DOM.paragraph.style.display = "block";
      DOM.answer.textContent = this.answers[this.randNum];
      DOM.answerInput.value = "";
    }

    this.showStatus();
  }

  showStatus() {
    if (DOM.output.textContent == "Correct!") {
      DOM.output.style.color = "lime";
    } else if (DOM.output.textContent == "Incorrect") {
      DOM.output.style.color = "red";
    }

    if (DOM.output.textContent == "Correct!") {
      this.randChoice();
    }
    DOM.answerInput.value = "";
  }
}

class Causes {
  constructor() {
    this.questions = ["What is efficient cause?", "What is material cause?"];

    this.answers = [
      "The thing or state of affairs that brings something about",
      'That which is given to the question, "What is it made of?"',
    ];
  }

  runAnswers() {
    DOM.output.style.display = "none";
    runCauses.randChoice();
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

  runAnswers() {
    runGeneral.randChoice()
  }

}

generalQuiz = new General();
causesQuiz = new Causes();
runGeneral = new RunTheme(generalQuiz);
runCauses = new RunTheme(causesQuiz)