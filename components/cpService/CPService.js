import { useState } from "react";
import styles from "./CPService.module.css";
import RdButton from "../ui/RdButton";
import Link from "next/link";
import Image from "next/image";
import ShowAlerts from "../ui/ShowAlerts";
import ShowBackDrop from "../ui/showBackDrop";
export default function CPService() {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Care Partner Services</h1>
        <div>
          <p>
            <a onClick={clickHandler}>
              <RdButton>
                <Image
                  src="/CC-care-partner.png"
                  alt="CarePartner"
                  width={80}
                  height={80}
                />
                <h2>Driver Solutions</h2>
              </RdButton>
            </a>
            <Link href="/">
              <a onClick={clickHandler}>
                <RdButton>
                  <Image
                    src="/Member+Icon+(6).png"
                    alt="CarePartner"
                    width={80}
                    height={80}
                  />
                  <h2>Care Partner</h2>
                </RdButton>
              </a>
            </Link>
            <Link href="/">
              <a onClick={clickHandler}>
                <RdButton>
                  <Image
                    src="/CC-health-plan.png"
                    alt="HealthPlanPartner "
                    width={80}
                    height={80}
                  />
                  <h2>Health Plan Partner</h2>
                </RdButton>
              </a>
            </Link>
          </p>
        </div>
      </div>
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
    </>
  );
}
