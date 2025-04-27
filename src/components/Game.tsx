import { useState } from "react";
import { useRef } from "react";

interface GameProps {
  verifyLetter: (letter: string) => void;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
  returnStartScreen: (score: number) => void;
  prevScore: number;
}

const Game = ({verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score, returnStartScreen, prevScore}: GameProps) => {
    const [letter, setLetter] = useState<string>('');
    const letterInputRef = useRef<HTMLInputElement>(null);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      verifyLetter(letter);
      setLetter('');
      letterInputRef.current?.focus();
    }
    return (
        <div>
        <div>
          <p className="points">
            <span>Pontuação: {score}</span>
          </p>
          <p className="points">
            <span>Pontuação anterior: {prevScore}</span>
          </p>
          <p>Dicas sobre a palavra: <span>{pickedCategory}</span></p>
        </div>
        <div className="wrongLettersContainer">
          <p>Você tem {guesses} tentativa(s)</p>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter, i) => (<span key={i}>{letter}</span>))}
        </div>
        <div>
          {letters.map((letter, i) => (guessedLetters.includes(letter)
            ? (<span key={i} className="letter">{letter}</span>)
            : (<span key={i} className="blankSquare">X</span>)))}
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="letter" value={letter} onChange={(e) => setLetter(e.target.value)} ref={letterInputRef} maxLength={1} required/>
            <button><i className="check">Icone de check</i></button>
          </form>
        </div>
        <div>
          <button onClick={() => returnStartScreen(score)}>Encerrar o jogo</button>
        </div>
      </div>
  )
}

export default Game