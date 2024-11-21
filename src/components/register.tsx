'use client';
import React from "react";
import { useState } from "react";
import { register } from "@/util/api";

function Register(){

    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [usernameError,setUsernameError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [confirmPasswordError,setConfirmPasswordError] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;
        setUsernameError(false);
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        setIsError(false);

        if(!username ){
          console.log("Please enter a username");
          setUsernameError(true);
          isValid = false;
        }
        if(!email){
          console.log("Please enter an email");
          setEmailError(true);
          isValid = false;
        }
        if(!password){
          console.log("Please enter a password");
          setPasswordError(true);
          isValid = false;
        }
        if(!confirmPassword){
          console.log("Please confirm your password");
          setConfirmPasswordError(true);
          isValid = false;
        }
        if(password !== confirmPassword){
          console.log("Passwords do not match");
          setIsError(true);
          isValid = false;
        }

        if(!isValid){
          return;
        }

        try{
          const response  = await register(username, email, password);
          if(response.status === 200){
            const data = await response.data;
            if(!data.error){
                window.location.href = "/login";
            }
          }
        }catch(e){
          console.error(e); 
        }
      }
    
    return (<>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-3/4 mx-auto py-10 rounded-lg">
              <h1 
                className="text-4xl font-bold font-press-start mb-6 drop-shadow-[3px_3px_3px_rgba(255,255,255,1)] 
                          hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-900 hover:to-[#141414] 
                          hover:text-transparent transition-colors duration-400 ease-in-out">
                Register
              </h1>
                <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col align-middle items-start justify-start w-full">
                      <input style={{cursor:"none"}} type="text" autoComplete="off" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="mb-2 p-2 text-white w-[100%] bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out" />
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start w-full">
                      <input style={{cursor:"none"}} type="text" autoComplete="off" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="mb-2 p-2 text-white w-[100%] bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out" />
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start w-full">
                      <input style={{cursor:"none"}} type="password" autoComplete="off" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="mb-2 p-2 text-white w-[100%] bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out" />
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start w-full">
                      <input style={{cursor:"none"}} type="password" autoComplete="off" id="ConfirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="mb-2 p-2 text-white w-[100%] bg-black border-[3px] border-white rounded-md font-press-start focus:shadow-md focus:shadow-white focus:outline-none transition-all duration-400 ease-in-out" />
                    </div>
                    <button style={{cursor:"none"}} id="hoverable" type="submit" className="font-press-start mx-[1rem] mt-[1rem] py-[0.5rem] px-[2rem] justify-end border-2 focus:outline-none border-white rounded-md transition-all duration-300 ease-in-out hover:scale-110  hover:bg-white hover:text-black">Register</button>
                  </form>
            </div>
            <div className={`align-middle justify-center items-center`}>
              <p style={usernameError? {opacity:1}: {opacity:0}} className={`${usernameError?"text-white font-press-start animate-glitch p-2":""}`}>Please Enter a Username</p>
              <p style={emailError? {opacity:1}: {opacity:0}} className={`${emailError?"animate-glitch text-white font-press-start p-2":""}`}>Please Enter a Email</p>
              <p style={passwordError? {opacity:1}: {opacity:0}} className={`${passwordError?"text-white font-press-start animate-glitch p-2":""}`}>Please Enter a Password</p>
              <p style={confirmPasswordError? {opacity:1}: {opacity:0}} className={`${confirmPasswordError?"text-white font-press-start animate-glitch p-2":""}`}>Please Enter a Confirm Password</p>
              <p style={isError? {opacity:1}: {opacity:0}} className={`${isError?"animate-glitch text-white font-press-start p-2":""}`}>Password and Confirm Password does not match</p>
            </div>
        </div>
    </>)
}

export default Register;