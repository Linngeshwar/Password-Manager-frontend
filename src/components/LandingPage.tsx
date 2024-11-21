'use client'
import React from "react";
import CoolSlidingAnimation from "./CoolSlidingAnimation";

const LandingPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <CoolSlidingAnimation/>
      <div className="flex flex-col h-screen ">
        <div className="flex flex-row mt-[2rem] ml-[5rem]">
            <p className="place-self-start font-press-start text-4xl mt-[3rem] mr-[2rem] drop-shadow-[3px_3px_3px_rgba(255,255,255,1)] hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-black hover:text-transparent transition-colors duration-400 ease-in-out">
            Password Manager
            </p>
            <button id="hoverable" style={{cursor:"none"}} className="place-self-end font-press-start mx-[1rem] py-[0.5rem] px-[2rem] justify-end border-2 focus:outline-none border-white rounded-md transition-all duration-300 ease-in-out hover:scale-110  hover:bg-white hover:text-black"
                onClick={() => window.location.href = "/register"}
            >Register</button>
            <button id="hoverable" style={{cursor:"none"}} className="place-self-end font-press-start mx-[1rem] py-[0.5rem] px-[2rem] justify-end border-2 focus:outline-none border-white rounded-md transition-all duration-300 ease-in-out hover:scale-110  hover:bg-white hover:text-black"
                onClick={() => window.location.href = "/login"}
            >Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;