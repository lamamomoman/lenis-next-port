import React, { useEffect, useRef } from "react";
import { useBodyRef } from "../Components/BodyRefContext";
import Image from "next/image";

import { AnimatedElement, WordSplit } from "../Components/Utilities";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomePage = () => {

    const homeRef = useRef();

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(homeRef.current, {
            ease: 'bounce.inOut',
            scrollTrigger: {
                trigger: homeRef.current,
                pin: homeRef.current.parentElement,
                anticipatePin: 1,
                pinSpacing: false,
            }
        })

    }, []);

    return <section ref={homeRef} id="home-page" className="relative top-0 overflow-hidden h-screen w-screen border-[20px] max-[500px]:border-[10px] border-white bg-black rounded-[60px] max-[500px]:rounded-[30px] p-[7em] max-[500px]:p-[1em] flex flex-col justify-center">
        <div id="home-page-bg" className="absolute w-screen h-full left-0 top-0 z-0 flex justify-center items-center">
            <Image priority alt='none' src="/aboutBG.jpg" height={1} width={1} className="w-full"/>
        </div>
        <div className="w-full" id="home-heading">
            <AnimatedElement staggerEl="#letter-cover" config={{
                from: {
                    transform: 'translate(0%, 150%)'
                },
                to: {
                    transform: 'translate(0%, 0%)',
                    stagger: 0.05,
                },
                scrollTrigger: {
                    scrub: 2,
                    start: 'top 10%',
                    end: 'bottom center'
                }
            }}>
                <WordSplit>
                    <h1 words={false} letterCoverStyle="bg-white translate-y-[0]" splitStyle="flex h-full justify-center items-center" className="overflow-hidden font-extrabold text-white text-[10vw] max-[500px]:text-[15vw] flex-1 justify-center flex">RED</h1>
                    <h1 words={false} letterCoverStyle="bg-white translate-y-[0]" splitStyle="flex h-full justify-center items-center" className="overflow-hidden font-extrabold text-white text-[10vw] max-[500px]:text-[15vw] flex-1 justify-center flex">MANGO</h1>
                </WordSplit>
            </AnimatedElement>

        </div>
        <div id="home-content" className="relative w-full flex justify-center z-2">
            <p className="text-white text-xl max-[500px]:text-sm max text-center w-1/2 max-[500px]:w-full flex items-center mt-16 max-[500px]:mt-8">Seasoned software developer crafting innovative digital solutions, from web pages to complex applications, all while embracing the journey of code magic.</p>
        </div>
    </section>

}

export default HomePage;