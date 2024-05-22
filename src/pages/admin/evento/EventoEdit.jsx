import FormEvento from "../../../components/Admin/evento/FormEvento";
import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import LougoutButton from "../../../components/button/LogoutButton";

export default function CategoriaEdit() {
  return(
    <div className="h-screen w-screen overflow-x-hidden">
      <Header>
        <LougoutButton />
      </Header>
      <div className="p-12 sm:h-4/6 flex justify-center items-center">
        <FormEvento />
      </div>
      <Footer />
    </div>
  )
}