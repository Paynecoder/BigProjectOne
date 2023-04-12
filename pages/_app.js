import "@/styles/globals.css";
import "@/styles/variables.css";
import { AnswersProvider } from "@/hooks/answerContext.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AnswersProvider>
        <Component {...pageProps} />
      </AnswersProvider>
    </>
  );
}
