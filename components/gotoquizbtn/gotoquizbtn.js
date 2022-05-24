import styles from "./gotoquizbtn.module.css";
import { useRouter } from "next/router";
import db from "./../../data/db.json";

export default function GoToQuizBtn({ id }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/lesson/${id}/quiz`);
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      Iniciar Quiz
    </button>
  );
}
