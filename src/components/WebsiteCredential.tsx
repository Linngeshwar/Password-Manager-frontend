'use client'
import React from "react";
import { FaPen } from "react-icons/fa";

export default function WebsiteCredential(props:{
    website:string,
    username:string,
    password:string
    uniqueId:string
}){
    return(
        <>
            <div className="grid grid-flow-col gap-3">
                <label style={{cursor:"none"}} className="font-press-start place-self-center">{props.website}: </label>
                <input style={{cursor:"none"}} readOnly placeholder="Username" onFocus={(e) => e.currentTarget.value = props.username} 
                    onBlur={(e) => e.currentTarget.value = ""} spellCheck="false"
                    className="font-press-start bg-transparent text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out "
                >
                </input>    
                <input style={{cursor:"none"}} readOnly placeholder="Password" onFocus={(e) => e.currentTarget.value = props.username} 
                onBlur={(e) => e.currentTarget.value = ""} spellCheck="false"
                className="font-press-start bg-transparent text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out "
                >
                </input>
                <button style={{cursor:"none"}} 
                    id="invis"
                    className="place-self-center border-white border-[3px] rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-black 
                    focus:outline-none transition-all duration-300 ease-in-out invis" 
                    onClick={() => console.log("edit")}
                >
                        <FaPen  className="color-change"/>
                </button>
            </div>
        </>
    )
}

