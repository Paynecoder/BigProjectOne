import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/NotFound.module.css";
import Head from "next/head";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <>
      <Head>
        <title>Uh Oh...</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Page not found... Sending you home!</main>
    </>
  );
}
