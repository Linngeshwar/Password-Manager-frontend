'use client'

import React from "react";
import WebsiteCredential from "@/components/WebsiteCredential";
import { credentialsFetch } from "@/util/api";
import CoolSlidingAnimation from "@/components/CoolSlidingAnimation";
import { addCredentials } from "@/util/api";
import { useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function dashboard(){

    interface Credential {
        website: string;
        credentialusername: string;
        encryptedpassword: string;
        uniqueid: string;
    }

    const [credentials, setCredentials] = React.useState<Credential[]>([]);
    const [isAdd, setIsAdd] = React.useState(false);

    const toggleAdd = () => {
        setIsAdd(!isAdd);
    }

    const add = () => {
        return(
            <>
                <motion.form className="flex flex-col gap-4 items-center justify-center align-middle"
                    exit={{y: "-100%", opacity: 0}}
                    initial={{y: "-100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.75}}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const website = (form.elements.namedItem('website') as HTMLInputElement).value;
                        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
                        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
                        handleAddCredentials(username, website, password);
                    }}
                >
                    <input 
                        name="website"
                        style={{cursor:"none"}} 
                        placeholder="Website" 
                        spellCheck="false" 
                        className="font-press-start bg-transparent h-9 text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                        focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out"
                    />
                    <input 
                        name="username"
                        style={{cursor:"none"}} 
                        placeholder="Username" 
                        spellCheck="false" 
                        className="font-press-start bg-transparent h-9 text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                        focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out"
                    />
                    <input 
                        name="password"
                        style={{cursor:"none"}}
                        placeholder="Password" 
                        spellCheck="false" 
                        className="font-press-start bg-transparent h-9 text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                        focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out"
                    />
                    <button 
                        style={{cursor:"none"}} 
                        type="submit"
                        className="px-10 py-2 flex flex-row border-white border-[3px] rounded-lg  hover:scale-110 hover:bg-white hover:text-black 
                        focus:outline-none focus:shadow-md place-self-center focus:shadow-white transition-all duration-300 ease-in-out"
                    >
                        <p className="font-press-start place-self-end">ADD</p>
                    </button>
                </motion.form>
            </>
        )
    }

    const handleAddCredentials = async (username:string,website:string,password:string) => {
        console.log(username, website, password);
        const response = await addCredentials(website, username, password);
        if(response.status === 200){
            const data = await response.data;
            if(data.error){
                console.log("Error: ", data.message);
            }else{
                console.log("Success: ", data.message);
                window.location.reload();
            }
        }
    }

    useEffect(() => {
        const fetchCredentials = async () => {
            const response = await credentialsFetch();
            const data = response.data;
            setCredentials(data);
        }
        fetchCredentials();
    }, []);
    return(
        <>
            <motion.div className="flex flex-row h-screen"
                initial={{y: "-100%", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.75}}
            >
                <CoolSlidingAnimation />
                <div className="flex flex-col gap-4 w-full h-full py-4"
                >
                <AnimatePresence>
                    {isAdd && (
                    <motion.div
                        key="add-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.75 }}
                        className="overflow-hidden"
                    >
                        {add()}
                    </motion.div>
                    )}
                </AnimatePresence>
                <button 
                    style={{cursor:"none"}} 
                    id="invis"
                    className="px-10 py-2 flex flex-row border-white border-[3px] rounded-lg  hover:scale-110 hover:bg-white hover:text-black 
                    focus:outline-none focus:shadow-md place-self-start focus:shadow-white transition-all duration-300 ease-in-out invis" 
                    onClick={toggleAdd}
                >
                    <p className="font-press-start place-self-end">ADD</p>
                </button>        
                <div className="flex flex-col items-center justify-center align-middle">
                    {credentials.map((credential,key) => {
                        return (<WebsiteCredential 
                            key={key}
                            website={credential.website} 
                            credentialusername={credential.credentialusername} 
                            encryptedpassword={credential.encryptedpassword} 
                            uniqueID={credential.uniqueid}
                        />)
                        }) 
                    }
                </div>
                </div>    
            </motion.div>
        </>
    )
}