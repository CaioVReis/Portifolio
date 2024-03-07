import Lego from "../Banner/Lego.jpeg"


const CardCircule = ({ShowAnimation}) => {

    window.addEventListener("load", () => {
        const MyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Show')
                }
                else {
                    entry.target.classList.remove('Show')
                }
            })
        })

        const elements = document.querySelectorAll('.NoShow',)

        elements.forEach((element) => MyObserver.observe(element))









    })


    return (
        <>
            <div className=" w-[400px] ml-10  md:h-[100%]   mt-20 md:mt-0 hidden md:block  "> {/* Desktop*/}
                <div className={`${ShowAnimation} flex justify-center`}>
                    <figure>
                        <img

                            src={Lego}
                            alt="banner lego"
                            className="rounded-full   w-[300px] md:mt-[120px]  flutuar md:border border-[3px]  border-[#00f7ef] shadow-2xl md:shadow-[#00f7ef]"
                        />
                    </figure>
                </div>
            </div>


            <div className="w-[100%]   md:h-[100%]   mt-20 md:mt-0  md:hidden  "> {/* mobile*/}
                <div className="flex justify-center  ">
                    <figure>
                        <img

                            src={Lego}
                            alt="banner lego"
                            className="rounded-full   w-[300px] md:mt-[120px]  flutuar md:border border-[3px]  border-[#00f7ef] shadow-2xl md:shadow-[#00f7ef]"
                        />
                    </figure>
                </div>
            </div>
        </>
    )
}



export default CardCircule