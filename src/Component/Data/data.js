import React from "react";

const question = [
  {
    text: "Where is the correct place to insert a JavaScript ?",
    options: [
      "The <body> section  ",
      "The <head> section",
      "Both the <head> section and the <body> section are correct",
    ],
    isCorrect: "Both the <head> section and the <body> section are correct",
  },
  {
    text: "The external JavaScript file must contain the <script> tag.",
    options: ["None", "True", "False"],
    isCorrect: "False",
  },
  {
    text: "How do you create a function in JavaScript ?",
    options: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
    ],
    isCorrect: "function myFunction()",
  },
  {
    text: "How do you call a function named myFunction ?",
    options: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
    ],
    isCorrect: "myFunction()",
  },
  {
    text: "How does a FOR loop start ?",
    options: [
      "for (i = 0; ",
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
    ],
    isCorrect: "for (i = 0; i <= 5; i++)",
  },
];
export default question;
