import { NextRequest,NextResponse } from "next/server"; 
import getAuth from "@/util/getAuth";

export default async function middleware(req: NextRequest) {
    const data = await getAuth(req);
    const path = req.nextUrl.pathname;
    const protectedPaths = ["/dashboard"];
    const nonProtectedPaths = ["/login"];
    const token = data.newToken;
    if (token) {
        const response = NextResponse.next();
        response.cookies.set("token", token, { httpOnly: true, secure: true });
        return response;
    }
    
    if( data.auth && path === "/login" || 
        data.auth && path === "/register"
    ) { 
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }else if(!data.auth && path === "/dashboard") {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
}   