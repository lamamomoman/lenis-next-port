import React, { createContext, useContext, useRef } from 'react';

// Step 1: Create a context to hold the mainRef
const BodyRefContext = createContext(null);

// Step 2: Create a custom hook to access the mainRef from the context
export const useBodyRef = () => useContext(BodyRefContext);

// Step 3: Wrap your entire application with the context provider
export const BodyRefProvider = ({ children, mainRef }) => {
  const bodyRef = mainRef;

  return (
    <BodyRefContext.Provider value={bodyRef}>
      {children}
    </BodyRefContext.Provider>
  );
};
