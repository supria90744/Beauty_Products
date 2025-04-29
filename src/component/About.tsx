import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h1>About Beauty Corner</h1>
        <p>
          Welcome to <strong>Beauty Corner</strong>, your one-stop destination for premium beauty products and expert care. Since our inception in 2013 in Mumbai, we've been committed to offering a diverse range of cosmetics, skincare essentials, and attractive imitation jewellery sets at special offers and great discounts.
        </p>
        <p>
          Our mission is to empower individuals by providing access to high-quality beauty products that enhance confidence and self-expression. We believe in the transformative power of beauty and strive to make it accessible to everyone.
        </p>
        <p>
          At Beauty Corner, we curate products from popular brands, ensuring authenticity and excellence. Our dedicated team is passionate about helping you discover the best in beauty, tailored to your unique needs and preferences.
        </p>
        <p>
          Thank you for choosing Beauty Corner. We look forward to being a part of your beauty journey.
        </p>
      </div>
    </section>
  );
};

export default About;
