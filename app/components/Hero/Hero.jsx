"use client";

import Image from "next/image";
import "./Hero.css";
import Baloon1 from "../../../public/assets/images/balloon1.png";
import Baloon2 from "../../../public/assets/images/balloon2.png";

const Hero = () => {
  return (
    <section className='hero-section'>
      <Image
        src={Baloon1}
        alt='air baloon'
        width={398}
        height={404}
        className='baloon-img first'
        priority
      />
      <h1 className='title'>
        Tworzymy unikalne i niepowtarzalne <span>dekoracje balonowe</span> na
        imprezy
      </h1>
      <Image
        src={Baloon2}
        alt='air baloon'
        width={460}
        height={469}
        className='baloon-img second'
        priority
      />
    </section>
  );
};

export default Hero;
