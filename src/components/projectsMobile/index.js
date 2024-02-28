import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CardsMobile = ({ name, disc, img , href }) => {



    return (
        <div className="w-[100%] bg-[#111010]  h-[100%]">
            <div className="w-[100%] h-[350px] ">
                <figure className="p-[20px] rounded-md">
                    <img
                        src={img}
                        alt=""
                    />
                </figure>
                <h1 className="text-white font-bold text-2xl">{name}<span className="text-[#00f7ef]">.</span></h1>
            </div>
            <div className="w-[100%]  flex justify-center ">
                <p className="text-white  text-xl w-[80%] h-[250px]">{disc}</p>
            </div>
            <div className="w-[100%]  h-[70px]">
                <button
                    data-te-ripple-init
                    data-te-ripple-color="light"

                    className=" hover:scale-105 rounded-full w-[200px] p-2 text-[#111010] font-bold  bg-[#00f7ef] text-2xl text-center ">
                    <a href={href}>
                        Acessar
                    </a>
                </button>
            </div>

        </div>
    )
}







const MobileProjects = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
    };

    return (
        <div className="w-[100%]  h-[800px] md:hidden mt-[110px] ">
            <h2 className="text-white text-3xl w-[100%] h-[40px] flex uppercase justify-center gap-3  font-bold">Meus<span className="text-[#00f7ef]">Projetos.</span></h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {/* Cards 1/2/3(Projetos) */}
                <SwiperSlide><CardsMobile
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    name="Lista Dinamica"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                    href="#"
                />
                </SwiperSlide>

                <SwiperSlide><CardsMobile
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    name="ChamaElas"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                    href="#"
                />
                </SwiperSlide>

                <SwiperSlide><CardsMobile
                    img="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    name="MoiraHair"
                    disc="Discover the captivating beauty of Antelope Canyon red sandstone formations and intricate play of light and shadows."
                    href="#"
                />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>


        </div>
    )
}


export default MobileProjects