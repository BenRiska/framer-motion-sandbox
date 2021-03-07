import Head from 'next/head'
import Link from "next/link"
import {motion} from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Framer Motion Effects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{width: "100%", textAlign: "center", marginTop: "4rem"}}>Framer Motion Sandbox</h1>
      <motion.div variants={stagger} className={styles.grid}>
        <Link href="/movement">
          <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Movement
          </motion.a>
        </Link>
        <Link href="/bounce">
          <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Bounce
          </motion.a>
        </Link>
        <Link href="/expand">
          <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Expand
          </motion.a>
        </Link>
        <Link href="/variants">
          <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={styles.link}>
            Variants
          </motion.a>
        </Link>
      </motion.div>
    </div>
  )
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};