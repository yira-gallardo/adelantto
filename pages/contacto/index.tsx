import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Contacto.module.scss";
import Nav from "@/components/Layout/Nav/Nav";
import Title from "@/components/UI/Title/Title";
import Button from "@/components/UI/Button/Button";
import Footer from "@/components/Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Adelantto - Contacto</title>
        <meta name="description" content="Adelantto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Nav />
        <section className={styles.contacto}>
          <Title size="large" semantic="h2">
            <b>¡Bienvenido a Adelantto!</b>
          </Title>
          <Title size="medium" semantic="h3">
            Estas a un paso de crear tu cuenta y mejorar tu liquidez, por favor
            completa tu información.
          </Title>
          <div className={styles.contactoForm}>
            <form>
              <div className={styles.contactoFormInputBox}>
                <label htmlFor="nombre">Nombre(s)</label>
                <input type="text" required />
              </div>
              <div className={styles.contactoFormInputBox}>
                <label htmlFor="nombre">Apellidos</label>
                <input type="text" required />
              </div>
              <div className={styles.contactoFormInputBox}>
                <label htmlFor="nombre">Correo Electrónico</label>
                <input type="text" required />
              </div>
              <div className={styles.contactoFormInputBox}>
                <label htmlFor="nombre">Número Celular</label>
                <input type="text" required />
              </div>
              <div className={styles.contactoFormCheckbox}>
                <input type="checkbox" required />
                <label htmlFor="nombre">
                  He leído y estoy de acuerdo con el{" "}
                  <span className="green">aviso de privacidad</span>
                </label>
              </div>
              <div className={styles.contactoFormCheckbox}>
                <input type="checkbox" required />
                <label htmlFor="nombre">
                  He leído y estoy de acuerdo con los{" "}
                  <span className="green">términos y condiciones</span>
                </label>
              </div>
              <div className={styles.contactoFormButton}>
                <Button size="large">Regístrarse</Button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
