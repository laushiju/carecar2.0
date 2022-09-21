import styles from "./RdButton.module.css";
const RdButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
export default RdButton;
