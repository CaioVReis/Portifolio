import Icons from "../icons"


const Cards = ({ icon, text, disc }) => {
    return (
        <div className="w-[400px] h-[300px]  rounded-md bg-[#1E1D1D] border border-[#00f7ef] hover:shadow-md hover:shadow-[#00f7ef] hover:scale-105 ">
            <div className="w-[100%]  flex justify-center  h-[100px]"><Icons icon={icon} /></div>
            <div className=" w-[100%] mt-3 mb-5 text-center   h-[30px]"><p className="text-white font-bold text-2xl">{text}</p></div>
            <div className=" w-[96%] m-2 h-[130px] "><p className="text-white text-center font-sans p-2 text-pretty text-base">{disc}</p></div>

        </div>
    )
}

export default Cards