import Button from "../buttons/index"



const Sobre = () => {
    return (
        <div className="md:w-[100%] md:h-[85%]  hidden md:block " id="Sobre" >

            <div className="md:mt-[100px] md:flex">
                <aside className=" md:w-[350px] md:h-[400px] m-10 ">
                    <img
                        src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/086.jpg"
                        alt=""
                        className="md:w-[100%] md:h-[100%] object-cover rounded-lg"
                    />
                </aside>
                <div className=" mt-[40px]  w-[812px] mr-[40px] mb-[40px] h-[398px] ">
                    <div className="  w-[270px] h-[80px]  ml-[20px]  p-2 ">
                        <p className="text-white text-2xl font-serif">Olá muito prazer,</p>
                        <div className="text-white text-2xl font-serif flex gap-4">sou<p className="text-[#00f7ef]">CAIO VINICIUS.</p></div>
                    </div>
                    <p className=" w-[80%] h-[120px] -mt-[10px] ml-[20px] mr-[20px] p-2">
                        <span className="text-white font-sans text-lg antialiased "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>

                    </p>
                    <p className=" w-[80%] h-[120px] mt-[10px] ml-[20px] mr-[20px] p-2">
                        <span className="text-white font-sans text-lg  antialiased "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>
                    </p>
                    <div className=" w-[632px]  h-[60px]  ml-[27px] mt-[10px] flex ">
                        <div className="flex gap-5">
                            <Button icon="github" href="https://github.com/CaioVReis" />
                            <Button icon="linkedin" href="https://www.linkedin.com/in/caiovreis" />
                            <Button icon="whatsapp" href="https://wa.me/5535998892347" />

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}


export default Sobre

