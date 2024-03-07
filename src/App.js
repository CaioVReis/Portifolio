import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Especialidades from "./components/Especialidade"
import Sobre from "./components/Sobre"
import Projects from "./components/projects/index"
import Rodape from "./components/rodape/index"
import SobreMobile from "./components/sobreMobile/index"
import Contato from "./components/contato"
import MobileProjects from "./components/projectsMobile/index"
import NavMobile from "./components/Navmobile/index"

export default function App() {

  window.addEventListener("load", () => {
    const MyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('Show')
        }
        else{
          entry.target.classList.remove('Show')
        }
    })
    })

    const elements = document.querySelectorAll('.NoShow')

    elements.forEach((element) => MyObserver.observe(element))









  })




  return (
    <>

      <header>
        <nav className="ContainerPrimary  w-[100%] h-[70px]">
          <NavBar />
          <NavMobile />
        </nav>
      </header>
      <main className="ContainerPrimary  md:w-[100%] md:h-[730px]  ">

        <section className="">
          <Banner /></section>


        <section className="md:w-[100%] md:h-[730px]">
          <Especialidades /></section>


        <div>
          <Sobre /></div>


        <SobreMobile />
        <div>
          <Projects /></div>

        <MobileProjects />

        <Contato />

        <Rodape />



      </main>


    </>

  );
}