import { Fragment, useState } from "react";

function fetchWords() {
  const words = [
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
  ];

  let typed;
  let pastWord;
  let firstWord = false;
  let lastSpace;
  let wordsTyped = 0;

  //check for spaces and handle event
  const handleChange = (event) => {
    typed = JSON.stringify(event.target.value);
    const typeArea = document.querySelector('.typeArea')

    //special case for first word
    if (!firstWord) {
      if (typed.includes(" ")) {
        pastWord = typed.substring(1, typed.indexOf(" "));
        firstWord = true;
        lastSpace = typed.indexOf(" ")+1;
        let correctWord = words[wordsTyped]
        let correctWordNoSpace = correctWord.substring(0, correctWord.indexOf(" "))
        if(checkWord(pastWord, correctWordNoSpace)){
            console.log("correct word");
        }else{
            console.log("wrong word");
        }
        typeArea.value = '';
        wordsTyped++; 
        return;
      } else {
        return;
      }
    }

    if (firstWord) {
      let currentTyped = typed.substring(lastSpace);

      if (typed.indexOf(" ") >= 0) {
        pastWord = typed.substring(1, typed.indexOf(" "));
        console.log(pastWord);
        lastSpace = typed.split(" ", wordsTyped+1).join(" ").length+1;
        let correctWord = words[wordsTyped]
        let correctWordNoSpace = correctWord.substring(0, correctWord.indexOf(" "))
        if(checkWord(pastWord, correctWordNoSpace)){
            console.log("correct word");
        }else{
            console.log("wrong word");
        }
        wordsTyped++;
        typeArea.value = '';
      } else {
        return;
      }
    }

  };

  const checkWord = (currentWord, correctWord) =>{
    if(currentWord == correctWord){
        return true;
    }
    return false;
  }

  return (
    <Fragment>
      <h1 className="title">Words</h1>
      <div className="words-container">
        {words.map((word) => (
          <span className="word" key={word}>
            {word}
          </span>
        ))}
      </div>
      <input
        className = "typeArea"
        type="textarea"
        onChange={handleChange}
      ></input>
    </Fragment>
  );
}

export default fetchWords;
