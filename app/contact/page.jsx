import React from "react";
import "@/styles/pages/Contactpage.scss";
import NavMenu from "@/components/NavMenu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719805828/875_sfafe7.jpg" - Contact us',
};

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactPage__container">
        <NavMenu />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
