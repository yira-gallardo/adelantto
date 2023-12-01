import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Preguntas.module.scss";
import Nav from "@/components/Layout/Nav/Nav";
import Title from "@/components/UI/Title/Title";
import Footer from "@/components/Layout/Footer/Footer";
import Paragraph from "@/components/UI/Paragraph/Paragraph";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const PREGUNTAS_DATA = {
  "topic-1": {
    title: "Acerca de Adelantto",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
  "topic-2": {
    title: "Preguntas 2",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
  "topic-3": {
    title: "Preguntas 3",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
  "topic-4": {
    title: "Preguntas 4",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
  "topic-5": {
    title: "Preguntas 5",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
  "topic-6": {
    title: "Preguntas 6",
    subtitle:
      "En esta sección encontrarás información general sobre Adelantto.",
    preguntas: [
      { pregunta: "Pregunta 1", respuesta: "Respuesta 1", isActive: false },
      { pregunta: "Pregunta 2", respuesta: "Respuesta 2", isActive: false },
      { pregunta: "Pregunta 3", respuesta: "Respuesta 3", isActive: false },
    ],
  },
};

export default function PreguntasFrequentes() {
  const [topicsData, setTopicsData] = useState<any>(PREGUNTAS_DATA);
  const [topicActive, setTopicActive] = useState("topic-1");
  const [topicContent, setTopicContent] = useState(PREGUNTAS_DATA["topic-1"]);

  useEffect(() => {
    setTopicContent(topicsData[topicActive]);
  }, [topicActive]);

  const handlePreguntaClick = (i: any) => {
    const newTopicsData = { ...topicsData };
    newTopicsData[topicActive].preguntas = newTopicsData[
      topicActive
    ].preguntas.map((j: any) => {
      if (j.pregunta === i.pregunta) {
        j.isActive = !j.isActive;
      }
      return j;
    });
    setTopicsData(newTopicsData);
  };

  return (
    <>
      <Head>
        <title>Adelantto - FAQ</title>
        <meta name="description" content="Adelantto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Nav />
        <section className={styles.preguntas}>
          <Title size="large" semantic="h2">
            <b>¡Bienvenido a Adelantto!</b>
          </Title>
          <Title size="medium" semantic="h3">
            Estas a un paso de crear tu cuenta y mejorar tu liquidez, por favor
            completa tu información.
          </Title>
          <div className={styles.preguntasContent}>
            <div className={styles.preguntasTopics}>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-1" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-1")}
              >
                Acerca de Adelantto
              </button>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-2" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-2")}
              >
                Requisitos de Adelantto
              </button>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-3" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-3")}
              >
                ¿Cómo se paga?
              </button>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-4" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-4")}
              >
                Proceso de aprobación
              </button>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-5" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-5")}
              >
                Depósito del adelanto de rentas
              </button>
              <button
                className={`${styles.preguntasTopic} ${
                  topicActive === "topic-6" ? styles.active : ""
                }`}
                onClick={() => setTopicActive("topic-6")}
              >
                Inquilinos
              </button>
            </div>
            <div className={styles.preguntasInfo}>
              <div className={styles.preguntasInfoContent}>
                <Title size="medium" semantic="h3">
                  <b>{topicContent.title}</b>
                </Title>
                <Paragraph>{topicContent.subtitle}</Paragraph>
                {topicContent.preguntas.map((i) => (
                  <div
                    key={Math.random()}
                    className={styles.preguntasInfoContentItem}
                    onClick={() => handlePreguntaClick(i)}
                  >
                    <div className={styles.preguntasInfoContentItemTitle}>
                      <Title size="medium" semantic="h4">
                        <b>{i.pregunta}</b>
                      </Title>
                      <button className={styles.preguntasInfoContentItemClose}>
                        {i.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className={styles.preguntasInfoContentItemText}>
                      <Paragraph size="small">
                        {i.isActive ? i.respuesta : ""}
                      </Paragraph>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
