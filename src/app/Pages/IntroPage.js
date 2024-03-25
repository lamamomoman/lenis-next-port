import React, { useEffect } from "react";
import WordSplit, { AnimatedElement } from "../Components/Utilities";
import { useBodyRef } from "../Components/BodyRefContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const IntroPage = () => {

    const bodyRef = useBodyRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: bodyRef.current.querySelector("#intro-page #intro-bottom-image"),
            endTrigger: bodyRef.current.querySelector("#intro-page"),
            start: 'top 20%',
            pin: true,
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
                            stagger: 0.2
                        },
                        scrollTrigger: {
                            scrub: 1,
                            start: 'top bottom',
                            end: 'bottom center'
                        }
                    }}>
                        <WordSplit>
                            <h1 letterCoverStyle='bg-white' splitStyle="h-full w-auto flex items-center" className="text-[15vw] overflow-hidden leading-none font-black text-black tracking-widest">STAY</h1>
                        </WordSplit>
                    </AnimatedElement>
                </div>
                <div id="intro-top-content" className="flex-auto h-full w-auto max-[500px]:hidden">
                    <p className="text-black text-xl w-1/2">
                        Meet Karthik, the visionary software craftsman, weaving innovation into every line of code, fueled by boundless creativity and an insatiable thirst for growth.</p>
                </div>
            </div>
            <div id="intro-bottom" className="flex-1 py-[2em]">
                <div id="intro-bottom-start" className="h-auto flex items-start justify-center flex-row">
                    <div id="intro-bottom-image" className="h-full w-3/4 flex-[1] relative rounded-3xl overflow-hidden max-[500px]:absolute">
                        <AnimatedElement config={{
                            from: {
                                scale: 3,
                            },
                            to: {
                                scale: 1,
                            },
                            scrollTrigger: {
                                scrub: 0.2,
                                start: 'top center',
                                end: 'bottom top'
                            }
                        }}>
                            <img priority src='/me.JPG' className="relative flex-auto w-full h-full" />
                        </AnimatedElement>
                    </div>
                    <div id="intro-bottom-heading" className="relative w-full ml-[2em] max-[500px]:ml-[0] h-full flex flex-1 justify-end">
                        <AnimatedElement staggerEl="#letter-cover" config={{
                            to: {
                                transform: 'translate(100%, 0%)',
                                stagger: 0.2
                            },
                            scrollTrigger: {
                                scrub: 3,
                                start: 'top bottom',
                                end: 'bottom bottom'
                            }
                        }}>
                            <WordSplit>
                                <h1 letterCoverStyle='bg-white' splitStyle="h-full flex" className="text-[15vw] overflow-hidden flex-1 leading-none font-black text-black tracking-widest">HUNGRY</h1>
                            </WordSplit>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </div>
    </section >
}

export default IntroPage;