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
        <p>Pontuação do jogo: {score}</p>
        <p>Pontuação do jogo anterior: {prevScore}</p>
        <button onClick={retry}>Jogar novamente</button>
        <button onClick={() => returnStartScreen(score)}>Encerrar o jogo</button>
      </div>
    )
  }
  
  export default GameOver