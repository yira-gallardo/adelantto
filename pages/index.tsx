import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Nav from "@/components/Layout/Nav/Nav";
import Title from "@/components/UI/Title/Title";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import Footer from "@/components/Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Adelantto</title>
        <meta name="description" content="Adelantto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Nav />
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <div className={styles.heroText}>
                <Title semantic="h2" size="large">
                  <b>
                    Recibe un Adelantto de tus rentas
                    <span className="green"> en menos de 24 horas</span>
                  </b>
                </Title>
                <Paragraph size="large">
                  Descarga la app e inicia tu proceso para obtener una oferta
                  pre aprobada en menos de 24 horas
                </Paragraph>
                <div className={styles.heroButtons}>
                  <Link href="/">
                    <Image
                      src="/img/app-store.png"
                      alt="App Store"
                      width={150}
                      height={50}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/img/google-play.png"
                      alt="App Store"
                      width={150}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.heroImage}>
                <Image
                  src="/img/hero.png"
                  alt="Adelantto"
                  width={1000}
                  height={1000}
                  className={styles.heroImageImg}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.info}>
          <div className="container">
            <div className={styles.infoContainer}>
              <div className={styles.infoImage}>
                <Image
                  src="/img/info.png"
                  alt="Información"
                  width={1000}
                  height={1000}
                  className={styles.infoImageImg}
                />
              </div>
              <div className={styles.infoText}>
                <Title semantic="h3" size="medium">
                  <b>
                    Si eres dueño de una propiedad en renta y necesitas un
                    préstamo, recibe un Adelantto de hasta 6 rentas,
                  </b>
                  solo descarga la app y sigue estos sencillos pasos:
                </Title>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepText}>
                      <Paragraph size="medium">
                        Descarga la app en tu tienda App Store preferida
                      </Paragraph>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepText}>
                      <Paragraph size="medium">
                        Llena el cuestionario y sube tus documentos
                      </Paragraph>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepText}>
                      <Paragraph size="medium">
                        Obtén una oferta pre aprobada en segundos
                      </Paragraph>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepText}>
                      <Paragraph size="medium">
                        Firma el contrato y recibe tu adelantto menos de 24 hs
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className={styles.callToAction}>
                  <Link href="/">
                    <Button size="large">Conoce Adelantto</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.infoIconsContainer}>
              <div className={styles.infoIcon}>
                <div className={styles.line} />
                <Image
                  src="/img/icon-1.png"
                  alt="Adelantto"
                  width={250}
                  height={200}
                  className={styles.iconImg}
                />
                <Paragraph size="medium">
                  <b>Regístrate en minutos</b>
                </Paragraph>
              </div>
              <div className={styles.infoIcon}>
                <div className={styles.line} />
                <Image
                  src="/img/icon-2.png"
                  alt="Adelantto"
                  width={250}
                  height={200}
                  className={styles.iconImg}
                />
                <Paragraph size="medium">
                  <b>Servicio confiable y abierto a renovaciones</b>
                </Paragraph>
              </div>
              <div className={styles.infoIcon}>
                <div className={styles.line} />
                <Image
                  src="/img/icon-3.png"
                  alt="Adelantto"
                  width={250}
                  height={200}
                  className={styles.iconImg}
                />
                <Paragraph size="medium">
                  <b>El dinero en tu cuenta en menos de 24 hs</b>
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.calculator}>
          <div className="container">
            <div className={styles.calculatorContainer}>
              <div className={styles.calculatorText}>
                <Title semantic="h3" size="large">
                  <b>Calcula el monto de tu Adelantto</b>
                </Title>
                <Paragraph size="medium">
                  Ingresa el monto de tu renta mensual y conoce en cuestión de
                  segundos hasta cuanto podrías recibir como préstamo.{" "}
                  <b>¡Descarga Adelantto hoy!</b>
                </Paragraph>
              </div>
              <div className={styles.calculatorComponent}>
                <form className={styles.calculatorForm}>
                  <input
                    type="text"
                    className={styles.calculatorInput}
                    placeholder="Valor de tu renta mensual"
                  />
                  <input
                    type="text"
                    className={styles.calculatorInput}
                    placeholder="Fecha de inicio del contrato de arrendamiento"
                  />
                  <input
                    type="text"
                    className={styles.calculatorInput}
                    placeholder="Fecha de fin del contrato de arrendamiento"
                  />
                  <Paragraph size="medium">
                    <b>¿Cuántos meses de Adelantto necesitas?</b>
                  </Paragraph>
                  <div className={styles.calculatorOptions}>
                    <div
                      className={`${styles.calculatorOption} ${styles.active}`}
                    >
                      1
                    </div>
                    <div className={styles.calculatorOption}>2</div>
                    <div className={styles.calculatorOption}>3</div>
                    <div className={styles.calculatorOption}>4</div>
                    <div className={styles.calculatorOption}>5</div>
                    <div className={styles.calculatorOption}>6</div>
                  </div>
                  <input
                    type="text"
                    className={styles.calculatorInput}
                    placeholder="Monto pre aprobado por Adelantto"
                    disabled
                  />
                  <Button size="large">Inicia tu proceso</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className="container">
            <div className={styles.aboutContainer1}>
              <div className={styles.aboutImage}>
                <Image
                  src="/img/table.jpg"
                  alt="Adelantto"
                  width={1000}
                  height={1000}
                  className={styles.aboutImageImg}
                />
              </div>
              <div className={styles.aboutText}>
                <Title semantic="h3" size="large">
                  <b>
                    <span className="green">Adelantto es tu solución</span> si
                    necesitas liquidez inmediata
                  </b>
                </Title>
                <Paragraph size="medium">
                  A diferencia de otras soluciones financieras nosotros te
                  ofrecemos una respuesta inmediata, una tasa de interés
                  competitiva y al recibir una oferta pro aprobada,{" "}
                  <span className="green">
                    <b>tu dinero en 24 hs.</b>
                  </span>
                </Paragraph>
                <Button size="large">Conoce Adelantto</Button>
              </div>
            </div>
            <div className={styles.aboutContainer2}>
              <div className={styles.aboutText}>
                <Title semantic="h3" size="large">
                  <b>¿Qué es Adelantto?</b>
                </Title>
                <Paragraph size="medium">
                  Somos una empresa mexicana que busca impactar positivamente en
                  el sector de la industria inmobiliaria creando productos que
                  otorgen inmediatez en la liquidez de los propietarios de
                  bienes inmuebles que los arriendan. Ofrecemos al mercado una
                  solución efectiva a un costo competitivo con tiempos de
                  respuesta menores a 24 hs.
                </Paragraph>
                <Paragraph size="medium">
                  <b>
                    Nuestra Misión es ofrecer soluciones de liquidez inmediata a
                    los propietarios de bienes inmuebles. Si tienes una
                    propiedad, eres Adelantto.
                  </b>
                </Paragraph>
                <Button size="large">Descarga Adelantto</Button>
              </div>
            </div>
            <div className={styles.aboutContainer3}>
              <div className={styles.aboutImage}>
                <Image
                  src="/img/humans.png"
                  alt="Adelantto"
                  width={1000}
                  height={1000}
                  className={styles.aboutImageImg}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reviews}>
          <div className="container">
            <div className={styles.reviewsContainer}>
              <Title semantic="h3" size="large">
                <b>Ellos nos recomiendan</b>
              </Title>
              <div className={styles.line} />
              <div className={styles.reviewsSlider}>
                <article className={styles.reviewsSliderItem}>
                  <div className={styles.reviewsSliderItemPhoto}>
                    <Image
                      src="/img/person-1.png"
                      alt="Adelantto"
                      width={10000}
                      height={10000}
                      className={styles.reviewsSliderItemPhotoImg}
                    />
                  </div>
                  <div className={styles.reviewsSliderItemText}>
                    <Paragraph size="small">John Doe</Paragraph>
                    <Paragraph size="medium">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id risus euismod, aliquam ipsum in, tempor elit. Sed
                      id risus euismod, aliquam ipsum in.
                    </Paragraph>
                    <div className={styles.reviewsSliderItemStars}>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarInactive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={styles.reviewsSliderItem}>
                  <div className={styles.reviewsSliderItemPhoto}>
                    <Image
                      src="/img/person-2.png"
                      alt="Adelantto"
                      width={10000}
                      height={10000}
                      className={styles.reviewsSliderItemPhotoImg}
                    />
                  </div>
                  <div className={styles.reviewsSliderItemText}>
                    <Paragraph size="small">John Doe</Paragraph>
                    <Paragraph size="medium">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id risus euismod, aliquam ipsum in, tempor elit. Sed
                      id risus euismod, aliquam ipsum in.
                    </Paragraph>
                    <div className={styles.reviewsSliderItemStars}>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarActive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className={styles.reviewsSliderItemStarInactive}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className={styles.download}>
                <Title semantic="h3" size="large">
                  Descarga Adelantto <b>¡ahora!</b>
                </Title>
                <div className={styles.buttons}>
                  <Link href="/">
                    <Image
                      src="/img/app-store.png"
                      alt="App Store"
                      width={150}
                      height={50}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/img/google-play.png"
                      alt="App Store"
                      width={150}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
