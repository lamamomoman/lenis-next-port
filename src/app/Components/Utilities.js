import React, { useEffect } from "react";
import { useBodyRef } from "./BodyRefContext";

const { default: gsap } = require("gsap");
const { ScrollTrigger } = require("gsap/ScrollTrigger");
const { useRef } = require("react")

export const AnimatedElement = ({ children, config, className = "", staggerEl = "" }) => {
    const animation = useGsap(config, staggerEl);
    return <div className={className} ref={animation}>{children}</div>
}

const useGsap = (config, staggerEl) => {
    const eleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = staggerEl != "" ? eleRef.current.querySelectorAll(staggerEl) : eleRef.current;

        if (config.from != null) {
            gsap.fromTo(el, {
                ...config.from,
            }, {
                ...config.to,
                scrollTrigger: {
                    trigger: eleRef.current,
                    ...config.scrollTrigger
                }
            });
        }

        gsap.to(el, {
            ...config.to,
            scrollTrigger: {
                trigger: eleRef.current,
                ...config.scrollTrigger
            }
        });

    }, [])

    return eleRef;
}

export const WordSplit = ({ children, className = '' }) => {

    const arr = Array.isArray(children) ? children : [children];
    const splitRef = useRef(null);

    return (
        arr.map((child, index) => {
            //console.log(arr);
            return <div ref={splitRef} className={child.props.splitStyle} key={index} id="split">
                {child.props.children.split(child.props.words ? ' ' : '').map((split, index) => {
                    return <span key={index} className={child.props.className + ' relative'}>{child.props.letterCoverStyle != null ? <div
                        className={'absolute w-full h-full ' + child.props.letterCoverStyle} id="letter-cover"></div> : <></>} {split}</span>
                })}
            </div>
        })
    )
};

export default WordSplit;
