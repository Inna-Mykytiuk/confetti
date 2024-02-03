"use client";

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
            <li className='about-item'>
              <h3>Kreatywne podejście i dbałość o szczegóły</h3>
              <p>
                Specjaliści zapewniają doradztwo i kreatywność przy wyborze
                dekoracji balonowych, z dbałością o szczegóły
              </p>
            </li>
            <li className='about-item'>
              <h3>Materiały przyjazne dla środowiska</h3>
              <p>
                Wykorzystywane są materiały najwyższej jakości, w tym
                biodegradowalne materiały balonowe, aby pozostawić jak
                najmniejszy ślad na środowisku.
              </p>
            </li>
            <li className='about-item'>
              <h3>Szeroka gama kolorów do personalizacji</h3>
              <p>
                Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
                pozwala spersonalizować wystrój na każdą okazję.
              </p>
            </li>
            <li className='about-item'>
              <h3>Gwarancja dostawy i montażu</h3>
              <p>
                Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień,
                ale także ich montaż, zapewniając klientom kompleksową obsługę.
              </p>
            </li>
          </ul>
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
