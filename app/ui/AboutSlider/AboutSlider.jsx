"use client";

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutSlider.css";

export default class AboutSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: false,
      prevArrow: false,
    };
    return (
      <div className='container'>
        <Slider {...settings} className='slider-list'>
          <div className='about-item accent'>
            <h3>Kreatywne podejście i dbałość o szczegóły</h3>
            <p>
              Specjaliści zapewniają doradztwo i kreatywność przy wyborze
              dekoracji balonowych, z dbałością o szczegóły
            </p>
          </div>
          <div className='about-item black'>
            <h3>Materiały przyjazne dla środowiska</h3>
            <p>
              Wykorzystywane są materiały najwyższej jakości, w tym
              biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
              ślad na środowisku.
            </p>
          </div>
          <div className='about-item gray'>
            <h3>Szeroka gama kolorów do personalizacji</h3>
            <p>
              Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
              pozwala spersonalizować wystrój na każdą okazję.
            </p>
          </div>
          <div className='about-item light'>
            <h3>Gwarancja dostawy i montażu</h3>
            <p>
              Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
              także ich montaż, zapewniając klientom kompleksową obsługę.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
