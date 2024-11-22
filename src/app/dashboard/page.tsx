'use client'

import React from "react";
import WebsiteCredential from "@/components/WebsiteCredential";
import { credentialsFetch } from "@/util/api";
import { useEffect } from "react";

export default function dashboard(){

    interface Credential {
        website: string;
        username: string;
        password: string;
        uniqueId: string;
    }

    const [credentials, setCredentials] = React.useState<Credential[]>([]);

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
        <div className="flex flex-col items-center justify-center align-middle">
            {credentials.map((credential,key) => {
                return (<WebsiteCredential 
                    key={key}
                    website={credential.website} 
                    username={credential.username} 
                    password={credential.password} 
                    uniqueId={credential.uniqueId}
                />)
                }) 
            }
        </div>
        </>
    )
}