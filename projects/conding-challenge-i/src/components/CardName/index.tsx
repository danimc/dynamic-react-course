interface NameBoxDisplayProps{
  name: String
  isSelected: Boolean
  highlightStyle: String
}

export default function CardName({name, isSelected, highlightStyle}:NameBoxDisplayProps){
  return (
    <div className={`max-w-sm p-6 rounded-lg ${isSelected?  highlightStyle : 'bg-blue-700 text-white' }`}>
            {name} 
    </div >
  )
}