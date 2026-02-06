const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to link a CSS file in HTML?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    correctAnswer: "<link>"
  },
  {
    question: "What does CSS control?",
    options: [
      "Website logic",
      "Website structure",
      "Website styling",
      "Website database"
    ],
    correctAnswer: "Website styling"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which method is used to select an element by class name?",
    options: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
      "Both B and C"
    ],
    correctAnswer: "Both B and C"
  },
  {
    question: "What is the output of: typeof [] ?",
    options: ["array", "object", "list", "undefined"],
    correctAnswer: "object"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "/* */", "//", "#"],
    correctAnswer: "//"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<src>", "<picture>"],
    correctAnswer: "<img>"
  }
];

const questionsQty = quizData.length;

export {quizData, questionsQty}
