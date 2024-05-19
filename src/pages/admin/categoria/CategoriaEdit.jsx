import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import FormCategoria from "../../../components/Admin/categoria/FormCategoria";

export default function CategoriaEdit() {
  return(
    <div className="h-screen sm:w-11/12 w-screen">
      <Header />
      <div className="h-4/6 flex justify-center items-center">
        <FormCategoria />
      </div>
      <Footer />
    </div>
  )
}