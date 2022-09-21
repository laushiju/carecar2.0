import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/carecar.png" alt="CareCar" width={800} height={77} />
        </a>
      </Link>
      <h4 className={styles.phone}>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        1-844-743-4344
      </h4>
    </div>
  );
}
