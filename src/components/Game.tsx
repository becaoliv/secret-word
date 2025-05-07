import { useState } from "react";
import { useRef } from "react";
import Score from "./ScoreTemplate";
import CardTemplate from "./CardTemplate";

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
        <CardTemplate>
          <div className="flex flex-row">
            <Score score={score} prevScore={false} applyDropShadow={true}/>
            <Score score={prevScore} prevScore={true} applyDropShadow={false}/>
          </div>
          <p>Dicas sobre a palavra: <span>{pickedCategory}</span></p>
          <div className="wrongLettersContainer">
            <p>Você tem {guesses} tentativa(s)</p>
            <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter, i) => (<span key={i}>{letter}</span>))}
          </div>
        </CardTemplate>
          <div>
            {letters.map((letter, i) => (guessedLetters.includes(letter)
              ? (<span key={i} className="letter">{letter}</span>)
              : (<span key={i} className="blankSquare">X</span>)))}
          </div>
        <CardTemplate>
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
        </CardTemplate>
      </div>
  )
}

export default Game