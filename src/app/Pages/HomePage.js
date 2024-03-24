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

    return <section ref={homeRef} id="home-page" className="relative top-0 overflow-hidden h-screen w-screen border-[20px] border-white bg-black rounded-[60px] p-[7em] flex flex-col justify-center">
        <div id="home-page-bg" className="absolute w-screen h-full left-0 top-0 z-0">
            <Image priority alt='none' src="/aboutBG.jpg" height={10} width={10} className="w-full h-full" />
        </div>
        <div className="w-full" id="home-heading">
            <AnimatedElement staggerEl="#letter-cover" config={{
                from: {
                    transform: 'translate(0%, 100%)'
                },
                to: {
                    transform: 'translate(0%, 0%)',
                    stagger: 0.05,
                },
                scrollTrigger: {
                    scrub: 0.2,
                    start: 'top 30%',
                    end: 'bottom top'
                }
            }}>
                <WordSplit>
                    <h1 words={false} letterCoverStyle="bg-white translate-y-[0]" splitStyle="flex h-full justify-center items-center" className="overflow-hidden font-extrabold text-white text-[10vw] flex-1 justify-center flex">RED MANGO</h1>
                </WordSplit>
            </AnimatedElement>

        </div>
        <div id="home-content" className="relative w-full flex justify-center z-2">
            <p className="text-white text-xl text-center w-1/2 flex items-center mt-16">Seasoned software developer crafting innovative digital solutions, from web pages to complex applications, all while embracing the journey of code magic.</p>
        </div>
    </section>

}

export default HomePage;