import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import FormCategoria from "../../../components/Admin/categoria/FormCategoria";
import LougoutButton from "../../../components/button/LogoutButton";

export default function CategoriaEdit() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header>
        <LougoutButton />
      </Header>
      <div className="p-4 flex-1 flex justify-center items-center overflow-y-auto">
        <FormCategoria />
      </div>
      <Footer />
    </div>
  );
}