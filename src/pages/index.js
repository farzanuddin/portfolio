// NextJS
import Head from "next/head";
import Image from "next/image";
import { Source_Sans_3 as SansPro } from "next/font/google";

// Styles
import styles from "@/styles/index.module.css";

// Icons
import locationIcon from "../../public/icons/location-icon.svg";
import schoolIcon from "../../public/icons/school-icon.svg";

const Sans = SansPro({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
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
									<span className={styles.headerSubtitle}>Front End Developer</span>
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
									{`
                  I am a detail-oriented Front-End Software Engineer dedicated
                  to crafting accessible and high-performing user experiences
                  for the web. My insatiable curiosity and commitment to
                  continuous learning drive me to constantly enhance the web's
                  overall quality for all users.
                  `}
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
