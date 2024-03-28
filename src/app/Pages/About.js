import { useEffect } from "react";
import { useBodyRef, useScrollTriggger } from "../Components/BodyRefContext"
import { AnimatedElement, WordSplit, getRandomNumber } from "../Components/Utilities";
import Image from "next/image";

const About = () => {

    const bodyRef = useBodyRef()
    const st = useScrollTriggger();

    useEffect(() => {

        const mobile = matchMedia('(max-width:500px').matches;

        st.create({
            trigger: bodyRef.current.querySelector('#about-page #curly-heading'),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#test-content'),
            start: 'top top',
            end: 'top bottom ',
            pinSpacing: false,
            scrub: 10,
        });
    }, [bodyRef]);

    const aboutData = [
        {
            title: "Innovate & Craft",
            src: 'https://images.unsplash.com/photo-1699865574995-eb61e12d97bd?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Venturing into innovation, I craft novel solutions that captivate audiences. With innovative thinking, I shape ideas into tangible experiences that inspire. Each creation aims to leave an indelible mark, driving user-centric design evolution.",
        },
        {
            title: "Prototype & Perfect",
            src: 'https://images.unsplash.com/photo-1698825810716-d3f126a50385?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "In prototyping, I refine the user experience tirelessly. From concepts to polished prototypes, I strive for perfection, fine-tuning every detail. Through iteration, I transform visions into intuitive interfaces that resonate with users.",
        },
        {
            title: "Code & Create",
            src: 'https://images.unsplash.com/photo-1698825810702-10bb885eec26?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Diving into code, I craft elegant and efficient solutions , blending functionality with imagination. Through coding, I bring ideas to life, creating powerful and user-friendly software. Embracing complexity, I transform concepts into intuitive experiences that inspire.",
        },
        {
            title: "Develop & Deliver",
            src: 'https://images.unsplash.com/photo-1697898783543-18651b0db28f?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Throughout development, I navigate complexities with precision. From concept to deployment, I commit to high-quality software that exceeds expectations. With agility, I ensure timely, innovative solutions that enrich users' lives.",
        },

    ]


    return <section id='about-page' className="relative h-full w-full my-20 box-border flex flex-col max-[500px]:flex-col">
        <div id="curly-heading" className="h-screen w-1/2 flex mr-10 py-10 flex-col justify-center flex-1 max-[500px]:w-full">
            <h1 className="text-xl text-slate-700 font-bold text-left">Work Flow</h1>
            <p className="text-3xl text-left mt-5">Innovating solutions, perfecting user experiences, and delivering high-quality software with precision and agility.</p>
        </div> 
        {/* <div id="curly" className="top-0 absolute h-screen w-full flex flex-col left-0">
            <div id="curly-content" className="relative flex-2 flex flex-row w-full h-full items-center">
                <h1 className="relative opacity-5 flex-1 text-[40vw] text-center leading-none">&#123;</h1>
                <AnimatedElement config={{
                    to: {
                        width: '60vw',
                        ease: 'sine.inOut'
                    },
                    scrollTrigger: {
                        scrub: 0.2,
                        start: 'top center',
                        end: '+=2500px',
                    }
                }}>
                    <div id="box" className="flex-1 max-h-full w-[25vw]"></div>
                </AnimatedElement>
                <h1 className="relative flex-1 opacity-5 text-[40vw] text-center leading-none">&#125;</h1>
            </div>
        </div> */}
        <div id="about-cards-wrapper" className="w-full box-border flex-1 justify-center items-center flex flex-col max-[500px]:w-full">
            {aboutData.map((el, index) => {
                return <div key={index} id="about-cards" className="my-10 w-full px-[15em] relative h-auto max-[500px]:px-0">
                    <AboutCard content={el.content} heading={el.title} index={index} id={'page' + index} src={el.src} />
                </div>
            })}
        </div>
    </section>
}

const AboutCard = ({ id, index, heading, content, src }) => {

    const bodyRef = useBodyRef();
    const st = useScrollTriggger();

    useEffect(() => {

        const startPos = bodyRef.current.querySelector('#curly-heading').offsetHeight;
        const mobile = matchMedia('(max-width: 500px').matches;

        st.create({
            trigger: bodyRef.current.querySelector(`#about-page #${id}`),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#test-content'),
            start:`top ${startPos+(index * 15)}`,
            anticipatePin: 1 ,
            end: 'top bottom',
            pinSpacing: false,
        })
    }, [id]);

    return <AnimatedElement config={{
        to: {
            scale: 1,
        },
        scrollTrigger: {
            scrub: 0.2,
            start: 'center center',
            end: 'bottom bottom',
        }
    }} id={id} className="h-[40vh] overflow-hidden backdrop-blur-sm bg-white/80 rounded-3xl box-border shadow-2xl">
        <div id="about-content" className="relative flex h-full flex-row max-[500px]:flex-col overflow-hidden">
            <div id="about-content-image" className="flex flex-1 shadow-[10px_0_20px_1px] shadow-black/30 items-center justify-center overflow-hidden max-[500px]:absolute max-[500px]:h-[100%] top-0 left-0">
                <Image loading="lazy" alt='alt' width={500} height={500} className="h-full w-auto max-[500px]:w-auto max-[500px]:h-full max-w-[100vw]" src={src} />
            </div>
            <div id="about-content-left" className="flex-col  max-[500px]:backdrop-blur-sm flex-1 flex items-start p-10 max-[500px]:p-10 justify-center">
                <AnimatedElement className="mb-5" staggerEl="span" config={{
                    to: {
                        transform: 'translate(0%, 0%)',
                        opacity: 1,
                        stagger: 0.05,
                    },
                    scrollTrigger: {
                        scrub: 2,
                        fastScrollEnd: true,
                        start: 'top 80%',
                        end: '+=50px',
                    }
                }}>
                    <WordSplit>
                        <h1 words={false} splitStyle='overflow-hidden flex items-center justify-center relative' className="relative opacity-1 translate-y-[100%] tracking-normal leading-none font-semibold text-black text-[3vw] max-[500px]:text-white max-[500px]:text-center max-[500px]:text-[6vw]">{heading}</h1>
                    </WordSplit>
                </AnimatedElement>
                <p className="z-2 text-black text-md max-[500px]:text-sm max-[500px]:text-white">{content}</p>
            </div>
        </div>
    </AnimatedElement>

}

export default About; 