import React from 'react'
import {motion} from "framer-motion"

const keyframes = () => {
    return (
        <div className="container">
            <h1 className="padding">Keyframes</h1>
            <h2 className="padding">Infinite keyframe animation</h2>
            <motion.div 
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                transition: {
                    duration: 2,
                    repeat: Infinity
                }
              }}
              className="margin"
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
        </div>
    )
}

export default keyframes
