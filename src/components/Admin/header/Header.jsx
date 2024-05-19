export default function Header({children}) {

  return (
    <header className="w-screen bg-neutral-50 h-1/6">
      <nav className="sm:mx-auto max-w-7xl flex items-center justify-between p-2 sm:p-6 lg:px-8" aria-label="Global">
        <div className="">
          <h3 className="text-4xl font-black"><span className="text-orange-300">Event</span>Hub</h3>
        </div>
        <div className="">
          {children}
        </div>
      </nav>

    </header>
  )
}
