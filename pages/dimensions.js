import React from 'react'
import {motion} from "framer-motion"

const dimensions = () => {
    return (
        <motion.div initial="initial"
        animate="animate" className="container">
            <h1 className="padding">Dimensions</h1>
            <h2>animate height 0 to auto</h2>
            <motion.div 
            variants={{
                initial: {
                    height: "0px"
                },
                animate: {
                    height: "100px"
                }}
            }
            transition={{duration: 2}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2>animate width 0 to auto</h2>
            <motion.div 
            variants={{
                initial: {
                    width: "0px"
                },
                animate: {
                    width: "100px"
                }}
            }
            transition={{duration: 2}}
            style={{
            transformOrigin: "left",
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
        </motion.div>
    )
}

export default dimensions
