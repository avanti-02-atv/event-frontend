import { CalendarDaysIcon, MapIcon, TagIcon, UsersIcon } from "@heroicons/react/24/outline";
import CardItem from '../../../components/Admin/cardItem/CardItem';
import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";


export default function Home() {
  return (
    <div className="flex flex-row flex-wrap h-screen w-screen">
      <Header>
        <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
            Sair
        </button>
      </Header>
      <div className="flex flex-col sm:flex-row sm:h-4/6 w-screen justify-center items-center m-8 sm:m-0 sm:space-x-4 lg:space-x-8">
        <div>
          <CardItem name="Eventos">
            <CalendarDaysIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div>
          <CardItem name="Users">
            <UsersIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div>
          <CardItem name="Categorias">
            <TagIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div>
          <CardItem name="Locais">
            <MapIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
      </div>
      <Footer />
    </div>

  )
}