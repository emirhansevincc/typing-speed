import { useState } from "react";


function App() {

  const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit Amet modi facere eos tempora debitis repudiandae autem animi delectus velit tempore corrupti voluptas fugiat sint recusandae corporis esse quisquam nulla vero Id non asperiores quam ipsa nesciunt dolore quo commodi quidem laudantium perspiciatis beatae sed minima voluptatem laborum necessitatibus facere saepe adipisci nam illo Quas aliquid laudantium in aspernatur officia dolor"

  let word = paragraph.split(" ")

  const [words, setWords] = useState(word)
  const [inputValue, setInputValue] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [incorrect, setInorrect] = useState(0)
  const [countdown, setCountown] = useState(60)
  const [nextWord, setNextWord] = useState("")

  // console.log(words);

  const funcOnKeyDown = (e) => {
    if (e.keyCode === 32) {
      checkWord()
      setNextWord(words[currentWordIndex + 1])
      setCurrentWordIndex(currentWordIndex + 1)
      setInputValue("")
    }
  }

  const checkWord = () => {

    const check = words[currentWordIndex] === inputValue.trim()

    if (check) {
      setCorrect(correct + 1)

    } else {
      setInorrect(incorrect + 1)
    }
  }

  const startInterval = () => {
    const currCountdown = setInterval(() => {
      setCountown((previousState) => {
        if (previousState === 0) {
          clearInterval(currCountdown)
        } else {
          return previousState - 1
        }
      })
    }, 1000);

  }

  return (
    <div className="App">
      <div className="container">

        <div className="countdown">
          <h1>{countdown}</h1>
        </div>
        <div className="input-part">
          <input
            type="text"
            placeholder="Start"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={funcOnKeyDown}
            disabled={countdown === 0}
          />
          <button onClick={startInterval}>Start</button>
        </div>

        <h2 className="h2tag">Next Word : {nextWord}</h2>

        <div className="text-part">
          {
            paragraph.split(" ").map((word, key) => {
              return (<span key={key}>
                {
                  word.split("").map((letter, index) => {
                    return (
                      <span key={index}>{letter}</span>
                    )
                  })
                }
                <span> </span>
              </span>)
            })
          }
        </div>

        <div className="results" >
          <div className="correct">
            <h3>Correct Words : {correct}</h3>
          </div>
          <div className="incorrect">
            <h3>Incorrect Words : {incorrect}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;