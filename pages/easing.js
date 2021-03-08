import React from 'react'
import {motion} from "framer-motion"

const easing = () => {
    return (
        <div className="container">
            <h1 className="padding">Easing</h1>
            <h2 className="padding">linear</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "linear", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">ease in</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "easeIn", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">ease out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "easeOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">ease in out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "easeInOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">circ in</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "circIn", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">circ out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "circOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">circ in out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "circInOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">back in</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "backIn", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">back out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "backOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">back in out</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "backInOut", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">anticipate</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: "anticipate", duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">custom ease</h2>
            <motion.div 
            initial={{x: -300}}
            animate={{x: 300}}
            transition={{ease: [0.17, 0.67, 0.83, 0.67], duration: 1}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "green", 
            cursor: "pointer"}}
            ></motion.div>
        </div>
    )
}

export default easing
