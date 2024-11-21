import { NextRequest } from "next/server";
import { verifyToken } from "./api";
export const getAuth = async (req:NextRequest) => {
    try{
        const verify = await verifyToken(req);
        // console.log(verify);
        const data = await verify.data;
        return data;
    }catch(e){
        return {error: true};
    }
}
export default getAuth;
