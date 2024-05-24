import UserFooter from "../../../components/User/Footer/UserFooter";
import UserHeader from "../../../components/User/header/UserHeader";

export default function Sobre() {
	return (
		<div className="w-screen h-screen flex flex-row flex-wrap bg-white justify-center items-center">
			<UserHeader>
				<button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
					Sair
				</button>
			</UserHeader>
			<div className="flex w-screen sm:w-4/5 h-4/6 p-6">
				<div className="w-full h-6/8 bg-neutral-50 rounded-lg shadow-lg p-6">
					<h1 className="sm:text-6xl mt-14 text-4xl text-center font-black mb-16">
						<span className="text-orange-300">Event</span>Hub
					</h1>
					<h2 className="text-2xl font-black mb-8 text-center">Olá <span className="text-orange-300">V</span>isitante,</h2>
					<p className="text-xl font-black text-center">
						Este é um projeto desenvolvido durante o bootcamp da Atlântico.
						Para mais informações, acesse <a className="text-orange-300" href="https://github.com/avanti-02-atv/event-frontend/tree/main">nosso repositório</a>.
					</p>
				</div>

			</div>

			<div className="w-full flex  flex-col mb-2 font-black">
				<h1 className="m-auto mb-6 text-2xl font-black text-center bg-white mt-24">
					Time de Desenvolvimento
				</h1>
			</div>

			<div className="w-full max-w-sm m-2 mb-4 bg-neutral-50 border border-orange-950 rounded-lg shadow dark:border-orange-900">

				<div className="flex flex-col items-center pb-10">
					<img className="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/115481452?v=4" alt="Bonnie image" />
					<h5 className="mb-1 text-xl font-medium text-gray-900">Dhymas Gabriel da Silva Candeias</h5>
					<span className="text-sm text-gray-500">Full Stack Developer</span>
					<div className="flex mt-4 md:mt-6">
						<a href="https://github.com/DhymasG" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
						text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:ring-orange-600">GitHub</a>
					</div>
				</div>
			</div>

			<div className="w-full max-w-sm m-2 mb-4 bg-neutral-50 border border-orange-950 rounded-lg shadow dark:border-orange-900">

				<div className="flex flex-col items-center pb-10">
					<img className="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/97753490?v=4" alt="Bonnie image" />
					<h5 className="mb-1 text-xl font-medium text-gray-900">Fulgêncio Thierry Silva</h5>
					<span className="text-sm text-gray-500">Full Stack Developer</span>
					<div className="flex mt-4 md:mt-6">
						<a href="https://github.com/FThierryDev" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
						text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:ring-orange-600">GitHub</a>
					</div>
				</div>
			</div>

			<div className="w-full max-w-sm m-2 mb-4 bg-neutral-50 border border-orange-950 rounded-lg shadow dark:border-orange-900">

				<div className="flex flex-col items-center pb-10">
					<img className="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/136404651?v=4" alt="Bonnie image" />
					<h5 className="mb-1 text-xl font-medium text-gray-900">Luiz Eduardo Silva Costa</h5>
					<span className="text-sm text-gray-500">Full Stack Developer</span>
					<div className="flex mt-4 md:mt-6">
						<a href="https://github.com/LuizEduardoSC" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
						text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:ring-orange-600">GitHub</a>
					</div>
				</div>
			</div>

			<div className="w-full max-w-sm m-2 mb-4 bg-neutral-50 border border-orange-950 rounded-lg shadow dark:border-orange-900">

				<div className="flex flex-col items-center pb-10">
					<img className="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/65135567?v=4" alt="Bonnie image" />
					<h5 className="mb-1 text-xl font-medium text-gray-900">Robson do Amaral Diógenes</h5>
					<span className="text-sm text-gray-500">Full Stack Developer</span>
					<div className="flex mt-4 md:mt-6">
						<a href="https://github.com/robsonad07" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
						text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:ring-orange-600">GitHub</a>
					</div>
				</div>
			</div>

			<UserFooter />
		</div>
	);
}