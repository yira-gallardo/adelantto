import Link from "next/link";
import styles from "./Nav.module.scss";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function Nav() {
  return (
    <div className={styles.nav}>
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
    </div>
  );
}
