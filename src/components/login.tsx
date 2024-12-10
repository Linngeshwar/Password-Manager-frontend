'use client';

import React from "react";
import { useState,useEffect } from "react";
import { login } from "../util/api";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError,setUsernameError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
          let isValid = true;
          setPasswordError(false);
          setUsernameError(false);
          if(!username ){
            setUsernameError(true);
            isValid = false;
          }
          if(!password){
            setPasswordError(true);
            isValid = false;
          }
          if(!isValid){
            return;
          }
          const response  = await login(username, password);
          if(response.status === 200){
            const data = await response.data;
            console.log(data);
            if(!data.error){
                window.location.href = "/dashboard";
            }
          }
        }catch(e){
          console.error(e); 
        }
      }
      
      useEffect(() => {
      },[]);

      return (<>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col align-middle items-center justify-center h-auto w-2/3 p-10 pb-15 mx-auto">
          <h1 className="text-4xl font-bold font-press-start mb-6 drop-shadow-[3px_3px_3px_rgba(255,255,255,1)] hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-[#141414] hover:text-transparent transition-colors duration-400 ease-in-out">Login</h1>
          <form className="flex flex-col align-middle items-center justify-center w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col align-middle items-start justify-start w-[100%]">
          <input style={{cursor:"none"}} type="text" autoComplete="off" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="mb-2 p-2 text-white w-[100%] bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out" />
        </div>
        <div className="flex flex-col align-middle items-start justify-start w-full">
          <input style={{cursor:"none"}} type="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} 
          className="mb-2 p-2 text-white w-full bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md 
          focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out"></input>  
        </div>
        <button style={{cursor:"none"}} id="hoverable" type="submit" className="font-press-start mx-[1rem] mt-[1rem] py-[0.5rem] px-[2rem] justify-end border-2 focus:outline-none border-white rounded-md transition-all duration-300 ease-in-out hover:scale-110  hover:bg-white hover:text-black">Login</button>
          </form>
        </div>
        <div className={`align-middle justify-center items-center`}>
            <p style={usernameError? {opacity:1}: {opacity:0}} className={`text-white font-press-start ${usernameError?"animate-glitch":""} p-2`}>Please Enter a Username</p>
            <p style={passwordError? {opacity:1}: {opacity:0}} className={`text-white font-press-start ${passwordError?"animate-glitch":""} p-2`}>Please Enter a Password</p>
        </div>
      </div>
      </>);
}

export default Login;