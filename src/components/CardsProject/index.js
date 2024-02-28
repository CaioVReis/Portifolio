const Cardsproject = ({
    tittle, img, disc
}) => {
    return (
        <div className="block w-[386px] h-[550px] bg-[#1E1D1D] rounded-md  text-center">
            <img
                src={img}
                alt="projetoNumberOne"
                className="h-[256px] w-[100%] rounded-md"
            />
            <h1 className="text-white font-bold text-2xl mt-[12px] flex justify-center">{tittle}<span className="text-[#00f7ef]">.</span></h1>
            <p className=" w-[80%] h-[180px] ml-[39px] text-lg text-white font-sans p-3">{disc}</p>
            <a href="#">
            <button
                
                        data-te-ripple-init
                        data-te-ripple-color="light"

                        className=" hover:scale-105 rounded-full w-[150px] p-2 text-[#111010] font-bold  bg-[#00f7ef] text-center ">
                      Acessar
                    </button></a>
        </div>


    )
}


export default Cardsproject