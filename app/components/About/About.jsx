"use client";

import { motion } from "framer-motion";
import "./About.css";
import AboutSlider from "@/app/ui/AboutSlider/AboutSlider";
const About = () => {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='about-wrapper'>
          <div className='about-text'>
            <h2>kreatywny zespół dekoratorów</h2>
            <p>
              Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
              dekoracji na imprezy i wydarzenia
            </p>
          </div>

          <ul className='about-list'>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Kreatywne podejście i dbałość o szczegóły</h3>
              <p>
                Specjaliści zapewniają doradztwo i kreatywność przy wyborze
                dekoracji balonowych, z dbałością o szczegóły
              </p>
            </motion.li>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Materiały przyjazne dla środowiska</h3>
              <p>
                Wykorzystywane są materiały najwyższej jakości, w tym
                biodegradowalne materiały balonowe, aby pozostawić jak
                najmniejszy ślad na środowisku.
              </p>
            </motion.li>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Szeroka gama kolorów do personalizacji</h3>
              <p>
                Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
                pozwala spersonalizować wystrój na każdą okazję.
              </p>
            </motion.li>
            <motion.li className='about-item'
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              >
              <h3>Gwarancja dostawy i montażu</h3>
              <p>
                Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień,
                ale także ich montaż, zapewniając klientom kompleksową obsługę.
              </p>
            </motion.li>
          </ul>
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
