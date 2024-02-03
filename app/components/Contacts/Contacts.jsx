"use client";

import "./Contacts.css";
import SubmitForm from "@/app/ui/SubmitForm/SubmitForm";
import Phone from "../../../public/assets/icons/phone.svg";
import Mail from "../../../public/assets/icons/mail.svg";

const Contacts = () => {
  return (
    <section className='contacts-section'>
      <div className='container'>
        <div className='contacts-wrapper'>
          <div className='contacts-content'>
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
          </div>
          <SubmitForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
