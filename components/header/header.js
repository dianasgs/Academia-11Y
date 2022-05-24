import styles from "./header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className={`flex ${styles.header}`}>
      <Link href="/">
        <a aria-label="home">
          <img src="/logo.png" alt="logo da Academia 11y" width={200} />
        </a>
      </Link>
    </div>
  );
}
