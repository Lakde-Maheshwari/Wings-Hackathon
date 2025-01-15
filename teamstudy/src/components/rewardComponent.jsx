import React, { useState, useEffect } from "react";

const CoinReward = () => {
  const [duration, setDuration] = useState(0); // Time in minutes
  const [showCoin, setShowCoin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 600); // Increment duration every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (duration >= 60) {
      setShowCoin(true); // Show coin when 60 minutes are completed
    }
  }, [duration]);

  return (
    <div
      className={`transform transition-all duration-500 ease-in-out ${
        showCoin ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <img
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMV8zZF9pbGx1c3RyYXRpb25fb2ZfZ29sZGVuX2NvaW5faXNvbGF0ZWRfb25fd180MjgzOTMzOC04ZTEzLTQ1ZGEtOThlZS0xMTQ0NTA0MzU2MTVfMS5wbmc.png"
        alt="Coin"
        className="w-24 h-24"
      />
    </div>
  );
};

export default CoinReward;

// https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMV8zZF9pbGx1c3RyYXRpb25fb2ZfZ29sZGVuX2NvaW5faXNvbGF0ZWRfb25fd180MjgzOTMzOC04ZTEzLTQ1ZGEtOThlZS0xMTQ0NTA0MzU2MTVfMS5wbmc.png
