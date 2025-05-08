import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CardTemplateProps {
  additionalClasses: string;
  children: React.ReactNode;
}

const CardTemplate = ({additionalClasses, children}: CardTemplateProps) => {
  return (
    <div className={twMerge(clsx(additionalClasses, "bg-gray-800 rounded-sm shadow-lg p-7 text-gray-300 mb-4"))}>
        {children}
    </div>
  )
}

export default CardTemplate