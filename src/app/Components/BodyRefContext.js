import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap/all';
import React, { createContext, useContext, useEffect, useRef } from 'react';

// Step 1: Create a context to hold the mainRef
const BodyRefContext = createContext(null);
const ScrollTriggerContext = createContext(null);

// Step 2: Create a custom hook to access the mainRef from the context
export const useBodyRef = () => useContext(BodyRefContext);
export const useScrollTriggger = () => useContext(ScrollTriggerContext);

// Step 3: Wrap your entire application with the context provider
export const BodyRefProvider = ({ children, mainRef }) => {
  const bodyRef = mainRef;

  return (
    <BodyRefContext.Provider value={bodyRef}>
      {children}
    </BodyRefContext.Provider>
  );
};

export const ScrollTriggerProvider = ({ children, scrollTrigger }) => {
  const scrollTriggerVal = scrollTrigger;

  useEffect(() => {
    // Initialize scrollTriggerRef when the gsap library is loaded
    // scrollTriggerVal.current = ScrollTrigger;
    // gsap.registerPlugin(scrollTriggerVal.current); // Register ScrollTrigger with gsap
    // console.log(scrollTriggerVal.current);

    console.log(scrollTriggerVal);
  }, [scrollTriggerVal]);

  return (
    <ScrollTriggerContext.Provider value={scrollTriggerVal}>
      {children}
    </ScrollTriggerContext.Provider>
  )
}
