import "@/styles/globals.css";
import "@/styles/variables.css";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence wait>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
