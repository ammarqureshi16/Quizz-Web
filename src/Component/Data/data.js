import React from "react";

const question = [
  {
    text: "Where is the correct place to insert a JavaScript ?",
    options: [
      { text: "The <body> section  ", isCorrect: false },
      { text: "The <head> section", isCorrect: false },
      {
        text: "Both the <head> section and the <body> section are correct ",
        isCorrect: true,
      },
    ],
  },
  {
    text: "The external JavaScript file must contain the <script> tag.",
    options: [
      { text: "None", isCorrect: false },
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
  },
  {
    text: "How do you create a function in JavaScript ?",
    options: [
      { text: "function:myFunction()", isCorrect: false },
      { text: "function = myFunction()", isCorrect: false },
      { text: "function myFunction()  ", isCorrect: true },
    ],
  },
  {
    text: "How do you call a function named myFunction ?",
    options: [
      { text: "call function myFunction()", isCorrect: false },
      { text: "call myFunction()", isCorrect: false },
      { text: "myFunction()  ", isCorrect: true },
    ],
  },
  // {
  //   text: "How can you add a comment in a JavaScript ?",
  //   options: [
  //     { text: "This is a comment", isCorrect: false },
  //     { text: "<!--This is a comment-->", isCorrect: false },
  //     { text: "//This is a comment  ", isCorrect: true },
  //   ],
  // },
  // {
  //   text: "How do you create a function in JavaScript ?",
  //   options: [
  //     { text: "function = myFunction()", isCorrect: false },
  //     { text: "Ture", isCorrect: false },
  //     { text: "False", isCorrect: true },
  //   ],
  // },
  // {
  //   text: "The external JavaScript file must contain the </script> tag.",
  //   options: [
  //     { text: "None", isCorrect: false },
  //     { text: "True", isCorrect: false },
  //     { text: "False", isCorrect: true },
  //   ],
  // },
  // {
  //   text: "Where is the correct place to insert ?",
  //   options: [
  //     { text: "The <body> section  ", isCorrect: false },
  //     { text: "The <head> section", isCorrect: false },
  //     {
  //       text: "Both the <head> section and the <body>",
  //       isCorrect: true,
  //     },
  //   ],
  // },
  // {
  //   text: "How does a WHILE loop start ?",
  //   options: [
  //     { text: "while i = 1 to 10  ", isCorrect: false },
  //     { text: "while (i <= 10; i++)", isCorrect: false },
  //     {
  //       text: "while (i <= 10)  ",
  //       isCorrect: true,
  //     },
  //   ],
  // },
  // {
  //   text: "How does a FOR loop start ?",
  //   options: [
  //     { text: "for (i = 0; ", isCorrect: false },
  //     { text: "for (i = 0; i <= 5)", isCorrect: false },
  //     {
  //       text: "for (i = 0; i <= 5; i++)  ",
  //       isCorrect: true,
  //     },
  //   ],
  // },
];

export default question;
