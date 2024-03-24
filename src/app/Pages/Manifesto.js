import WordSplit, { AnimatedElement } from "../Components/Utilities";

const Manifesto = () => {
    return <section id="manifesto-page" className="h-screen items-center flex justify-end">
        <div id="manifesto-content" className="w-3/4 p-[2em]">
            <h1 className="text-slate-700 text-xl font-bold my-4">Manifesto</h1>
            <AnimatedElement staggerEl="span" config={{
                to: {
                    opacity: 1,
                    color: 'black',
                    stagger: 0.02,
                    ease: 'power4.inOut'
                },
                scrollTrigger: {
                    scrub: 2,
                    start: 'top bottom',
                    end: 'center 40%'
                }
            }}>
                <WordSplit>
                    <p words={true} className="text-white opacity-70 text-3xl">Coding is my language, and technology is my canvas. With each line of code, I sculpt digital landscapes that inspire, captivate, and empower. From elegant algorithms to captivating designs, I merge artistry with functionality to create meaningful experiences that resonate with audiences.

                        Driven by passion and fueled by curiosity, I embark on a journey of continuous growth and exploration. In this ever-evolving digital landscape, I embrace challenges as opportunities for innovation, pushing the limits of my creativity to shape a future where possibilities are limitless.

                    </p>
                </WordSplit>
            </AnimatedElement>
        </div>

    </section>
}

export default Manifesto;