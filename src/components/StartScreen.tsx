
interface StartScreenProps {
    startGame: () => void;
    prevScore: number;
}

const StartScreen = ({startGame, prevScore}: StartScreenProps) => {
    return (
      <div>
        <p>Pontuação anterior: {prevScore}</p>
          <p>Clique no botão abaixo para começar a jogar</p>
          <button onClick={startGame}>Começar o jogo</button>
      </div>
    )
  }
  
  export default StartScreen