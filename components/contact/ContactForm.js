import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const submitHandler = () => {
    console.log("submitted");
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form>
        <div className={styles.control}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" required />
          <label htmlFor="insurance">Insurance ID: </label>
          <input type="number" id="insurance" required />
          <label htmlFor="phone">Phone #: </label>
          <input type="number" id="phone" required />
          <label htmlFor="message">Message: </label>
          <textarea rows="5" id="message" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
