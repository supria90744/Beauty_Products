import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Elevate Your Everyday Beauty</h1>
        <p>Naturally radiant. Consciously crafted.</p>
        <div className="hero-buttons">
          <button>Shop Now</button>
          <button className="outline">Discover Your Routine</button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections">
        <h2>Explore Our Collections</h2>
        <div className="collection-grid">
          {['Skincare', 'Haircare', 'Makeup', 'Wellness'].map((category) => (
            <div key={category} className="collection-card">
              <span>{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Beauty Quiz */}
      <section className="quiz-section">
        <h2>Find Your Glow</h2>
        <p>Not sure what suits you? Take our 2-minute beauty quiz.</p>
        <button>Start Quiz</button>
      </section>

      {/* Bestsellers */}
      <section className="bestsellers">
        <h2>Customer Favorites</h2>
        <div className="product-carousel">
          {[1, 2, 3, 4,5,6].map((num) => (
            <div key={num} className="product-card">
              <div className="product-image">Product {num}</div>
              <p>★ ★ ★ ★ ☆</p>
              <button>Add to Bag</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Real Stories, Real Glow</h2>
        <p>See how our products transform real lives.</p>
        <div className="testimonial-grid">
          <div className="testimonial">"Loved the results!" - Aanya</div>
          <div className="testimonial">"Glowing skin in 2 weeks!" - Priya</div>
        </div>
      </section>

      {/* About Brand */}
      <section className="about-brand">
        <h2>Behind the Brand</h2>
        <p>From sustainable sourcing to cruelty-free testing, we care for your skin and the planet.</p>
      </section>

      

      
    </div>
  );
};

export default HomePage;
