interface NameBoxDisplayProps{
  name: String
  isSelected: Boolean
}

export default function CardName({name, isSelected}:NameBoxDisplayProps){
  return (
    <div className={`max-w-sm p-6 rounded-lg ${isSelected?  'bg-yellow-400 text-black' : 'bg-blue-700 text-white' }`}>
            {name} 
    </div >
  )
}