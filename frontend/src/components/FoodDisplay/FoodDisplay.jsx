import React from 'react';
import './FoodDisplay.css'; // You can keep using this CSS file.

const FoodDisplay = () => {
  return (
    <div className="food-display" id="food-display">
      <h2>Our Services</h2>
      <div className="service-buttons">
        <button className="service-button">Pre Booking</button>
        <button className="service-button">Pre Booking & Pre Ordering</button>
        <button className="service-button">Eco-Friendly Rewards</button>
      </div>
    </div>
  );
};

export default FoodDisplay;