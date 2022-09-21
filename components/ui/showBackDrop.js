import styles from "./ShowBackDrop.module.css";
const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

export default Backdrop;
