import "../styles/globals.css";
import Header from "../components/Header/Header";
import Announcement from "../components/Header/Anouncement";
import CPService from "../components/cpService/CPService";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Announcement />
      <Component {...pageProps} />
      <CPService />
      <ContactForm />
      <Footer />
    </>
  );
}

export default MyApp;
