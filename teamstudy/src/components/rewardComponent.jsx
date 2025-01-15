import React, { useState, useEffect } from "react";
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const CoinReward = () => {
  const [duration, setDuration] = useState(0); // Time in minutes
  const [showCoin, setShowCoin] = useState(false);
  const [background, setBackground] = useState("bg-blue-700");  // Background color
  const [isvisible, setIsVisible] = useState(true); // Visibility of coin

  // work of close button
  const HandlecloseClick = () => {
    setIsVisible(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 6); // Increment duration every minute (60 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (duration >= 60) {
      setShowCoin(true); // Show coin when 60 minutes are completed
    }
  }, [duration]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background content */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10">
        <p className="text-gray-700 text-xl text-center mt-10">
          There is Timer going on for 60 minutes. After 60 minutes, you will get a coin as a reward.
        </p>
      </div>

      {/* Coin component */}
      <div 
        className={`transform transition-all duration-500 ease-in-out z-20 mb-28 ${
          showCoin && isvisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        
        <span className="absolute top-0 right-0 p-2 text-white cursor-pointer" onClick={HandlecloseClick}>
        <FontAwesomeIcon icon={faXmark} />
        </span>
        <img
          src=".\public\coin.png"
          alt="Coin"
          className="w-96 h-96 mx-auto spinY"
        />
        <p className="text-center text-white text-3xl mt-3">Coin Reward</p>
      </div>
    </div>
  );
};

export default CoinReward;
