import Icons from "../icons"



function NavMobile() {

    window.addEventListener("load", () => {
        let btnmenu = document.getElementById('btn-menu')
        let menu = document.getElementById('menu-mobile')
        let overlay = document.getElementById('overlay-menu')

        btnmenu.addEventListener('click', () => {
            menu.classList.add('abrir-menu',)
        })

        menu.addEventListener('click', () => {
            menu.classList.remove('abrir-menu')
        })

        overlay.addEventListener('click', () => {
            menu.classList.remove('abrir-menu')
        })
    })




    return (
        <div className="md:hidden w-[100%]   h-[100px] flex flex-row">


            <div className="w-[50%]">

            </div>



            <div className="w-[50%] h-[100%] flex flex-row justify-end ">

                <div className="btn-abrir-menu" id="btn-menu">
                    {/* botao abrir */}
                    <Icons icon="Iconopen" />
                </div>


                <div className="menu-mobile" id="menu-mobile">

                    <div> {/* botao Fechar */}
                        <Icons icon="Iconclose" />
                    </div>

                    <div className="flex list-none flex-col text-end  text-[20px]  w-[100%]   font-semibold  mt-[10px]  ">

                        <li type="button" className="w-[100%] h-[50px] hover:bg-[#00f7ef]"><a href="#Inicio"><p className=" text-2xl text-[#FFFFFF] hover:text-black  mr-[20px] mt-2 ">Inicio</p></a></li>

                        <li type="button" className="w-[100%] h-[50px] hover:bg-[#00f7ef]"><a href="#Especialidades"><p className=" text-[#FFFFFF] hover:text-black text-2xl  mr-[20px] mt-2 ">Especialidade</p></a></li>

                        <li type="button" className="w-[100%] h-[50px] hover:bg-[#00f7ef]"><a href="#Sobre1" ><p className=" text-[#FFFFFF] hover:text-black text-2xl mr-[20px] mt-2 ">Sobre</p></a></li>

                        <li type="button" className="w-[100%] h-[50px] hover:bg-[#00f7ef]"><a href="#Projetos1" ><p className=" text-[#FFFFFF] hover:text-black text-2xl  mr-[20px] mt-2 ">Projetos</p></a></li>

                        <li type="button" className="w-[100%] h-[50px] hover:bg-[#00f7ef]"><a href="#Contato" ><p className="text-[#FFFFFF] hover:text-black  text-2xl mr-[20px] mt-2 ">Contato</p></a></li>

                    </div>

                </div>
                <div className="overlay-menu" id="overlay-menu">

                </div>
            </div>

        </div>
    )
}



export default NavMobile