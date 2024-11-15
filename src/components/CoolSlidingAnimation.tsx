import React from "react";

export default function CoolSlidingAnimation(){
    return (
        <div className="w-[25%] h-full flex flex-row items-center gap-2 bg-white">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="relative flex-1 h-full group">
            {/* Base black bar */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Sliding overlay */}
            {index === 6 ? (
              <div id="black-bar" className="absolute inset-0 bg-black" />
            ) : (
              <div 
                id="white-bar"
                className="absolute inset-0 bg-white transform translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0 "
              />
            )}
          </div>
        ))}
      </div>
    );
}