import { useEffect } from "react";
import { useBodyRef } from "../Components/BodyRefContext"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedElement } from "../Components/Utilities";

const About = () => {
    return <section id='about-page' className="relative overflow-hidden h-auto w-full">
        <div id="about-page-image" className="absolute h-full w-full">
        </div>

        <AboutCard id="page1" index={0} className={"bg-red-500 w-full h-full"}
            content="Venturing into innovation, I craft novel solutions that captivate audiences. With innovative thinking, I shape ideas into tangible experiences that inspire. Each creation aims to leave an indelible mark, driving user-centric design evolution." heading='Innovate & Craft' />
        <AboutCard id="page2" index={1} className={"bg-green-500 w-full h-full"}
            content="Venturing into innovation, I craft novel solutions that captivate audiences. With innovative thinking, I shape ideas into tangible experiences that inspire. Each creation aims to leave an indelible mark, driving user-centric design evolution." heading='Prototype & Perfect' />
        <AboutCard id="page3" index={2} className={"bg-orange-500 w-full h-full"}
            content="Venturing into innovation, I craft novel solutions that captivate audiences. With innovative thinking, I shape ideas into tangible experiences that inspire. Each creation aims to leave an indelible mark, driving user-centric design evolution." heading='Code & Creaate' />

    </section>
}

const AboutCard = ({ id, index, heading, content }) => {

    const bodyRef = useBodyRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: bodyRef.current.querySelector(`#about-page #${id}`),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#about-page'),
            start: `top ${index * 5}%`,
            anticipatePin: 1,
            pinSpacing: false,
        })
    }, [id])

    return <div id={id} className={"relative h-screen p-[6em]"}>
        <AnimatedElement className="w-full h-full" config={{
            to: {
                transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)',
                scale: 1.02,
            },
            scrollTrigger: {
                scrub: 0.2,
                start: 'top 10%',
                end: 'bottom center'
            }
        }}>
            <div id="about-content" className="relative w-full bg-black/50 h-full flex rounded-lg flex-col border-black border-2 backdrop-brightness-50 backdrop-blur-xl p-[3em]">
                <div id="about-top" className="flex-1 flex justify-center items-center flex-row">
                    <div className="flex-1 overflow-hidden p-10" id="about-top-image">
                        <img src="https://images.unsplash.com/photo-1468322638156-074863f9362e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="flex-1" id="about-top-content">
                        <p className="text-white text-2xl">{content}</p>
                    </div>
                </div>
                <div id="about-bottom">
                    <h1 className="text-white text-8xl font-bold text-right">{heading}</h1>
                </div>
            </div>
        </AnimatedElement>
    </div>

}

export default About;