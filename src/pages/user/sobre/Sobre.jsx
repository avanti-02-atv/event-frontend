import UserFooter from "../../../components/User/Footer/UserFooter";
import UserHeader from "../../../components/User/header/UserHeader";

export default function Sobre() {
	return (
		<div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
			<UserHeader />
			<div className="flex-grow p-6 max-w-full">
				<div className="w-full bg-neutral-50 rounded-lg shadow-lg p-6">
					<h1 className="sm:text-6xl text-4xl text-center font-black mb-16">
						<span className="text-orange-300">Event</span>Hub
					</h1>
					<h2 className="text-2xl font-bold mb-8">Olá <span className="text-orange-300">Visitante</span>, Bem-vindo! </h2>
					<p className="text-xl font-semibold">
						Cansado de perder os melhores eventos da sua região?

						O EventHub é a sua solução completa para encontrar e gerenciar eventos culturais imperdíveis!
					</p>
					<br />
					<h3 className="text-2xl font-bold">Com o <span className="text-orange-300">Event</span>Hub, você pode:</h3>
					<ul className="list-inside list-none md:list-disc text-xl font-semibold pl-4 md:pl-0">
						<li>
							Descobrir eventos em sua área de interesse, como shows, peças de teatro, exposições de arte e muito mais.
						</li>
						<li>
							Filtrar eventos por data, local e categoria para encontrar exatamente o que você procura.
						</li>
					</ul>
					<br />
					<h3 className="text-2xl font-bold">
						O <span className="text-orange-300">Event</span>Hub é a ferramenta perfeita para quem:
					</h3>
					<ul className="list-inside list-none md:list-disc text-xl font-semibold pl-4 md:pl-0">
						<li>
							Ama eventos culturais e quer se manter atualizado sobre as últimas novidades.
						</li>
						<li>
							Está sempre em busca de novas experiências e quer descobrir eventos diferentes.
						</li>
						<li>
							Quer economizar tempo na busca por novos eventos.
						</li>
					</ul>
					<br />
					<p className="text-xl font-black">
						Este é um projeto desenvolvido pela equipe HTTP Heroes durante o bootcamp de Desenvolvimento FullStack da Atlântico.
						Para mais informações, acesse <a target="_blank" className="text-orange-300 underline underline-offset-1" href="https://github.com/avanti-02-atv/event-frontend/tree/main">nosso repositório</a>.
					</p>
				</div>
			</div>
			<UserFooter />
		</div>
	);
}
