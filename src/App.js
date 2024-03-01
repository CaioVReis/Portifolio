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



  return (
    <>

      <header>
        <nav className="ContainerPrimary  w-[100%] h-[70px]">
          <NavBar />
          <NavMobile/>
        </nav>
      </header>
      <main className="ContainerPrimary  md:w-[100%] md:h-[730px]  ">
        

          <Banner />

          <Especialidades />

          <Sobre />
          <SobreMobile />

          <Projects />
          <MobileProjects/>

          <Contato />

          <Rodape />

     

      </main>


    </>

  );
}