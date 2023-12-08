import Link from "next/link";
import styles from "./Nav.module.scss";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className="container">
          <div className={styles.navDesktopContainer}>
            <div className={styles.navLogo}>
              <Link href="/">
                <Image
                  src="/img/logo-adelantto.png"
                  alt="Adelantto"
                  className={styles.navLogoImg}
                  width={558}
                  height={188}
                />
              </Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/about" className={styles.navLink}>
                ¿Cómo funciona?
              </Link>
              <Link href="/services" className={styles.navLink}>
                Beneficios
              </Link>
              <Link href="/contact" className={styles.navLink}>
                ¿Por qué Adelantto?
              </Link>
              <Link href="">
                <Button>Iniciar sesión</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navMobileContainer}>
          <div className={styles.navMobileLogo}>
            <Link href="/">
              <Image
                src="/img/logo-adelantto.png"
                alt="Adelantto"
                className={styles.navLogoImg}
                width={558}
                height={188}
              />
            </Link>
          </div>
          <div
            className={styles.navMobileBurger}
            onClick={() => setMenuMobileOpen(true)}
          >
            <div className={styles.navMobileBurgerLine}></div>
            <div className={styles.navMobileBurgerLine}></div>
            <div className={styles.navMobileBurgerLine}></div>
          </div>
        </div>
      </div>
      {menuMobileOpen && (
        <div className={styles.navMobileMenu}>
          <div
            className={styles.navMobileClose}
            onClick={() => setMenuMobileOpen(false)}
          >
            <div className={styles.navMobileCloseLine}></div>
            <div className={styles.navMobileCloseLine}></div>
          </div>
          <div className={styles.navMobileMenuLinks}>
            <Link href="/about" className={styles.navMobileMenuLink}>
              ¿Cómo funciona?
            </Link>
            <Link href="/services" className={styles.navMobileMenuLink}>
              Beneficios
            </Link>
            <Link href="/contact" className={styles.navMobileMenuLink}>
              ¿Por qué Adelantto?
            </Link>
            <Link href="">
              <Button>Iniciar sesión</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
