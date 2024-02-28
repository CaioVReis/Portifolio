import Lego from "../Banner/Lego.jpeg"


const Banner = () => {
    return (
        <div className="w-[100%] h-[100%] md:flex md:flex-row flex flex-col-reverse" id="Inicio">

            <aside className="md:w-[55%] md:h-full md:flex-col md:flex flex flex-col bg-[#111010]">
                <p className="text-xl">
                    <p className="text-white text-center  md:text-left font-sans md:text-3xl font-bold mt-[50px] md:mt-[180px] md:ml-[50px]  md:w-[450px]">
                        TRANFORMANDO IDEIAS EM
                    </p><p className="text-white font-sans font-bold md:text-3xl flex justify-center md:justify-start md:ml-[50px] md:flex md:w-[450px]">
                        REALIDADE DIGITAL<p className="text-[#00f7ef]">.</p>
                    </p>
                </p>
                <p className="text-lg">
                    <p className="md:w-[550px] mt-5 mb-5 md:text-base md:mb-0 text-center md:text-left p-2 md:ml-[43px] md:mt-5 md:h-[100px] text-white font-sans   md:p-2">
                        Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante, funcional, intuitiva e otimização para resultados, estou pronto para criar a presença online dos meus sonhos.
                    </p>
                </p>
                <div className="md:w-[100%] flex justify-center md:justify-start"> <a href="#Contato" >
                    <p

                        data-te-ripple-init
                        data-te-ripple-color="light"


                        className="w-[300px] h-[45px]  md:text-lg md:w-[230px]  md:h-[40px]  md:p-2 text-[#111010] hover:scale-105 bg-[#00f7ef]  font-bold md:ml-[50px]  rounded-full md:text-center">
                        <p className="md:hidden text-2xl text-center h-[45px] border border-[#00f7ef] rounded-full w-[300px] "> <p className="mt-1">Entrar Em Contato</p> </p>  {/* Mobile */}
                        <p className="hidden md:block ">Entrar Em Contato</p> {/* Desktop */}
                    </p>
                </a></div>

            </aside>

            <main className="w-[100%] flex justify-center md:flex md:justify-center  md:h-0    bg-[#111010] ">

                <figure className="md:mb-0 mb-5">
                    <img

                        src={Lego}
                        alt="banner lego"
                        className="rounded-full w-[300px] md:mt-[120px]  flutuar border  border-[#00f7ef] shadow-2xl shadow-[#00f7ef]"
                    />
                </figure>

            </main>

        </div>
    )
}



export default Banner