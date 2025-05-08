interface CardLetterTemplateProps {
    children: React.ReactNode;
}

const CardLetterTemplate = ({children}: CardLetterTemplateProps) => {
  return (
    <div className="w-25 h-25 bg-gray-100 mx-3 rounded-md">
        {children}
    </div>
  )
}

export default CardLetterTemplate