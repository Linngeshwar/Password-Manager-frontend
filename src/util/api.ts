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
export const register = (username:string ,email:string, password:string) => api.post('/api/register', {username, email, password});
export const credentialsFetch = () => api.post('/api/credential/fetchall');
export const updateCredentials = (website:string, credentialusername:string, password:string, uniqueID:string) => api.post('/api/credential/updatecredentials', {website, credentialusername, password, uniqueID});
export const deleteCredentials = (uniqueID:string) => api.post('/api/credential/delete', {uniqueID});
export const addCredentials = (website:string, credentialusername:string, password:string) => api.post('/api/credential/add', {website, credentialusername, password});
export default api