import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";

export default function Sobre() {
    return (
        <div className="w-screen h-screen flex flex-row flex-wrap bg-white justify-center items-center">
            <Header />
            <div className="flex w-screen sm:w-3/5 h-4/6 p-6">
                <div className="w-full h-6/6 bg-neutral-50 rounded-lg shadow-lg p-6">
                    <h1 className="sm:text-6xl text-4xl text-center font-black mb-16">
                        <span className="text-orange-300">Event</span>Hub
                    </h1>
                    <h2 className="text-2xl font-black mb-8">Olá <span className="text-orange-300">V</span>isitante,</h2>    
                    <p className="text-xl font-black">
                    Este é um projeto desenvolvido durante o bootcamp da Atlântico. 
                    Para mais informações, acesse <a className="text-orange-300" href="https://github.com/avanti-02-atv/event-frontend/tree/main">nosso repositório</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}