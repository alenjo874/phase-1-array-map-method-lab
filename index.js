const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// const titleCased = () => {
//   return tutorials
// }

//access first layer of array: the titles

//then access each word: split at space

//then capitlize first letter
//rejoin the capitilzed arrray

function titleCased() {
  const result = tutorials.map((tut) =>
    tut
      .split(" ")
      .map((tut) =>
        tut
          .split(" ")
          .map((tut) => tut[0].toUpperCase() + tut.slice(1))
          .join(" ")
      )
      .join(" ")
  );
  return result;
}

titleCased(tutorials);
