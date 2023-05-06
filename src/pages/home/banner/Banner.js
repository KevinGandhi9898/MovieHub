import React from "react";
import "./banner.css";

const Banner = () => {
  const bookingData = localStorage.getItem('bookingData')
  const parsed = JSON.parse(bookingData)
  return (
    <div className="banner px-4 py-10 md:px-10 md:py-20 ">
      <div className="text-left text-white">
        <h1 className="font-bold text-4xl md:text-5xl">Welcome to MovieHub</h1><br />
        <h4 className="text-2xl md:text-3xl font-medium">
          Movies are the real chill zone in this age of time !!!
        </h4>
      </div>
      <div>
        {bookingData && <div className="text-2xl md:text-3xl font-medium">
          Booked Ticket For : " {parsed.showName} "
        </div>}
      </div>
    </div>
  );
};

export default Banner;