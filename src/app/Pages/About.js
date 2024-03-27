import { useEffect } from "react";
import { useBodyRef, useScrollTriggger } from "../Components/BodyRefContext"
import { AnimatedElement, WordSplit, getRandomNumber } from "../Components/Utilities";

const About = () => {

    const bodyRef = useBodyRef()
    const st = useScrollTriggger();

    useEffect(() => {

        st.create({
            trigger: bodyRef.current.querySelector(`#about-page #curly`),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#test-page'),
            start: 'top top',
            end: 'top bottom',
            pinSpacing: false,
            scrub: 10,
        });

        st.create({
            trigger: bodyRef.current.querySelector('#about-page #curly-heading'),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#about-page'),
            start: 'top top',
            end: 'bottom center',
            pinSpacing: false,
            scrub: 10,
        });
    }, [bodyRef]);

    const aboutData = [
        {
            title: "Innovate & Craft",
            src: 'https://images.unsplash.com/photo-1667377052103-3d282994acf3?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Venturing into innovation, I craft novel solutions that captivate audiences. With innovative thinking, I shape ideas into tangible experiences that inspire. Each creation aims to leave an indelible mark, driving user-centric design evolution.",
        },
        {
            title: "Prototype & Perfect",
            src: 'https://images.unsplash.com/photo-1629729802306-2c196af7eef5?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "In prototyping, I refine the user experience tirelessly. From concepts to polished prototypes, I strive for perfection, fine-tuning every detail. Through iteration, I transform visions into intuitive interfaces that resonate with users.",
        },
        {
            title: "Code & Create",
            src: 'https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Diving into code, I craft elegant and efficient solutions , blending functionality with imagination. Through coding, I bring ideas to life, creating powerful and user-friendly software. Embracing complexity, I transform concepts into intuitive experiences that inspire.",
        },
        {
            title: "Develop & Deliver",
            src: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: "Throughout development, I navigate complexities with precision. From concept to deployment, I commit to high-quality software that exceeds expectations. With agility, I ensure timely, innovative solutions that enrich users' lives.",
        },

    ]


    return <section id='about-page' className="relative h-full w-full my-20 box-border inline-flex max-[500px]:flex-col">
        <div id="curly-heading" className="h-screen flex mr-10 py-10 flex-col justify-center flex-1 max-[500px]:w-full">
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
        <div id="about-cards-wrapper" className="w-full box-border flex-1 flex flex-col max-[500px]:w-full">
            {aboutData.map((el, index) => {
                return <div key={index} id="about-cards" className="my-10 relative h-auto max-[500px]:px-0">
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

        const isMobileLayout = () => {
            return window.matchMedia('(max-width: 500px)').matches;
          }

        console.log('mobile layout ', isMobileLayout());

        const startPos = bodyRef.current.querySelector('#curly-heading').offsetHeight;

        st.create({
            trigger: bodyRef.current.querySelector(`#about-page #${id}`),
            pin: true,
            endTrigger: bodyRef.current.querySelector('#about-page'),
            start: !isMobileLayout() ?`center ${50 + index*5}%` : `top ${startPos+(index * 15)}`,
            anticipatePin: 1 ,
            end: 'bottom center',
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
        <div id="about-content" className="flex h-full flex-row max-[500px]:flex-col overflow-hidden">
            <div id="about-content-image" className="flex-1 flex shadow-[10px_0_20px_1px] shadow-black/30 items-center justify-center overflow-hidden">
                <img className="h-full max-[500px]:h-auto max-[500px]:w-full max-w-[100vw]" src={src} />
            </div>
            <div id="about-content-left" className="flex-[2] flex-col flex items-start p-10 max-[500px]:p-5 justify-center">
                <AnimatedElement className="mb-5" staggerEl="span" config={{
                    to: {
                        transform: 'translate(0%, 0%)',
                        opacity: 1,
                        stagger: 0.05,
                    },
                    scrollTrigger: {
                        scrub: 3,
                        fastScrollEnd: true,
                        start: 'top 80%',
                        end: '+=100px',
                    }
                }}>
                    <WordSplit>
                        <h1 splitStyle='overflow-hidden flex items-center justify-center relative' className="relative opacity-1 translate-y-[100%] tracking-normal leading-none font-semibold text-black/40 text-[3vw] max-[500px]:text-[6vw]">{heading}</h1>
                    </WordSplit>
                </AnimatedElement>
                <p className="text-black text-md">{content}</p>
            </div>
        </div>
    </AnimatedElement>

}

export default About; 