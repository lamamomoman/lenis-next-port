"use client"
import { use, useEffect, useRef } from 'react';

import { BodyRefProvider, ScrollTriggerProvider, useScrollTriggger } from './Components/BodyRefContext';
import { LenisScroller } from './Components/LenisScroller';
import { AnimatedElement } from './Components/Utilities';

import HomePage from './Pages/HomePage';
import IntroPage from './Pages/IntroPage'
import Manifesto from './Pages/Manifesto';
import About from './Pages/About';
import TestPage from './Pages/TestPage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {

  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return (
    <BodyRefProvider mainRef={mainRef}>
      <ScrollTriggerProvider scrollTrigger = {ScrollTrigger}>
        <LenisScroller>
          <main ref={mainRef} className="relative h-auto w-screen p-0 m-0 box-border">
            <AnimatedElement config={{
              from: {
                scale: 1
              },
              to: {
                scale: 0.9
              },
              scrollTrigger: { scrub: 0.2, start: 'top 10%', end: 'bottom top' }
            }}>
              <HomePage />
            </AnimatedElement>
            <div className='relative h-auto w-screen box-border rounded-t-[50px] px-[2em] pt-[6em] bg-white'>
              <IntroPage />
              <Manifesto />
              <About />
              <TestPage />
            </div>
          </main>
        </LenisScroller>
      </ScrollTriggerProvider>

    </BodyRefProvider >
  );
}
