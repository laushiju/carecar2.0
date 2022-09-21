import styles from "./ShowAlerts.module.css";
const Alert = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <h1>Please call us</h1>
      <h1> @ </h1>
      <h1>844-743-4344 </h1>
      <h1>for help</h1>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default Alert;
