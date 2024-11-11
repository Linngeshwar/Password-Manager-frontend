'use client';
import React from "react";
import { useState } from "react";
import { register } from "@/util/api";

function Register(){

    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-1/4 bg-[#161616] mx-auto py-10 rounded-lg">
                Register
                <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col align-middle items-start justify-start">
                        <label htmlFor="username" id="username" className="my-2">Username:</label>
                        <input type="text" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start">
                        <label htmlFor="email" id="email" className="my-2">Email:</label>
                        <input type="email" id="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start">
                        <label htmlFor="password" id="password" className="my-2">Password:</label>
                        <input type="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex flex-col align-middle items-start justify-start">
                        <label htmlFor="confirmPassword" id="confirmPassword" className="my-2">Confirm Password:</label>
                        <input type="password" id="confirmPassword" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="">Register</button> 
                </form>
            </div>
        </div>
    </>)
}

export default Register;