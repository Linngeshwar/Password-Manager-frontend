'use client';
import React from "react";
import getAuth from "@/util/getAuth";
import { useEffect } from "react";
import {verifyToken} from "@/util/api";

import Login from "@/components/login";
import { get } from "http";

export default function signin() {
    // useEffect(() => {
    //     getAuth().then((data) => {
    //         if(data) {
    //             console.log(data);
    //         }
    //     })
    // });
    return(<>
        <Login />
    </>)
};