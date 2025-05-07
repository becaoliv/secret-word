import CardTemplate from "./CardTemplate";
import Score from "./ScoreTemplate";

interface StartScreenProps {
    startGame: () => void;
    prevScore: number;
}

const StartScreen = ({startGame, prevScore}: StartScreenProps) => {
    return (
      <CardTemplate>
        <Score score={prevScore} prevScore={true} applyDropShadow={true}/>
        <div className="w-auto flex items-center justify-center flex-col text-lg">
          <p className="my-10 px-2 text-gray-300">Clique no botão abaixo para começar a jogar</p>
          <button onClick={startGame} className="group rounded-full bg-sky-800 size-full py-1 text-gray-300 cursor-pointer"><span className="font-semibold transition-all drop-shadow-sky-800 drop-shadow-lg group-hover:drop-shadow-sky-400 group-hover:drop-shadow-[0_0_5px] group-hover:text-sky-300">Play</span></button>
        </div>
      </CardTemplate>
    )
  }
  
  export default StartScreen