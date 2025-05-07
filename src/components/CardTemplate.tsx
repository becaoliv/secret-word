interface CardTemplateProps {
    children: React.ReactNode
}

const CardTemplate = ({children}: CardTemplateProps) => {
  return (
    <div className="bg-gray-800 rounded-sm shadow-lg p-7">
        {children}
    </div>
  )
}

export default CardTemplate