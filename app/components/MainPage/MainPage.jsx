"use client";

import { Element } from "react-scroll";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import About from "../About/About";
import Reviews from "../Reviews/Reviews";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Element name='main'>
        <Hero />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='reviews'>
        <Reviews />
      </Element>
      <Element name='contacts'>
        <Contacts />
      </Element>
      <Footer />
    </>
  );
}
