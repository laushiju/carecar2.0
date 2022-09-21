import styles from "./Button.module.css";
const Button = ({ children }) => {
  return (
    <button className={styles.btn}>
      <h1>{children}</h1>
    </button>
  );
};
export default Button;
