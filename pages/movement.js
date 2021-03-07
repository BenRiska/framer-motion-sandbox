import React, {useState} from 'react'
import {motion} from "framer-motion"

const movement = () => {

    const [position, setPosition] = useState(0)
    const [position1, setPosition1] = useState(0)
    const [showBlock, setShowBlock] = useState(false)

    return (
        <div>
            <h1>movement</h1>
            <h2>Block moves on click with the "animate" property</h2>
            <motion.div 
            onClick={() => setPosition((position + 50))} 
            animate={{x: position}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            >
            </motion.div>
            <h2>Block moves more than once on click with the "animate" property</h2>
            <motion.div 
            onClick={() => setPosition1((position1 + 50))} 
            animate={{x: [null, position1 + 50, position1]}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            >
            </motion.div>
            <h2>Element will move from it's initial position to the animated position when inserted to the dom</h2>
            <button onClick={() => setShowBlock(!showBlock)}>Toggle element</button>
            {showBlock && 
            <motion.div
            animate={{x: 200}}
            transition={{duration: 1}}
            style={{
                width: "100px", 
                height: "100px", 
                backgroundColor: "red", 
                cursor: "pointer"}}
            >
            </motion.div>}
        </div>
    )
}

export default movement
