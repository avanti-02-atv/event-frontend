import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import FormCategoria from "../../../components/Admin/categoria/FormCategoria";

export default function CategoriaEdit() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header>
        <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
          Sair
        </button>
      </Header>
      <div className="p-4 flex-1 flex justify-center items-center overflow-y-auto">
        <FormCategoria />
      </div>
      <Footer />
    </div>
  );
}