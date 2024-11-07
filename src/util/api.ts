import axios from "axios";
import { NextRequest } from "next/server";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

export const login = (username: string , password:string) => api.post('/api/login', {username, password});
export const verifyToken = (req:NextRequest) =>{
    return api.get('/api/verify',{
        headers: {
            cookie: req.headers.get('cookie') || ""
        }
    });
}
export default api