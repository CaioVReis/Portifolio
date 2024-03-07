const InfoBanner = ()=>{

    window.addEventListener("auto", () => {
        const MyObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting){
              entry.target.classList.add('AnimeY')
            }
            else{
              entry.target.classList.remove('AnimeY')
            }
        })
        })
    
        const elements = document.querySelectorAll('.NoAnimeY',)
    
        elements.forEach((element) => MyObserver.observe(element))
    
    
    })


    return(
       



        <div className="md:w-[550px]  NoAnimeY md:ml-10 md:block mt-[50px] md:mt-[200px] md:justify-start">
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

    
    )
}


export default InfoBanner