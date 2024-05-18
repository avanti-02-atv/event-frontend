
export default function Sobre() {
    return (
        <div className="container-sobre w-full flex flex-col mb-24 sobrefonte">
            <div className=" flex flex-col w-3/6 m-auto">
                <h1 className="m-auto mb-24 text-4xl font-bold text-center ">
                    PRÓXIMOS  EVENTOS
                </h1>

                {/* Primeira Imagem */}
                <div className="flex flex-col md:flex-row items-center mb-4 text-shadow">
                    <img className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110" src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/quimico.png?updatedAt=1707237585329" alt="Imagem do Projeto" width="300" height="150" />
                    <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic totam natus quaerat mollitia est repudiandae minus et impedit. Maxime eum autem deserunt recusandae quibusdam ipsum error esse nulla cum?
                    </p>
                </div>

                {/* Segunda Imagem */}
                <div className="flex flex-col md:flex-row items-center mb-4 ">
                    <img className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110" src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/e-comerce.png?updatedAt=1707236142602" alt="Imagem do Projeto" width="300" height="150" />
                    <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic totam natus quaerat mollitia est repudiandae minus et impedit. Maxime eum autem deserunt recusandae quibusdam ipsum error esse nulla cum?
                    </p>
                </div>

                {/* Terceira Imagem */}
                <div className="flex flex-col md:flex-row items-center mb-4">
                    <img className="mx-auto mb-4 md:mb-0 rounded-full transform transition-transform duration-500 hover:scale-110" src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/desing.png?updatedAt=1707236124313" alt="Imagem do Projeto" width="300" height="150" />
                    <p className="text-lg md:ml-4 leading-7 text-justify mb-6 p-4 bg-white text-shadow transform transition-transform duration-500 hover:scale-110">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic totam natus quaerat mollitia est repudiandae minus et impedit. Maxime eum autem deserunt recusandae quibusdam ipsum error esse nulla cum?
                    </p>
                </div>
            </div>
        </div>
    );
}