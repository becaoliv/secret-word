import Score from "./ScoreTemplate";

interface GameOverProps {
  returnStartScreen: (score: number) => void;
  retry: () => void;
  score: number;
  prevScore: number;
}

const GameOver = ({returnStartScreen, retry, score, prevScore}: GameOverProps) => {
    return (
      <div>
        <p>Fim de jogo!</p>
        <Score score={score} prevScore={false} applyDropShadow={true}/>
        <Score score={prevScore} prevScore={true} applyDropShadow={false}/>
        <button onClick={retry}>Jogar novamente</button>
        <button onClick={() => returnStartScreen(score)}>Encerrar o jogo</button>
      </div>
    )
  }
  
  export default GameOver