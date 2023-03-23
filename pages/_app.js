import "@/styles/globals.css";
import "@/styles/variables.css";
import Navbar from "@/components/Navbar/index.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
