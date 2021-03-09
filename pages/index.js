import {useState, useRef, useEffect} from "react"

import Head from 'next/head'
import Link from "next/link"
import {motion} from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" className={styles.container}>
      <Head>
        <title>Framer Motion Effects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{width: "100%", textAlign: "center", marginTop: "4rem"}}>Framer Motion Sandbox</h1>
      <motion.div variants={stagger} className={styles.grid}>
        <Link href="/movement">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Movement
          </motion.a>
        </Link>
        <Link href="/expand">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Expand
          </motion.a>
        </Link>
        <Link href="/easing">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Easing
          </motion.a>
        </Link>
        <Link href="/hover">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Hover
          </motion.a>
        </Link>
        <Link href="/tap">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Tap
          </motion.a>
        </Link>
        <Link href="/drag">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Drag
          </motion.a>
        </Link>
        <Link href="/dimensions">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Dimensions
          </motion.a>
        </Link>
        <Link href="/stagger">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Stagger
          </motion.a>
        </Link>
        <Link href="/pageTransition">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link} layoutId="title">
            Page Transition
          </motion.a>
        </Link>
        <Link href="/keyframes">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Keyframes
          </motion.a>
        </Link>
        <Link href="/motionValues">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Motion Values
          </motion.a>
        </Link>
        <Link href="/scroll">
          <motion.a variants={fadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Scroll
          </motion.a>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
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

