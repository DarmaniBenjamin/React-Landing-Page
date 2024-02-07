import React from "react";
import image from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={image} alt="Laptop Image" className="w-[500px] mx-uto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            rem debitis illum corrupti similique voluptate, vitae atque
            distinctio, doloremque facere iusto dolorem nobis minus dolore iure
            laborum. Aliquam, sequi iure.
          </p>
          <button className="bg-black text-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3  cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
