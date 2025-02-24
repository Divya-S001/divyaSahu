import React from "react";
import { useRef } from "react";
import box1 from "../assests/box1.png";
import box2 from "../assests/box2.png";
import box3 from "../assests/box3.png";
import box4 from "../assests/box4.png";
import box5 from "../assests/box5.png";


const rewards = [
    { id: 1, title: "Rackbreak", image: box1, buttonText: "Claim now" },
    { id: 2, title: "Daily Bonus", image: box2, buttonText: "13 h 48 m" },
    { id: 3, title: "Weekly Bonus", image: box3, buttonText: "13 h 48 m" },
    { id: 4, title: "Monthly Bonus", image: box4, buttonText: "13 h 48 m" },
    { id: 5, title: "Yearly Bonus", image: box5, buttonText: "13 h 48 m" },
  ];
  
  const Box1 = () => {
    const boxRef = useRef(null);

    return (
        <div className="reward-container">
        <div className="reward-header">
          <h2>Rewards Keys</h2>
        </div>
  
  
        {/* Reward Cards */}
        <div ref={boxRef} className="reward-list">
          {rewards.map((reward) => (
            <div key={reward.id} className="box">
              <img src={reward.image} alt={reward.title} className="reward-image" />
              <h3 className="reward-title">{reward.title}</h3>
              <button className="button">{reward.buttonText}</button>
             
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Box1;