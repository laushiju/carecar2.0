import { useState } from "react";
import styles from "./MemberService.module.css";
import Button from "../ui/Button";
import Link from "next/link";
import ShowAlerts from "../ui/ShowAlerts";
import ShowBackDrop from "../ui/showBackDrop";
export default function MemberService() {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.container}>
      <h1>Member Service</h1>
      <div>
        <Link href="/">
          <a>
            <Button>
              <p>English</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Spanish</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>繁體中文</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>簡體中文</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Korean</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Vietnam</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Japanese</Button>
          </a>
        </Link>
        <a onClick={clickHandler}>
          <Button>Others</Button>
        </a>

        {showModal && (
          <ShowAlerts
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
        {showModal && (
          <ShowBackDrop
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
