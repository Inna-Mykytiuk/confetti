"use client";

import "./Reviews.css";
import ReviewSlider from "@/app/ui/ReviewsSlider/ReviewsSlider";

const Reviews = () => {
  return (
    <section className='reviews-section'>
      <div className='container'>
        <h2 className='reviews-title'>Recenzje</h2>
      </div>
      <ReviewSlider />
    </section>
  );
};

export default Reviews;
