import { useState } from "react";
import key1 from  "../assests/key1.png";
import key2 from "../assests/key2.png";
import key3 from "../assests/key3.png";
import key4 from "../assests/key4.png";
import circleImg from "../assests/circle1.jpeg"; 


const keys = [
  { id: 1, title: "Bronze Key", count: 10, image: key1 },
  { id: 2, title: "Silver Key", count: 0, image: key2 },
  { id: 3, title: "Gold Key", count: 0, image: key3 },
  { id: 4, title: "Platinum Key", count: 0, image: key4 },
];

const KeySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const keysPerPage = 4; 

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? keys.length - keysPerPage : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + keysPerPage >= keys.length ? 0 : prev + 1));
  };

  return (
    <div className="key-container">
      {/* Rank Section */}
      <div className="rank-section"> 
        
        <h2>Your Current Rank</h2>
        <img src={circleImg} alt="Rank" className="rank-image" />
      </div>

      {/* Key Section */}
      <div className="key-section">
        <div className="key-header">
        <span className="info-icon">Chest Keysℹ</span>
        </div>

        {/* Nav-Buttons */}
        <div className="nav-button">
          <button onClick={prevSlide}> ← </button>
          <button onClick={nextSlide}> → </button>
        </div>

        {/* Key Cards Row */}
        <div className="key-slider-container">
          <div
            className="key-slider"
            style={{ transform: `translateX(-${startIndex * 130}px)` }}
          >
            {keys.map((key) => (
              <div key={key.id} className="key-card">
                <img src={key.image} alt={key.title} className="key-image" />
                <h3>{key.title}</h3>
                <button className="button">View Chest</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySection;