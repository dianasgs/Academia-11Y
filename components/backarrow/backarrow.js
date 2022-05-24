import styles from "./backarrow.module.css";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function BackArrow() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div
      tabIndex={0}
      onClick={handleClick}
      className={styles.backarrowContainer}
      role="button"
      aria-label="voltar para página anterior"
    >
      <FaArrowLeft className={styles.arrow} /> Voltar
    </div>
  );
}
