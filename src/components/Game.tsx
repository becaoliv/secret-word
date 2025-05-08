import { useState } from "react";
import { useRef } from "react";
import CardTemplate from "./CardTemplate";
import CardLetterTemplate from "./CardLetterTemplate";

interface GameProps {
  verifyLetter: (letter: string) => void;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  guessesQty: number;
  score: number;
  returnStartScreen: (score: number) => void;
  prevScore: number;
}


const Game = ({verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, guesses, guessesQty, score, returnStartScreen, prevScore}: GameProps) => {
  const [letter, setLetter] = useState<string>('');
  const letterInputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      verifyLetter(letter);
      setLetter('');
      letterInputRef.current?.focus();
    }
    return (
      <div className="w-full flex justify-center">
        <CardTemplate additionalClasses="md:w-3/4 py-4">
        <div className="grid grid-cols-3 items-center">
            <span></span>
            <h1 className="text-center">Dica da palavra:</h1>
            <div className="flex justify-end">
              <button onClick={() => returnStartScreen(score)} className="w-8 h-8 rounded-full cursor-pointer bg-[url(/images/desligar.png)] bg-cover bg-no-repeat bg-center hover:drop-shadow-red-500 hover:drop-shadow-[0_0_5px]"></button>
            </div>
        </div>
          <h2 className="text-center font-bold title text-4xl text-sky-400 my-10">{pickedCategory.toUpperCase()}</h2>
          <div className="flex flex-row justify-center align-center pt-2 mb-5">
            {letters.map((letter, i) => (guessedLetters.includes(letter)
              ? (<CardLetterTemplate key={i}><span className="text-sky-800 text-6xl block py-4 text-center">{letter.toLocaleUpperCase()}</span></CardLetterTemplate>)
              : (<CardLetterTemplate key={i}><div className="bg-[url(/images/dia-da-marmota.gif)] bg-[length:60%_60%] bg-no-repeat bg-center h-full"></div></CardLetterTemplate>)))}
          </div>
          <div className="flex flex-row justify-between mt-20 pt-10 border-t-1 border-solid border-sky-800">
            <div className="letterContainer">
              <p>Tente adivinhar uma letra da palavra:</p>
              <form onSubmit={handleSubmit}>
                <div className="group flex flex-col justify-center items-center">
                  <input type="text" name="letter" value={letter} onChange={(e) => setLetter(e.target.value)} ref={letterInputRef} maxLength={1} required className="my-3 text-3xl text-center uppercase border-1 border-solid rounded-md w-15 h-15"/>
                  <button><i className="check">Icone de check</i></button>
                </div>
              </form>
            </div>
            <div>
              <p className="text-center text-sm">Letras já utilizadas:</p>
              <div className="my-4 grid grid-cols-5 gap-5">
                {Array.from({length: guessesQty}).map((_, i) => (
                  <div key={i} className="px-3 py-2 bg-gray-300/90 border-3 border-solid border-red-800 rounded-lg text-center text-gray-950 font-bold">
                    {wrongLetters[i] ? <span>{wrongLetters[i].toUpperCase()}</span> : <span className="text-gray-500">-</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">Você tem <span className="text-red-700 font-bold">{guesses}</span> tentativa(s)</p>
            </div>
          </div>
        </CardTemplate>
      </div>
  )
}

export default Game