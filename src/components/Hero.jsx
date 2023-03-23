import React, { useEffect, useState, useRef } from 'react'
import hero from '../../../heroexample.jpg'
import '../index.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Hero = () => {

    const slideCarrusel = useRef(null);

    let imgsprueba = [{
        img: 'https://carrefourar.vtexassets.com/assets/vtex.file-manager-graphql/images/416c7e99-5e63-4444-a679-7b8f3f029793___3a587a031043441a3e1e81bcd067a99a.png'
    }, {
        img: 'https://carrefourar.vtexassets.com/assets/vtex.file-manager-graphql/images/a0fac833-3012-4ef4-b305-35b9dfbfa6c0___d65d412500f8d2a1861d7a4afeff1ce8.png'
    }, {
        img: 'https://carrefourar.vtexassets.com/assets/vtex.file-manager-graphql/images/81497cbf-1faf-40c7-9080-49236e47e9b5___3ed572e57a4e0f204205db03aaf7243f.jpg'
    }, {
        img: 'https://carrefourar.vtexassets.com/assets/vtex.file-manager-graphql/images/65f7111f-90dd-426a-9411-0eefaecf553c___31da1c449c914112d7b79dc1829c9f51.jpg'
    }]

    const leftClick = () => {
        const primerElemento = slideCarrusel.current.children[0];
        let width = slideCarrusel.current.offsetWidth;
        console.log(primerElemento);
        console.log(width);
        slideCarrusel.current.children[0].style.transform = `translateX(-${width}px)` 
        slideCarrusel.current.children[0].style.transition = `transform 1000ms ease-out` 

        slideCarrusel.current.addEventListener('transitionend', ()=> {
            slideCarrusel.current.children[0].style.transform = `translateX(0px)`; 
            slideCarrusel.current.children[0].style.transition = `none`;

            slideCarrusel.current.appendChild(primerElemento);
        })

        console.log(slideCarrusel)
    };



    return (
        <div>
            <div className='max-w-[1440px] my-0 mx-auto h-[600px] relative flex
            ' 
            
            >
                

                <div className='flex flex-nowrap w-full h-full bg-red-100 '
                ref={slideCarrusel}
                >
                    {
                        imgsprueba?.length > 0 && imgsprueba.map((item,index)=> {
                            return (
                                <img key={index} src={item.img} alt="img" className='img-size'/>
                            )
                        })
                    }
                </div>

                
                {/* Left Arrow */}
                <button className='opacity-50 hover:opacity-100 cursor-pointer absolute top-0 bottom-0 m-auto bg-[#515151b3] w-[30px] h-[72px] flex items-center justify-center 
                z-10'
                onClick={leftClick}
                >
                    <BsChevronLeft size={25} />
                </button>

                {/* Right Arrow */}
                <button className='opacity-50 hover:opacity-100 cursor-pointer absolute top-0 bottom-0 right-0 m-auto bg-[#515151b3] w-[30px] h-[72px] flex items-center justify-center'>
                    <BsChevronRight size={25} />
                </button>



            </div>

            <div className='max-w-6xl my-0  mx-auto flex  items-center justify-center mt-[10px] gap-3 '>

                {/* ACA SE MUESTRA LOS CUADRADITOS PEQUEÑOS */}
                <button className={`w-[15px] h-[15px] rounded-[50%] bg-gray-400  hover:cursor-pointer`}></button>

            </div>


        </div>
    )
}

export default Hero



