import './App.css';
import { useCallback, useEffect, useState } from 'react';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

import { wordList } from './data/words';

type WordList = typeof wordList;
type Category = keyof WordList;

const stages = [
  {id: 0, name: 'start'},
  {id: 1, name: 'game'},
  {id: 2, name: 'end'},
];

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [, setPickedWord] = useState<string>('');
  const [pickedCategory, setPickedCategory] = useState<Category>('animais');
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState<number>(0);

  const [prevScore, setPrevScore] = useState(0);
  
  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words) as Category[];
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    return {category, word};
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterState();

    const {category, word} = pickedWordAndCategory();
    let wordLetter = word.split('').map((i) => i.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetter);

    setGameStage(stages[1].name);
  }, [pickedWordAndCategory]);

  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;

    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);
      setGuesses((guesses) => guesses - 1);
    }
  }

  const clearLetterState = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    const savedPrevScore = localStorage.getItem('prevScore');
    if (savedPrevScore !== null) {
      setPrevScore(Number(savedPrevScore));
    }
  },[])

  useEffect(() => {
    if (!guesses) {
      clearLetterState();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];
    if(guessedLetters.length === uniqueLetters.length) {
      if (guessedLetters.length > 0){
        setScore((actualScore) => (actualScore += 100));
      } else {
        setScore(0);
      }
      startGame();
    }

  }, [guessedLetters, letters, startGame]);
  
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[1].name);
  }

  const returnStartScreen = (score: number) => {
    saveNewPrevScore(score);
    setGuesses(guessesQty);
    clearLetterState();
    setGameStage(stages[0].name);
  }

  const saveNewPrevScore = (score: number) => {
    const newPrevScore = score;
    localStorage.setItem('prevScore', String(newPrevScore));
    setPrevScore(newPrevScore);
  }

  return (
    <div className="w-full md:w-auto py-20 px-20 flex flex-col justify-center items-center">
      <div className='bg-sky-950 border-3 border-solid border-sky-400 drop-shadow-sky-400/50 drop-shadow-[0_0_10px] rounded-lg p-5 mb-5'>
        <h2 className='text-center text-3xl text-sky-400 drop-shadow-sky-400/50 drop-shadow-[0_0_7px] font-bold title'>Adivinhe a palavra secreta</h2>
      </div>
      {gameStage === 'start' ? <StartScreen startGame={startGame} prevScore={prevScore}/> : gameStage === 'game' 
      ? <Game 
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          returnStartScreen={returnStartScreen}
          prevScore={prevScore}
        /> 
      : <GameOver returnStartScreen={returnStartScreen} retry={retry} score={score} prevScore={prevScore}/>}
    </div>
  )
}

export default App
