import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Especialidades from "./components/Especialidade"
import Sobre from "./components/Sobre"
import Projects from "./components/projects/index"
import Rodape from "./components/rodape/index"
import SobreMobile from "./components/sobreMobile/index"
import {
  Animate,
  initTE,
} from "tw-elements";
import Contato from "./components/contato";


initTE({ Animate });

export default function App() {



  return (
    <>
      

      <nav className="ContainerPrimary  w-[100%] h-[70px]">
        <NavBar />
      </nav>
      <body className="ContainerPrimary  md:w-[100%] md:h-[730px]  ">

        <Banner />

        <Especialidades />

        <Sobre />
        <SobreMobile hidden="hidden"/>

        <Projects />

        <Contato />

        <Rodape/>


      </body>
     

    </>

  );
}