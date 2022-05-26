import styles from "./header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Helmet } from "react-helmet";

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className={`flex ${styles.header}`}>
      <Helmet>
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://academia11y.vercel.app/" />
      </Helmet>
      <Link href="/">
        <a aria-label="home">
          <img src="/logo.png" alt="logo da Academia 11y" width={200} />
        </a>
      </Link>
    </div>
  );
}
