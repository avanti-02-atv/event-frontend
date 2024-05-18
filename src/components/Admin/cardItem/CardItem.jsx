export default function CardItem({name, children}) {
  return(
    <div className="group flex flex-col justify-center items-center shadow-lg bg-white size-44 rounded-lg border-4 border-orange-300 hover:bg-orange-300 hover:cursor-pointer hover:shadow-xl hover:shadow-orange-300">
      {children}
      <h3 className="group-hover:text-white text-orange-300 font-black text-xl">{name}</h3> 
    </div>
  )
}