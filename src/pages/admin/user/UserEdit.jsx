import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import FormUser from "../../../components/Admin/user/FormUser";

export default function CategoriaEdit() {
  return(
    <div className="h-screen w-screen overflow-x-hidden">
      <Header>
        <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
            Sair
        </button>
      </Header>
      <div className="p-12 sm:h-4/6 flex justify-center items-center">
        <FormUser />
      </div>
      <Footer />
    </div>
  )
}