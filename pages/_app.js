import "@/styles/globals.css";
import "@/styles/variables.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    // Add a CSS class to the body element when the component mounts
    document.body.classList.add("loading");

    // Remove the CSS class once the animation has completed
    setTimeout(() => {
      document.body.classList.remove("loading");
    }, 300);
  }, []);

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
