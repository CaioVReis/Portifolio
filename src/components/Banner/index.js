
import CardCircule from "../CirculeCards/index"
import InfoBanner from "../InfoBanner/index"

const Banner = () => {





    return (
        <div className="w-[100%]   h-[100%] md:h-[730px]  md:flex md:flex-row flex flex-col-reverse" id="Inicio">

            <div className="md:w-[55%]  md:h-full w-[100%]  md:flex-col md:flex flex flex-col bg-[#111010]">

            <InfoBanner />

            </div>

            <CardCircule ShowAnimation={"NoShow"} />

        </div>
    )
}



export default Banner