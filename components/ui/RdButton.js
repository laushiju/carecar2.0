import styles from "./RdButton.module.css";
const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
export default Button;
