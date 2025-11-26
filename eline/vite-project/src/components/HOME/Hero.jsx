import React from "react";
import bg from "../../assets/images/bg.png";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="w-full max-w-[1500px] h-[480px] bg-red-500 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col gap-10 items-center p-20">
        <h1 className="text-5xl font-bold">Bharat Moves On Rapido!</h1>

        {/* Pickup Input */}
        <div className="relative w-full max-w-[600px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
            <MapPin />
          </span>

          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="border border-black/70 rounded-md pl-12 pr-4 py-5 w-full text-2xl bg-white"
          />
        </div>

        {/* Drop Input */}
        <div className="relative w-full max-w-[600px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
            <MapPin />
          </span>

          <input
            type="text"
            placeholder="Enter Drop Location"
            className="border border-black/70 rounded-md pl-12 pr-4 py-5 w-full text-2xl bg-white"
          />
        </div>

        {/* Button */}
        <button className="w-full max-w-[600px] h-[72px] text-[30px] font-bold bg-yellow-400 rounded-md">
          Book Ride
        </button>
      </div>
    </div>
  );
};

export default Hero;
