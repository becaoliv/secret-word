import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ScoreProps {
  score: number;
  prevScore: boolean;
  applyDropShadow: boolean;
}

const Score = ({score, prevScore, applyDropShadow}: ScoreProps) => {
  return (
    <div className={twMerge( clsx("rounded-lg mb-5 py-2 px-5 w-fit rounded-full flex items-center justify-center", applyDropShadow ? "border-3 border-solid border-sky-400 drop-shadow-sky-400/50 drop-shadow-[0_0_10px] bg-sky-700 text-gray-300" : "text-gray-400"))}>
      <p className="font-medium text-sm">{prevScore ? <span>Pontuação anterior:</span> : <span>Pontuação:</span>} </p>
      <span className={twMerge(clsx("ml-2 font-semibold text-md", applyDropShadow ? "text-yellow-400" : "text-gray-400"))}>{score}</span>
    </div>
  )
}

export default Score