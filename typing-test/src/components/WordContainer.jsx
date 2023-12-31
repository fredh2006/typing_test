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

  const handleChange = (event) => {
    typed = JSON.stringify(event.target.value);

    if (!firstWord) {
      if (typed.includes(" ")) {
        pastWord = typed.substring(1, typed.indexOf(" "));
        firstWord = true;
        lastSpace = typed.indexOf(" ")+1;
        let correctWord = words[wordsTyped]
        let correctWordNoSpace = correctWord.substring(0, correctWord.indexOf(" "))
        console.log(correctWordNoSpace);
        if(pastWord === correctWordNoSpace){
            console.log("correct word");
        }else{
            console.log("wrong word");
        }
        wordsTyped++; 
        return;
      } else {
        return;
      }
    }

    if (firstWord) {
      let currentTyped = typed.substring(lastSpace);
      console.log(currentTyped);

      if (currentTyped.indexOf(" ") >= 0) {
        pastWord = currentTyped.substring(0, currentTyped.indexOf(" "));
        lastSpace = typed.split(" ", wordsTyped+1).join(" ").length+1;
        let correctWord = words[wordsTyped]
        let correctWordNoSpace = correctWord.substring(0, correctWord.indexOf(" "))
        if(pastWord == correctWordNoSpace){
            console.log("correct word");
        }else{
            console.log("wrong word");
        }
        wordsTyped++;
      } else {
        return;
      }


    }
  };

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
        type="textarea"
        placeholder="start typing here"
        onChange={handleChange}
      ></input>
    </Fragment>
  );
}

export default fetchWords;
