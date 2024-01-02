import { Fragment, useState, useEffect, useRef } from "react";
import "./App.css";
import WordContainer from "./components/WordContainer";
import Header from "./components/header";

function App() {
  const randomizedWords = [
    "the ",
    "be ",
    "of ",
    "and ",
    "a ",
    "to ",
    "in ",
    "he ",
    "have ",
    "it ",
    "that ",
    "for ",
    "they ",
    "I ",
    "with ",
    "as ",
    "not ",
    "on ",
    "she ",
    "at ",
    "by ",
    "this ",
    "we ",
    "you ",
    "do ",
    "but ",
    "from ",
    "or ",
    "which ",
    "one ",
    "would ",
    "all ",
    "will ",
    "there ",
    "say ",
    "who ",
    "make ",
    "when ",
    "can ",
    "more ",
    "if ",
    "no ",
    "man ",
    "out ",
    "other ",
    "so ",
  ];

  let nextWords = [];

  let isMounted = false;

  const [words, setWords] = useState({});

  if (!isMounted) {
    let currentIndex = randomizedWords.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [randomizedWords[currentIndex], randomizedWords[randomIndex]] = [
        randomizedWords[randomIndex],
        randomizedWords[currentIndex],
      ];
    }
    for (let i = 0; i < 10; i++) {
      words[i] = randomizedWords[i];
    }
  }

  useEffect(() => {
    isMounted = true;
  });

  //randomizes words displayed
  const randomizeWords = () => {
    let currentIndex = randomizedWords.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [randomizedWords[currentIndex], randomizedWords[randomIndex]] = [
        randomizedWords[randomIndex],
        randomizedWords[currentIndex],
      ];
    }
    for (let i = 0; i < 10; i++) {
      nextWords[i] = randomizedWords[i];
    }

    setWords({
      words: nextWords,
    });
  };

  return (
    <>
      <Header />
      <WordContainer words={words} />
      <button type="button" onClick={randomizeWords}>
        Redo
      </button>
    </>
  );
}

export default App;
