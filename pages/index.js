import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Announcement from "../components/Header/Anouncement";
import MemberService from "../components/memberService/MemberService";
import CPService from "../components/cpService/CPService";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Announcement />
      <MemberService />
      <CPService />
      <ContactForm />
      <Footer />
    </>

    //git push https://github.com/laushiju/carecar2.0.git
  );
}
