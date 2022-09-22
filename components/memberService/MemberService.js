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
            <Button>
              <p>Spanish</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>
              <p>繁體中文</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>
              <p>簡體中文</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>
              <p>Korean</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>
              <p>Vietnam</p>
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>
              <p>Japanese</p>
            </Button>
          </a>
        </Link>
        <a onClick={clickHandler}>
          <Button>
            <p>Others</p>
          </Button>
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
