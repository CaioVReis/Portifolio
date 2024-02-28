import Icons from "../icons/index"
import {
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Ripple });

const NavBar = () => {
    return (
        <div className="w-[100%] h-[60px]  fixed z-10 hidden  md:flex">

            <div className="w-[320px] h-[100%] bg-[#111010]">
                <a href="#ss">
                    <p className="font-extrabold  text-white mt-2 ml-[10px]">Desenvolvedor</p>
                    <div className="flex ml-[40px] -mt-[6px]">
                        <p className="font-body text-3xl text-white">CaioReis</p>
                        <Icons icon="code" />
                    </div>
                </a>
            </div>

          


            <div className="w-[640px] h-[100%] bg-[#111010] md:flex justify-evenly hidden">
                <button type="button"><a href="#Inicio" className="font-sans text-[#8a8888] hover:text-[#00f7ef]">Início</a></button>
                <button type="button"><a href="#Especialidades" className="font-sans text-[#8a8888] hover:text-[#00f7ef]">Especialidades</a></button>
                <button type="button"><a href="#Sobre" className="font-sans text-[#8a8888] hover:text-[#00f7ef]">Sobre</a></button>
                <button type="button"><a href="#Projetos" className="font-sans text-[#8a8888] hover:text-[#00f7ef]">Projetos</a></button>
            </div>


            <div className="w-[320px] h-[100%] bg-[#111010] flex justify-evenly ">
                <button className="ml-[100px]">
                    <a href="#Contato">
                        <p
                            data-te-ripple-init
                            data-te-ripple-color="light"

                            className=" md:block hidden hover:scale-105 rounded-full w-[150px] p-2 text-[#111010] font-bold  bg-[#00f7ef] text-center ">
                            Contato
                        </p></a>

                </button>
            </div>
          
        </div>
    )
}


export default NavBar;




