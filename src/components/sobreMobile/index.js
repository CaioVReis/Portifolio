import Button from "../buttons/index"

const SobreMobile = () => {
    return (
        <div className="md:hidden bg-[#111010]">
            <div className="w-[100%] h-[990px] ">
                <p className="text-white text-3xl font-bold text-center mt-10">Olá muito prazer, sou</p>
                <p className="uppercase  text-2xl font-bold italic text-center text-[#00f7ef]">caio vinicius.</p>
                <div className="w-[100%]  h-[500px] flex justify-center">
                    <img
                        src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/086.jpg"
                        alt=""
                        className="w-[80%] h-[80%] object-cover m-[50px] rounded-lg"
                    />
                </div>
                <p className=" m-2 text-white text-center p-2 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                <div className="w-[100%]">
                <div className="flex justify-around mt-10">
                            <Button icon="github" href="https://github.com/CaioVReis" />
                            <Button icon="linkedin" href="https://www.linkedin.com/in/caiovreis" />
                            <Button icon="whatsapp" href="https://wa.me/5535998892347" />

                        </div>


                </div>
            </div>
        </div>
    )
}


export default SobreMobile