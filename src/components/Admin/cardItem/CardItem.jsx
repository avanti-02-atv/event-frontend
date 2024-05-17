export default function CardItem({name, children}) {
  return(
    <div className="flex flex-col justify-center items-center shadow-lg bg-white size-36 rounded-lg border-4 border-orange-300">
      {children}
      <h3 className="text-orange-300 font-black text-xl">{name}</h3>
      
    </div>
  )
}