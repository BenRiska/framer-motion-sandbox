import React from 'react'
import {motion} from "framer-motion"

export const staggerX = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  export const staggerY = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeIn = {
      initial: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      },
  }

  const fadeSide = {
    initial: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1
      }
    },
}

const fadeSideReverse = {
    initial: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 3
      }
    },
}


const fadeUpLag = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 2
      }
    },
}

const stagger = () => {
    return (
        <motion.div initial="initial" animate="animate" className="container">
            <h1 className="padding">Stagger</h1>
            <h2 className="padding">staggered children on mount</h2>
            <motion.div variants={staggerX}>
                <motion.div
                className="padding"
                variants={fadeIn}
                style={{
                    width: "100px", 
                    height: "100px", 
                    backgroundColor: "red", 
                    cursor: "pointer"}}
                ></motion.div>
                <motion.div
                className="padding"
                variants={fadeIn}
                style={{
                    width: "100px", 
                    height: "100px", 
                    backgroundColor: "red", 
                    cursor: "pointer"}}
                ></motion.div>
                <motion.div
                className="padding"
                variants={fadeIn}
                style={{
                    width: "100px", 
                    height: "100px", 
                    backgroundColor: "red", 
                    cursor: "pointer"}}
                ></motion.div>
            </motion.div>
            <h2 className="padding">nested stagger on mount</h2>
            <motion.div variants={staggerY}>
            <motion.div
                className="padding"
                variants={fadeIn}
                style={{
                    width: "150px", 
                    height: "150px", 
                    backgroundColor: "red", 
                    cursor: "pointer"}}
                >
                    <motion.p variants={fadeSide} >Some text</motion.p>
                    <motion.p variants={fadeUpLag} >Some text</motion.p>
                    <motion.p variants={fadeSideReverse} >Some text</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default stagger
