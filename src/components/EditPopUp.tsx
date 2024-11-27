import React from "react";
import {useState, useEffect} from "react";
import { updateCredentials} from "@/util/api";
import { FaSave } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence,motion } from "framer-motion";

interface EditPopUpProps {
    website: string;
    credentialusername: string;
    encryptedpassword: string;
    uniqueID: string;
    onClose: () => void;
}

export default function EditPopUp(props: EditPopUpProps) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight.toString());
    const [windowWidth, setWindowWidth] = useState(window.innerWidth.toString());
    const [updateUsername, setUpdateUsername] = useState(props.credentialusername);
    const [updatePassword, setUpdatePassword] = useState(props.encryptedpassword);

    useEffect(() => {
        setWindowHeight(window.innerHeight.toString());
        setWindowWidth(window.innerWidth.toString());
    });

    async function handleupdate(website: string, username: string, password: string, uniqueID: string): Promise<void> {
        const response = await updateCredentials(website, username, password, uniqueID);
        if(response.status === 200){
            const data = await response.data;
            if(data.error){
                console.log("Error: ", data.error);
            }else{
                console.log("Success: ", data.success);
                window.location.reload();
                props.onClose();
            }
        }
    }

    return(
        <>
            {/* <div style={{width:windowWidth+"px",height:windowHeight+"px"}} 
                className="bg-black fixed top-0 left-0 grid grid-flow-col overflow-hidden">
            </div> */}
            <motion.div
                style={{ width: windowWidth + "px", height: windowHeight + "px" }}
                className="bg-black fixed z-30 top-0 left-0 grid grid-flow-col overflow-hidden"
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }} 
                transition={{
                    opacity: { duration: 0.5, ease: "easeInOut" },
                    scale: { duration: 0.6, ease: "easeInOut" },  
                }}
            >
                <label style={{cursor:"none"}} className="font-press-start place-self-center">{props.website}: </label>
                <input 
                    style={{cursor:"none"}} 
                    placeholder="Username" 
                    spellCheck="false" 
                    onFocus={(e) => e.currentTarget.value = updateUsername ? updateUsername : props.credentialusername} 
                    onBlur={(e) => e.currentTarget.value = ""} 
                    onChange={(e) => setUpdateUsername(e.target.value)}
                    className="font-press-start bg-transparent place-self-center h-9 text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out"
                />    
                <input 
                    style={{cursor:"none"}} 
                    placeholder="Password" 
                    spellCheck="false" 
                    onFocus={(e) => e.currentTarget.value = updatePassword ? updatePassword : props.encryptedpassword} 
                    onBlur={(e) => e.currentTarget.value = ""} 
                    onChange={(e) => setUpdatePassword(e.target.value)}
                    className="font-press-start bg-transparent place-self-center h-9 text-white border-white rounded-md border-[3px] p-1 focus:outline-none
                    focus:shadow-md focus:shadow-white transition-all duration-400 ease-in-out"
                />
                <button 
                    style={{cursor:"none"}} 
                    id="invis"
                    className="place-self-center border-white border-[3px] rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-black 
                    focus:outline-none focus:shadow-md focus:shadow-white transition-all duration-300 ease-in-out invis" 
                    onClick={() => handleupdate(props.website, updateUsername, updatePassword, props.uniqueID)}
                >
                    <FaSave className="color-change"/>
                </button>
                <button 
                    style={{cursor:"none"}} 
                    id="invis"
                    className="place-self-center border-white border-[3px] rounded-lg p-2 hover:scale-110 hover:bg-white hover:text-black 
                    focus:outline-none focus:shadow-md focus:shadow-whitetransition-all duration-300 ease-in-out invis" 
                    onClick={props.onClose}
                >
                    <FaXmark className="color-change"/>
                </button>
            </motion.div>
        </>
    );
}   