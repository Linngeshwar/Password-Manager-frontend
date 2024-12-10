import React from "react";

export default function CoolSlidingAnimation(){
    return (
        <div className="w-96 h-full flex flex-row items-center gap-[8px] bg-white">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="relative flex-1 h-full group">
            {/* Base black bar */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Sliding overlay */}
            {index === 6 ? (
              <>
                {/* <div id="black-bar" className="absolute inset-0 bg-black" /> */}
              </>
            ) 
            // : index===1 ? (<>
            //     <div 
            //       id="white-bar"
            //       className="absolute inset-0 bg-white text-black transform translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0 "
            //     >
            //       <div className="flex flex-col place-self-center justify-center p-2">
            //         <span className="place-self-center font-press-start">H</span>
            //         <span className="place-self-center font-press-start">O</span>
            //         <span className="place-self-center font-press-start">M</span>
            //         <span className="place-self-center font-press-start ">E</span>
            //       </div>
            //     </div>
            //     <div 
            //       id="black-bar" 
            //       className="absolute inset-0 bg-black w-[10px] -translate-x-full -translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"
            //     />
            // </>) 
            : (
              <>
                <div 
                  id="white-bar"
                  className="absolute inset-0 bg-white transform translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0 "
                />
                <div 
                  id="black-bar" 
                  className="absolute inset-0 bg-black w-[10px] -translate-x-full -translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"
                />
              </>
            )}
          </div>
        ))}
      </div>
    );
}