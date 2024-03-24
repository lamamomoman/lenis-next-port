import React, { useEffect } from "react";
import WordSplit, { AnimatedElement } from "../Components/Utilities";
import { useBodyRef } from "../Components/BodyRefContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroPage = () => {

    const bodyRef = useBodyRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: bodyRef.current.querySelector("#intro-page #intro-bottom-image"),
            endTrigger: bodyRef.current.querySelector("#projects-page"),
            pin: true,
            markers: true,
            anticipatePin: 1,
            pinSpacing: false
        });
    }, []);



    return <section className="relative h-auto" id="intro-page">
        <div id="intro-page-wrapper" className="flex flex-col h-full">
            <div id="intro-top" className="flex-1 flex flex-row items-center py-[2em]">
                <div id="intro-top-heading" className="w-full h-full flex flex-1 justify-center">
                    <AnimatedElement staggerEl="#letter-cover" config={{
                        to: {
                            transform: 'translate(100%, 0%)',
                            stagger: 0.08
                        },
                        scrollTrigger: {
                            scrub: 1,
                            start: 'top bottom',
                            end: 'bottom center'
                        }
                    }}>
                        <WordSplit>
                            <h1 letterCoverStyle='bg-black' splitStyle="h-full w-auto flex items-center" className="text-[15vw] overflow-hidden leading-none font-black text-white tracking-widest">STAY</h1>
                        </WordSplit>
                    </AnimatedElement>
                </div>
                <div id="intro-top-content" className="flex-auto h-full w-auto">
                    <p className="text-white text-xl w-1/2">
                        Meet Karthik, the visionary software craftsman, weaving innovation into every line of code, fueled by boundless creativity and an insatiable thirst for growth.</p>
                </div>
            </div>
            <div id="into-bottom" className="flex-1 flex flex-row py-[2em]">
                <div id="intro-bottom-image" className="flex-auto overflow-hidden">
                    <img className="w-full flex-auto" src="https://images.unsplash.com/photo-1616456606983-ae6724f15749?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div id="intro-bottom-heading" className="w-full h-full flex justify-end flex-1">
                    <AnimatedElement staggerEl="#letter-cover" config={{
                        to: {
                            transform: 'translate(100%, 0%)',
                            stagger: 0.08
                        },
                        scrollTrigger: {
                            scrub: 3,
                            start: 'top bottom',
                            end: 'bottom bottom'
                        }
                    }}>
                        <WordSplit>
                            <h1 letterCoverStyle='bg-black' splitStyle="h-full flex items-center" className="text-[15vw] leading-none font-black text-white tracking-widest">HUNGRY</h1>
                        </WordSplit>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    </section>
}

export default IntroPage;