import styles from "./lessoncard.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LessonCard({ id, description }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/lesson/${id}`);
  };

  const [lessonCompleted, setLessonCompleted] = useState(false);

  useEffect(() => {
    setLessonCompleted(localStorage.getItem(`a11y:${id}`) === "true");
  }, []);

  return (
    <div className={`${styles.card} flex`}>
      <header className={`${styles.cardHeader} flex`}>
        Lição {id}{" "}
        <i hidden={!lessonCompleted} className="bi bi-patch-check"></i>
      </header>

      <div className={`${styles.cardBody} flex`}>
        <p>{description}</p>
        <button
          type="button"
          aria-label={`Começar lição ${id}`}
          onClick={handleClick}
        >
          Começar
        </button>
      </div>
    </div>
  );
}
