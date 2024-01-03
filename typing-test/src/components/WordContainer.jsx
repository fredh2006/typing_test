import { Fragment, useState } from "react";

function fetchWords(props) {
  let typed; //words in textarea
  let pastWord; //word typed on space
  let firstWord = false;
  let wordsTyped = 0;
  let startTime; //time @ first character
  let firstChar = true;
  let mistakes = 0; //incorrect characters
  let totalWords;

  totalWords = Object.values(props.words);

  if (Object.values(props.words).length > props.wordCount) {
    totalWords = Object.values(props.words).splice(props.wordCount);
  }

  if (totalWords.length == 1) {
    totalWords = totalWords[0];
    let allWords = document.querySelectorAll(".word");
    for (let i = 0; i < allWords.length; i++) {
      if (allWords[i].classList.contains("correct"))
        allWords[i].classList.remove("correct");
      if(allWords[i].classList.contains('wrong'))
        allWords[i].classList.remove('wrong');
        if(allWords[i].classList.contains('current'))
        allWords[i].classList.remove('current');
    }
  }

  //check for spaces and handle event
  const handleChange = (event) => {
    if (firstChar) {
      startTime = new Date();
    }
    firstChar = false;

    typed = JSON.stringify(event.target.value);
    const typeArea = document.querySelector(".typeArea");

    //special case for first word
    if (!firstWord) {

      if (typed.includes(" ")) {
        pastWord = typed.substring(1, typed.indexOf(" "));
        firstWord = true;
        let correctWord = totalWords[wordsTyped];
        let correctWordNoSpace = correctWord.substring(
          0,
          correctWord.indexOf(" ")
        );
        checkWord(pastWord, correctWordNoSpace);

        typeArea.value = "";
        wordsTyped++;

        let nextWord = totalWords[wordsTyped];
        let word = document.getElementById(`${nextWord}`);
        word.classList.add('current')

        return;
      } else {
        return;
      }
    }

    if (firstWord) {
      if (typed.indexOf(" ") >= 0) {
        pastWord = typed.substring(1, typed.indexOf(" "));
        let correctWord = totalWords[wordsTyped];
        let correctWordNoSpace = correctWord.substring(
          0,
          correctWord.indexOf(" ")
        );
        checkWord(pastWord, correctWordNoSpace);
        wordsTyped++;
        typeArea.value = "";

        if(!(wordsTyped==totalWords.length)){
        let nextWord = totalWords[wordsTyped];
        let word = document.getElementById(`${nextWord}`);
        word.classList.add('current')
        }

      } else {
        return;
      }
    }

    //once test is completed
    if (wordsTyped == totalWords.length) {
      let endTime = new Date();
      let timeElapsed = (endTime.getTime() - startTime.getTime()) / 1000 / 60;
      determineStats(timeElapsed, mistakes);
    }
  };

  //check word typed
  const checkWord = (currentWord, correctWord) => {
    let space = correctWord + " ";
    let word = document.getElementById(`${space}`);

    //check for incorrect characters
    for (let i = 0; i < correctWord.length; i++) {
      if (currentWord[i] == undefined) {
        //if word is too short
        mistakes++;
      } else if (currentWord[i] != correctWord[i]) {
        //if a character is different
        mistakes++;
      }
    }

    if (currentWord.length > correctWord.length) {
      //if word is too long
      let longer = currentWord.length - correctWord.length;
      mistakes += longer;
    }

    //add class based on correct/incorrect
    if (currentWord == correctWord) {
      word.classList.add("correct");
      return true;
    }
    word.classList.add("wrong");
    return false;
  };

  //determines WPM and ACC
  const determineStats = (minutes, mistakes) => {
    let totalChar = 0;
    for (let i = 0; i < totalWords.length; i++) {
      let word = totalWords[i].length;
      for (let j = 0; j < word; j++) {
        totalChar++;
      }
    }

    let wpm = Math.round(totalChar / 5 / minutes); //determines wpm

    let correctChars = totalChar - mistakes;
    let acc = Math.round((correctChars / totalChar) * 100); //determines acc

    let wordCount = document.querySelector(".wordCount");
    wordCount.innerHTML = `WPM: ${wpm} / ACC: ${acc}`;
  };

  return (
    <Fragment>
      <h1 className="title">typeit</h1>
      <div className="words-container">
        {totalWords.map((word) => (
          <span className="word" key={word} id={word}>
            {word}
          </span>
        ))}
      </div>
      <input
        className="typeArea"
        type="textarea"
        onChange={handleChange}
      ></input>


    </Fragment>
  );
}

export default fetchWords;
