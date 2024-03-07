import CardsEsp from "../CardsEspecialidades/index"



const Especialidades = () => {

   

    return (
        <div className="w-[100%] flex flex-col justify-center h-[100%] bg-[#111010] md:mt-0 mt-[80px]   " id="Especialidades">
            <p className="text-white justify-center gap-3 text-2xl font-bold flex w-[100%] h-[30px]">MINHAS
                <span className="text-[#00f7ef]">ESPECIALIDADES.</span></p>

            <div className="md:w-[100%] md:h-[730px]">
                <div className="TryAnimation hidden md:block">
                    <CardsEsp />
                </div>
                <div className=" md:hidden">
                    <CardsEsp />
                </div>
            </div>


        </div>

    )
}




export default Especialidades