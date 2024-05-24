import { CalendarDaysIcon, MapIcon, TagIcon, UsersIcon } from "@heroicons/react/24/outline";
import CardItem from '../../../components/Admin/cardItem/CardItem';
import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import { useNavigate } from "react-router-dom";
import LougoutButton from "../../../components/button/LogoutButton";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap h-screen w-screen">
      <Header>
        <LougoutButton />
      </Header>
      <div className="flex flex-col sm:flex-row sm:h-4/6 w-screen justify-center items-center m-8 sm:m-0 sm:space-x-4 lg:space-x-8">
        <div onClick={() => navigate("/admin/evento")}>
          <CardItem name="Eventos">
            <CalendarDaysIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div onClick={() => navigate("/admin/user")}>
          <CardItem name="Users">
            <UsersIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div onClick={() => navigate("/admin/categoria")}>
          <CardItem name="Categorias">
            <TagIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
        <div onClick={() => navigate("/admin/local")}>
          <CardItem name="Locais">
            <MapIcon className="size-20 text-orange-300 group-hover:text-white" />
          </CardItem>
        </div>
      </div>
      <Footer />
    </div>

  )
}