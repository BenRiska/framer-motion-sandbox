import React, {useState} from 'react'
import {motion, useAnimation} from "framer-motion"


const expand = () => {

    const controls = useAnimation()

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
        </div>
    )
}

export default expand
