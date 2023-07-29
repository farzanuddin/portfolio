/* nextjs */
import Head from "next/head";
import Image from "next/image";
import { Source_Sans_3 as SansPro, Space_Mono as SpaceMono } from "next/font/google";
/* style */
import styles from "@/styles/index.module.css";
/* icon */
import locationIcon from "../../public/icons/location-icon.svg";
import schoolIcon from "../../public/icons/school-icon.svg";
/* components */
import { Layout } from "@/components/Layout";

const Sans = SansPro({ subsets: ["latin"] });
const Mono = SpaceMono({ subsets: ["latin"], weight: ["400"] });

// eslint-disable-next-line no-console
console.info(
  "%cHello There! 🙋🏽‍♂️ %cCaught you peaking in the console, didn't I? 👀 %n Reach out, lets work together! %cLinkedIn:%chttps://www.linkedin.com/in/farzanuddin/",
  "color: #FEB712; font-size: 14px; font-family: monospace; margin-bottom: 5px;",
  "color: #FFFFFF; font-size: 12px; font-family: monospace",
  "color: #141414; background:#FEB712; font-size: 12px; font-family: monospace; margin-right: 10px; padding: 5px; margin-top: 5px; margin-bottom: 5px; border-radius: 5px;",
  "color: #FFFFFF; font-size: 12px; font-family: monospace"
);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Farzan Uddin</title>
        <meta name="description" content="Portfolio website created for and by Farzan Uddin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.homeHeader}>
          <section id="home-header" className={styles.sectionContainer}>
            <div className={styles.headerContent}>
              <div className={`${Sans.className} ${styles.headerTitle}`}>
                <p className={styles.headerIntro}>Welcome! 🙋🏽‍♂️ My name is...</p>
                <h1 className={styles.headerTitleText}>
                  Farzan Uddin
                  <span className={styles.headerSubtitle}>Frontend Developer</span>
                </h1>
              </div>
              <div className={`${Sans.className} ${styles.headerInformation}`}>
                <div className={styles.info}>
                  <div>
                    <p className={styles.iconInfo}>
                      <span>
                        <Image src={locationIcon} alt="location icon" width={30} height={30} />
                      </span>
                      Dubai, UAE
                    </p>
                    <p className={styles.iconInfo}>
                      <span>
                        <Image src={schoolIcon} alt="school icon" width={30} height={30} />
                      </span>
                      Bachelors in Business Administration
                    </p>
                  </div>
                </div>

                <p className={styles.headerDescription}>
                  A Frontend Developer who focuses on creating accessible and performant user
                  experiences on the web. With a fine eye for detail and a passion for learning, I
                  am always searching for ways to improve the quality of the web for all users.
                </p>
              </div>
              <div className={styles.headerProjectLinkContainer}>
                <a
                  className={`${Mono.className} ${styles.headerProjectLink}`}
                  href="mailto:m.farzanuddin@gmail.com"
                  target="_blank"
                  rel="nonreferrer"
                >
                  lets chat!
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
