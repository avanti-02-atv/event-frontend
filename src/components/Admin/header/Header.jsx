export default function Header() {

  return (
    <header className="w-screen bg-neutral-50 h-1/6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="">
          <h3 className="text-4xl font-black"><span className="text-orange-300">Event</span>Hub</h3>
        </div>
        <div className="">
          <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
            Sair
          </button>
        </div>
      </nav>

    </header>
  )
}
