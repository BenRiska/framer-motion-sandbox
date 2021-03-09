import { useEffect, useState } from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";

const scroll = () => {

    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
    useEffect(() => console.log(pathLength), [pathLength, yRange]);



    return (
        <div className="container height-boost">
            <h1 style={{top: "50px"}} className="padding fixed">Scroll</h1>
            <h2 style={{top: "120px"}} className="padding fixed">animate svg path on scroll</h2>
            <svg className="progress-icon" viewBox="0 0 60 60">
                <motion.path
                fill="none"
                strokeWidth="5"
                stroke="red"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                    pathLength,
                    rotate: 90,
                    translateX: 5,
                    translateY: 5,
                    scaleX: -1, // Reverse direction of line animation
                }}
                />
                <motion.path
                fill="none"
                strokeWidth="5"
                stroke="red"
                d="M14,26 L 22,33 L 35,16"
                initial={false}
                strokeDasharray="0 1"
                animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </svg>
            <p style={{marginTop: "300px"}} className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
            <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates esse quos natus, sit maxime quae animi ut incidunt aperiam architecto deserunt velit accusantium similique magni aliquam? Minus, rerum odit!</p>
        </div>
    )
}

export default scroll
