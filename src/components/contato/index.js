// Initialization for ES Users
import {
    Input,
    initTE,
} from "tw-elements";

initTE({ Input });

const Contato = () => {
    function Alert() {
        alert("Seu email foi enviado com sucesso")
    }
    return (
        <div className="w-[100%] h-[100%] bg-[#111010] md:mt-0 mt-[150px] " id="Contato">
            <h1 className="text-white justify-center gap-1 text-2xl  font-bold my-[20px] flex w-[100%] h-[30px]">ENTRAR EM <p className="text-[#00f7ef]">CONTATO.</p></h1>
            <div className="flex justify-center">
                <div className="md:bg-[#1E1D1D] rounded-2xl w-[500px]  md:border mb-[20px] flex justify-center  items-center md:min-h-dvh">
                    <section className="flex items-center justify-center flex-col py-[10px] px-[45px] md:w-[500px] w-[100%]">
                        <form action="https://api.staticforms.xyz/submit" method="post" className="flex flex-col w-[100%]">
                            <label className="text-[#00f7ef]">Nome</label>
                            <input type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required className="md:placeholder:text-base placeholder:text-black placeholder:text-2xl"></input>
                            <label className="text-[#00f7ef]">Email</label>
                            <input type="email" name="name" placeholder="Digite seu email" autoComplete="off" required className="md:placeholder:text-base placeholder:text-black placeholder:text-2xl"></input>
                            <label className="text-[#00f7ef]">Mensagem</label>
                            <textarea required className="p-[10px] placeholder:text-black md:placeholder:text-base placeholder:text-2xl outline-none border-[0px] text-[15px] mb-[30px]" name="message" cols="30" rows="10" wrap="hard" placeholder="Digite sua mensagem"></textarea>
                            <button className="p-[15px] cursor-pointer bg-transparent border-[2px] border-solid text-[#FFFFFF] font-bold mb-[20px]" type="submit" onClick={Alert} >Enviar</button>

                            <input type="hidden" name="accessKey" value="1a881123-68c2-45c5-bf26-9fda5fd2ae8a" />
                            <input type="hidden" name="redirectTo" value="http://localhost:3000" />
                        </form>
                    </section>

                </div>

            </div>

        </div>
    )
}

export default Contato