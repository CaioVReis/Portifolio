import Icons from "../icons"


const Button = ({ icon, href }) => {
    return (
        <div className="  bg-[#1E1D1D]  rounded-lg w-[80px] h-[40px] flex justify-center">

            <a className="mt-[3px]" href={href} target="_blank" ><Icons icon={icon} /></a>




        </div>
    )
}


export default Button