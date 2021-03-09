import {AnimatePresence, AnimateSharedLayout} from "framer-motion"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default MyApp
