import Cards from "../cards"



const Especialidades = () => {
    return (
        <div className="w-[100%] flex flex-col justify-center h-[100%] bg-[#111010] md:mt-0 mt-[80px]   " id="Especialidades">
            <p className="text-white justify-center gap-3 text-2xl font-bold flex w-[100%] h-[30px]">MINHAS
                <span className="text-[#00f7ef]">ESPECIALIDADES.</span></p>
            <div className="p-[10px] mt-5">
                <div className="md:flex md:flex-row md:justify-around md:mt-[12px] flex flex-col gap-3 ">
                    <Cards
                        icon="javascript"
                        text="JavaScript"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." /> 
                    <Cards
                        icon="react"
                        text="ReactJs"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                    />
                    <Cards
                        icon="github1"
                        text="Github"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                    />
                </div>
                <div className="md:flex  md:flex-row md:justify-around md:mt-5 mt-[12px] flex flex-col md:ml-0  md:gap-0 gap-3">
                    <Cards
                        icon="html"
                        text="HTML"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                    />
                    <Cards
                        icon="bootstrap"
                        text="Bootstrap"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." />
                    <Cards
                        icon="css"
                        text="Css"
                        disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." />
                </div>

            </div>
        </div>
    )
}




export default Especialidades