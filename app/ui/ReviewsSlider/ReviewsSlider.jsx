"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Author from "../../../public/assets/icons/user.svg";
import ArrowRight from "../../../public/assets/icons/arrow-right.svg";
import ArrowLeft from "../../../public/assets/icons/arrow-left.svg";
import "./ReviewSlider.css";

import { Component } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        height: "56px",
        width: "56px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ArrowRight className='arrow' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        height: "56px",
        width: "56px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ArrowLeft className='arrow' />
    </div>
  );
}

export default class ReviewSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: false,
      initialSlide: 3,
      swipe: false,
      nextArrow: false,
      prevArrow: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            swipe: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
          },
        },
      ],
    };
    return (
      <div className='container'>
        <Slider {...settings} className='review-slider'>
          <div className='review-item'>
            <p className='review-text'>
              Baaardzo super ścianka , dziękuję za współpracę
            </p>
            <div className='review-author'>
              <Author aria-label='author1' />
              <p>Anetta Ostalczyk</p>
            </div>
          </div>
          <div className='review-item'>
            <p className='review-text'>
              Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak
              ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa
              wrażenie!
            </p>
            <div className='review-author'>
              <Author aria-label='author2' />
              <p>Aleksandra Murawska</p>
            </div>
          </div>
          <div className='review-item'>
            <p className='review-text'>
              {`Ścianka była piękna , bardzo delikatna , Jeszcze raz bardzo
              dziękuję ) `}
            </p>
            <div className='review-author'>
              <Author aria-label='author3' />
              <p>Aleksandra Murawska</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
