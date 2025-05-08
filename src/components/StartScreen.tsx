import CardTemplate from "./CardTemplate";

interface StartScreenProps {
    startGame: () => void;
}

const StartScreen = ({startGame}: StartScreenProps) => {
    return (
      <CardTemplate additionalClasses="md:w-1/3 my-10">
        <div className="w-auto flex items-center justify-center flex-col text-lg">
          <p className="my-10 px-2">Clique no botão abaixo para começar a jogar</p>
          <button onClick={startGame} className="group rounded-full bg-sky-800 size-full py-1 text-gray-300 cursor-pointer">
            <span className="font-semibold transition-all drop-shadow-sky-800 drop-shadow-lg group-hover:drop-shadow-sky-400 group-hover:drop-shadow-[0_0_5px] group-hover:text-sky-300">
              Iniciar
            </span>
          </button>
        </div>
      </CardTemplate>
    )
  }
  
  export default StartScreen