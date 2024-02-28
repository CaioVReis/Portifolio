import Cardsproject from "../CardsProject"

const Projects = () => {
    return (
        <div className="w-[100%] h-[100%] hidden md:block " id="Projetos">
            <h3 className="text-white justify-center gap-1 text-2xl font-bold flex w-[100%] h-[30px]">MEUS<p className="text-[#00f7ef]">PROJETOS.</p></h3>

            <div className="grid grid-cols-3 gap-10 mt-[40px] ">
                <Cardsproject
                    tittle="Lista Dinamica"
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                />
                 <Cardsproject
                    tittle="Lista Dinamica"
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                />
                 <Cardsproject
                    tittle="Lista Dinamica"
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                />




            </div>

        </div>
    )
}

export default Projects