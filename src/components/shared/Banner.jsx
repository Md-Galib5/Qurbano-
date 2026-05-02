import React from 'react';
import Image from 'next/image';
import IMG from "../../assets/cows-green-field.jpg";

const Banner = () => {
  return (
    <div className="relative container mx-auto w-full h-[400px] sm:h-[550px] mt-3">
      <Image
        src={IMG}
        alt="cow field"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to the Farm
        </h1>

        <p className="mb-6 text-sm md:text-lg">
          Fresh air, green fields, and happy cows 🐄
        </p>

        <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;