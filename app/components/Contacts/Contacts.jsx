"use client";

import { motion } from "framer-motion";
import "./Contacts.css";
import SubmitForm from "@/app/ui/SubmitForm/SubmitForm";
import Phone from "../../../public/assets/icons/phone.svg";
import Mail from "../../../public/assets/icons/mail.svg";

const Contacts = () => {
  return (
    <section className='contacts-section'>
      <div className='container'>
        <div className='contacts-wrapper'>
          <motion.div className='contacts-content'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className='contacts-title'>Kontakty</h2>
            <p>Confetti - Studio Dekoracij Balonami Warszawa </p>
            <div className='contacts'>
              <a href='tel:+48793351407 ' className='contact-link'>
                <Phone aria-label='phone' />
                +48 793 351 407 
              </a>
              <a
                href='mailto:confettibalony@gmail.com'
                className='contact-link'
              >
                <Mail aria-label='mail' />
                confettibalony@gmail.com
              </a>
            </div>
          </motion.div>
          <SubmitForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
