import { NextRequest } from "next/server";
import { verifyToken } from "./api";
export const getAuth = async (req:NextRequest) => {
    const verify = await verifyToken(req);
    const data = await verify.data;
    return data;
}
export default getAuth;
