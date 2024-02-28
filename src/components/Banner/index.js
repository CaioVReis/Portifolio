import Lego from "../Banner/Lego.jpeg"


const Banner = () => {
    return (
        <div className="w-[100%] h-[100%]  md:flex md:flex-row flex flex-col-reverse" id="Inicio">

            <div className="md:w-[55%]  md:h-full w-[100%]  md:flex-col md:flex flex flex-col bg-[#111010]">



                <div className="md:w-[550px]  md:block mt-[50px] md:mt-[200px] md:justify-start">
                    <div>
                        <div className="text-2xl">
                            <h2 className="text-white  md:text-3xl  md:font-bold   md:text-left font-bold  text-center">TRANFORMANDO IDEIAS EM <br /> REALIDADE DIGITAL<span className="text-[#00f7ef]">.</span></h2></div>
                     <div className="md:p-0 p-2 ">   <p className="text-white font-sans  text-base md:text-left  text-center mt-5 ">Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante, funcional, intuitiva e otimização para resultados, estou pronto para criar a presença online dos meus sonhos.</p></div>
                    </div>
                    <div className="mt-[16px] flex justify-center md:flex md:justify-start">
                        <a href="#Contato" >
                            <div
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="w-[250px] h-[45px]   md:w-[250px]  md:h-[40px]   text-[#111010] hover:scale-105 bg-[#00f7ef]  font-bold   rounded-full md:text-center">
                                <span className="md:hidden  text-center text-lg  border-[#00f7ef] rounded-full w-[300px] "><p className="p-2">Entrar Em Contato</p> </span>  {/* Mobile */}
                                <p className="hidden md:block text-lg p-2 ">Entrar Em Contato</p> {/* Desktop */}
                            </div>
                        </a></div>
                </div>

            </div>

            <div className=" w-[100%] flex justify-center h-[100%]">

                <figure className="">
                    <img

                        src={Lego}
                        alt="banner lego"
                        className="rounded-full  w-[300px] md:mt-[120px]  flutuar md:border border-[3px]  border-[#00f7ef] shadow-2xl md:shadow-[#00f7ef]"
                    />
                </figure>

            </div>

        </div>
    )
}



export default Banner