import React, {useState} from 'react'
import {motion, useAnimation} from "framer-motion"


const expand = () => {

    const controls = useAnimation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container">
            <h1 className="padding">expand</h1>
            <h2 className="padding">element expands on mount with 2s delay</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue"
            }}
            animate={{scale: 1.5, transition: {delay: 2}}}
            >
            </motion.div>
            <h2 className="padding">element expands on click</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue"
            }}
            onClick={() => {
                controls.start({
                    scale: 1.5
                })
            }}
            animate={controls}
            >
            </motion.div>
            <h2 className="padding">complex expand with clip path</h2>
            <button onClick={() => setIsOpen(!isOpen)} className="padding margin">Show full</button>
            <motion.div
            className="background"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={sidebar}
            >
            </motion.div>
        </div>
    )
}

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

export default expand
