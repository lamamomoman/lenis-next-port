import React, { useEffect } from "react";
import WordSplit, { AnimatedElement } from "../Components/Utilities";
import { useBodyRef, useScrollTriggger } from "../Components/BodyRefContext";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroPage = () => {

    const bodyRef = useBodyRef();
    const st = useScrollTriggger();

    useEffect(() => {

        const mobileLayout = matchMedia("(max-width: 500px)").matches;
        const endPos = bodyRef.current.querySelector("#manifesto-content").offsetHeight;

        if (!mobileLayout) {
            st.create({
                trigger: bodyRef.current.querySelector("#intro-page #intro-bottom-image"),
                endTrigger: bodyRef.current.querySelector('#manifesto-content'),
                start: 'top 20%',
                end: `+=${endPos}`,
                pin: true,
                pinSpacing: false,
            });
        }
    }, [st]);



    return <section className="relative h-auto" id="intro-page">
        <div id="intro-page-wrapper" className="flex flex-col h-full">
            <div id="intro-top" className="flex-1 flex flex-row items-center">
                <div id="intro-top-heading" className="w-full h-full flex-2 max-[500px]:flex-[1]">
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
                            <h1 letterCoverStyle='bg-white' splitStyle="h-full w-full inline-block flex justify-center items-center" className="text-[11vw] font-semibold max-[500px]:text-[13vw] max-[500px]:tracking-normal overflow-hidden leading-none text-black">CREATIVE</h1>
                        </WordSplit>
                    </AnimatedElement>
                </div>
                <div id="intro-top-content" className="flex-auto h-full w-auto max-[500px]:hidden">
                    <p className="text-black text-xl w-3/4">
                        Meet Karthik, the visionary software craftsman, weaving innovation into every line of code, fueled by boundless creativity and an insatiable thirst for growth.</p>
                </div>
            </div>
            <div id="intro-bottom" className="flex-1">
                <div id="intro-bottom-start" className="h-auto flex items-start justify-center flex-row max-[500px]:flex-col-reverse">
                    <div id="intro-bottom-image" className="h-full w-full flex-1 relative rounded-3xl overflow-hidden">
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
                            <Image  alt='' sizes="100vw" width={50} height={50} loading="lazy" src='/me.JPG' className="relative flex-auto w-full h-full" />
                        </AnimatedElement>
                    </div>
                    <div id="intro-bottom-heading" className="flex-[2] w-full max-[500px]:flex-1">
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
                                <h1 letterCoverStyle='bg-white' splitStyle="h-full w-full flex items-center justify-center" className="p-2 text-[11vw] font-semibold max-[500px]:text-[13vw] overflow-hidden flex-1 flex items-center justify-center tracking-tight leading-none text-black">DEVELOPER</h1>
                            </WordSplit>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </div>
    </section >
}

export default IntroPage;