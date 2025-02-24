import React from "react";

const RewardBox = ({ title, image, buttonText }) => {
  
    return (
        <div className="reward-box">
          <img src={image} alt={title} className="reward-image" />
          <h3 className="reward-title">{title}</h3>
          <button className="button">{buttonText}</button>
        </div>
      );
    };

export default RewardBox;
