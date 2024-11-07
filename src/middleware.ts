import { NextRequest,NextResponse } from "next/server"; 
import getAuth from "@/util/getAuth";

export default async function middleware(req: NextRequest) {
    const data = await getAuth(req);
    const path = req.nextUrl.pathname;
    if(data.auth && path === "/login"){ 
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }else if(!data.auth && path === "/dashboard") {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
}   