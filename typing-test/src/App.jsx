import { Fragment, useState, useEffect, useRef } from "react";
import "./App.css";
import WordContainer from "./components/WordContainer";
import Stats from "./components/Stats";

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
    "what ",
    "time ",
    "up ",
    "go ",
    "about ",
    "than ",
    "into ",
    "could ",
    "state ",
    "only ",
    "new ",
    "year ",
    "some ",
    "take ",
    "come ",
    "these ",
    "know ",
    "see ",
    "use ",
    "get ",
    "like ",
    "then ",
    "first ",
    "any ",
    "work ",
    "now ",
    "may ",
    "such ",
    "give ",
    "over ",
    "think ",
    "most ",
    "even ",
    "find ",
    "day ",
    "also ",
    "after ",
    "way ",
    "many ",
    "must ",
    "look ",
    "before ",
    "great ",
    "back ",
    "through ",
    "long ",
    "where ",
    "much ",
    "should ",
    "well ",
    "people ",
    "down ",
    "own ",
    "just ",
    "because ",
    "good ",
    "each ",
    "those ",
    "feel ",
    "seem ",
    "how ",
    "high ",
    "too ",
    "place ",
    "little ",
    "world ",
    "very ",
    "still ",
    "nation ",
    "hand ",
    "old ",
    "life ",
    "tell ",
    "write ",
    "become ",
    "here ",
    "show ",
    "house ",
    "both ",
    "between ",
    "need ",
    "mean ",
    "call ",
    "develop ",
    "under ",
    "last ",
    "right ",
    "move ",
    "thing ",
    "general ",
    "school ",
    "never ",
    "same ",
    "another ",
    "begin ",
    "while ",
    "number ",
    "part ",
    "turn ",
    "real ",
    "leave ",
    "might ",
    "want ",
    "point ",
    "form ",
    "off ",
    "child ",
    "few ",
    "small ",
    "since ",
    "against ",
    "ask ",
    "late ",
    "home ",
    "interest ",
    "large ",
    "person ",
    "end ",
    "open ",
    "public ",
    "follow ",
    "during ",
    "present ",
    "without ",
    "again ",
    "hold ",
    "govern ",
    "around ",
    "possible ",
    "head ",
    "consider ",
    "word ",
    "program ",
    "problem ",
    "however ",
    "lead ",
    "system ",
    "set ",
    "order ",
    "eye ",
    "plan ",
    "run ",
    "keep ",
    "face ",
    "fact ",
    "group ",
    "play ",
    "stand ",
    "increase ",
    "early ",
    "course ",
    "change ",
    "help ",
    "line ",
  ];

  let nextWords = [];

  let isMounted = false;

  let prevWordCount = 10;

  const [words, setWords] = useState({});

  const [wordCount, setWordCount] = useState(50);

  const [wordVisible, setWordVisible] = useState(true);
  const [timeVisible, setTimeVisible] = useState(false);

  //special case for first test
  if (typeof window !== "undefined") {
    // Check if we're running in the browser.
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
    for (let i = 0; i < wordCount; i++) {
      words[i] = randomizedWords[i];
    }
  }

  //randomizes words displayed
  const randomizeWords = () => {
    console.log(wordCount);
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
    for (let i = 0; i < wordCount; i++) {
      nextWords[i] = randomizedWords[i];
    }

    setWords({
      words: nextWords,
    });
  };

  const handleWordClick = (event) => {
    let newWord;
    const wordContainer = document.querySelector(".words-container");
    wordContainer.classList.remove("smaller");
    newWord = event.target.outerText.substring(0, 2);
    if (event.target.outerText.indexOf("100") >= 0) {
      newWord = event.target.outerText.substring(0, 3);
    }
    if (newWord == "10" || newWord == "25")
      wordContainer.classList.add("smaller");

    setWordCount(newWord);
    setActive(newWord);
  };

  const setActive = (option) => {
    let options = document.querySelectorAll(".option");

    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }
    let selectedOption = document.getElementById(`${option}`);
    selectedOption.classList.add("active");
  };

  useEffect(() => {
    randomizeWords();
  }, [wordCount]);

  $(window).bind("load", function () {

    let wordsWidth = $(".words-container").outerWidth();
    let buttonWidth = $(".button").outerWidth();
    let typeWidth = wordsWidth - buttonWidth - 10;
    $(".typeArea").css("width", `${typeWidth}`);

    let documentWidth = $(window).width();
    console.log("bigger ");
    let vw = documentWidth / 100;
    vw = vw * 28;
    let statsWidth = $(".wordCount").outerWidth();
    let statsMargin = vw + wordsWidth - statsWidth;

    $(".wordCount").css("margin-left", statsMargin + "px");
    $(".wordCount").css("margin-top", "-25px");
  });

  $(window).resize(function () {
    let wordsWidth = $(".words-container").outerWidth();
    let buttonWidth = $(".button").outerWidth();
    let typeWidth = wordsWidth - buttonWidth - 10;
    $(".typeArea").css("width", `${typeWidth}`);

    let documentWidth = $(window).width();
    if (documentWidth >= 880) {
      console.log("bigger ");
      let vw = documentWidth / 100;
      vw = vw * 28;
      let statsWidth = $(".wordCount").outerWidth();
      let statsMargin = vw + wordsWidth - statsWidth;

      $(".wordCount").css("margin-left", statsMargin + "px");
      $(".wordCount").css("margin-top", "-25px");
    } else {
      $(".wordCount").css("margin-left", "28vw");
      $(".wordCount").css("margin-top", "0px");
    }
  });

  return (
    <>
      <div className="options">
        <WordContainer words={words} wordCount={wordCount} />
        <button
          className="button is-small"
          type="button"
          onClick={randomizeWords}
        >
          Shuffle
        </button>
        <div className="wordChoice-container">
          <span className="wordChoice-header">Words &nbsp; | &nbsp; </span>
          <span onClick={handleWordClick}>
            <span id="10" className="option">
              10
            </span>{" "}
            /{" "}
          </span>
          <span onClick={handleWordClick}>
            <span id="25" className="option">
              25
            </span>{" "}
            /{" "}
          </span>
          <span onClick={handleWordClick}>
            <span id="50" className="option active">
              50
            </span>{" "}
            /{" "}
          </span>
          <span onClick={handleWordClick}>
            <span id="100" className="option">
              100
            </span>{" "}
          </span>
        </div>
      </div>
      <Stats />
    </>
  );
}

export default App;
