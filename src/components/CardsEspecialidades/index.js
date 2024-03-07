import Cards from "../cards/index"


const CardsEsp = () => {

    window.addEventListener("load", () => {
        const MyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ShowEixo')
                }
                else {
                    entry.target.classList.remove('ShowEixo')
                }
            })
        })

        const elements = document.querySelectorAll('.NoEixo')

        elements.forEach((element) => MyObserver.observe(element))









    })


    return (
        <div className="md:grid md:grid-cols-3">
            <div className="NoEixo mt-[15px]"> {/*1*/}

                <Cards
                    icon="javascript"
                    text="JavaScript"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." />
            </div>

            <div className="NoEixo mt-[15px]"> {/*2*/}

                <Cards
                    icon="react"
                    text="ReactJs"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." />
            </div>

            <div className="NoEixo mt-[15px]"> {/*3*/}

                <Cards
                    icon="github1"
                    text="Github"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." />
            </div>

            <div className="NoEixo mt-[15px]"> {/*4*/}
                <Cards
                    icon="html"
                    text="HTML"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                />
            </div>

            <div className="NoEixo mt-[15px]"> {/*5*/}
                <Cards
                    icon="bootstrap"
                    text="Bootstrap"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                />
            </div>

            <div className="NoEixo mt-[15px]"> {/*6*/}
                <Cards
                    icon="css"
                    text="Css"
                    disc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                />
            </div>

        </div>
    )
}


export default CardsEsp