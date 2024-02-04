"use client";

import Image from "next/image";
import { motion } from "framer-motion"
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
      <motion.h1 className='title'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Tworzymy unikalne i niepowtarzalne <span>dekoracje balonowe</span> na
        imprezy
      </motion.h1>
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
