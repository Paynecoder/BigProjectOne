import "@/styles/globals.css";
import "@/styles/variables.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
