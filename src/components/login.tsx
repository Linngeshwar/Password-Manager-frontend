'use client';

import React from "react";
import { useState } from "react";
import { login } from "../util/api";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{

          if(!username ){
            console.log("Please enter a username");
            return;
          }
          if(!password){
            console.log("Please enter a password");
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
    
      return (<>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col align-middle items-center justify-center h-auto w-1/4 bg-[#161616] p-10 pb-15 mx-auto">
          <h1 className="text-4xl font-bold">Login</h1>
          <form className="flex flex-col align-middle items-center justify-center" onSubmit={handleSubmit}>
            <div className="flex flex-col align-middle items-start justify-start">
              <label htmlFor="username" className="mt-2">Username:</label>
              <input type="text" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="mb-2 p-2 text-black" />
            </div>
            <div className="flex flex-col align-middle items-start justify-start">
              <label htmlFor="password" className="mt-2">Password:</label>
              <input type="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} className="mb-2 p-2 text-black" /> 
            </div>
            <button type="submit" className="bg-black px-8 py-2 mt-4">Login</button>
          </form>
        </div>
      </div>
      </>);
}

export default Login;