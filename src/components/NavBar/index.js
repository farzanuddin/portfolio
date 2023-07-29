/* react */
import { useState } from "react";
/* nextjs */
import Link from "next/link";
import Image from "next/image";
import { Source_Sans_3 as SansPro } from "next/font/google";
/* lib */
import clsx from "clsx";
/* style */
import styles from "./navbar.module.css";

const Sans = SansPro({ subsets: ["latin"] });

const DesktopNavigation = () => {
  return (
    <nav className={`${Sans.className} ${styles.navDesktop}`}>
      <ul className={styles.navDesktopMenu}>
        <li className={styles.navDesktopItem}>
          <Link href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      <button
        className={styles.mobileNavButton}
        aria-label="open the navigation menu"
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src="/icons/hamburger-menu.svg" alt="menu icon" width={30} height={30} />
      </button>
      <nav
        id="mobile-nav"
        className={`${Sans.className} ${styles.mobileNavMenu} ${clsx(menuOpen && styles.showMenu)}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="nonreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

const SingleNavigation = () => {
  return (
    <button
      className={styles.mobileNavButton}
      aria-label="download the resume"
      aria-controls="resume"
    >
      <Link href="/resume.pdf" target="_blank" rel="noreferrer">
        <Image src="/icons/resume-icon.svg" alt="menu icon" width={30} height={30} />
      </Link>
    </button>
  );
};

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <Link href="/">
          <Image src="/Logo.svg" alt="farzan uddin logo" width={187} height={40} priority={true} />
        </Link>
        <DesktopNavigation />
        {/* <MobileNavigation /> */}
        <SingleNavigation />
      </div>
    </div>
  );
};
