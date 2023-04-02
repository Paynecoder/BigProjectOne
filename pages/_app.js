import "@/styles/globals.css";
import "@/styles/variables.css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
