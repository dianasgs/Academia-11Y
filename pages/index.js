import LessonCard from "../components/lessoncard/lessoncard";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={`f col`}>
      <header className={` f col`}>
        <a
          href="https://your-url"
          className="github-corner"
          aria-label="Colabore com o projeto no Github"
        >
          <svg
            className="githubSVG"
            width="80"
            height="80"
            viewBox="0 0 250 250"
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              className="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>
        <img className="logo" src="/logo.png" alt="logo da Academia 11y" />
        <h1 className={styles.headerText}>Aprenda sobre acessibilidade web</h1>
      </header>
      <main className={`col f`}>
        <h2 className="h2-home">Lições</h2>

        <div className={`${styles.cardsContainer} row f`}>
          <LessonCard
            id={1}
            description={"Acessibilidade digital: o que é e para quem?"}
          />
          <LessonCard id={2} description={"Tecnologias assistivas"} />
          <LessonCard
            id={3}
            description={"Acessibilidade na legislação brasileira"}
          />
          <LessonCard id={4} description={"Usabilidade e Design Universal"} />
          <LessonCard
            id={5}
            description={"Diretrizes e guias de acessibilidade"}
          />
          <LessonCard
            id={6}
            description={"Ferramentas de avaliação e validação"}
          />
          <LessonCard
            id={7}
            description={"O papel dos profissionais na acessibilidade"}
          />
          <LessonCard
            id={8}
            description={"O que as empresas ganham com isso?"}
          />
        </div>

        <div className={` f col`}>
          <h2 className="h2-home">Entre em contato</h2>

          <div className={`${styles.contato} f row`}>
            <i className="bi bi-linkedin" role="img" aria-label="Linkedin"></i>
            <a
              href="https://www.linkedin.com/in/dianadesales/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/dianadesales
            </a>
          </div>
          <div className={`${styles.contato} f row`}>
            <i
              className="bi bi-envelope-fill"
              role="img"
              aria-label="Email"
            ></i>
            <a href="mailto:dianadsg1@gmail.com?subject=Academia 11Y">
              dianadsg1@gmail.com
            </a>
          </div>
        </div>
      </main>
      <footer className={`${styles.footer} flex `}>
        Este site foi criado por Diana de Sales em 2022 como parte de seu
        trabalho de conclusão de curso
      </footer>{" "}
    </div>
  );
}
