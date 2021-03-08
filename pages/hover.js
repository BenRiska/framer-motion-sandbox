import React from 'react'
import {motion} from "framer-motion"

const hover = () => {
    return (
        <div className="container">
            <h1 className="padding">Hover</h1>
            <h2 className="padding">Expands on hover</h2>
            <motion.div 
             whileHover={{scale: 1.05}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">Minimise on hover</h2>
            <motion.div 
             whileHover={{scale: .95}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">Fires callback on hover start</h2>
            <motion.div 
            onHoverStart={() => alert("callback called")}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">Fires callback on hover end</h2>
            <motion.div 
            onHoverEnd={() => alert("callback called")}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
        </div>
    )
}

export default hover
