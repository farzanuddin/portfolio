/* nextjs */
import Head from "next/head";
/* style */
import styles from "./layout.module.css";
/* components */
import { NavBar } from "@/components/NavBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navContainer}>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
};
