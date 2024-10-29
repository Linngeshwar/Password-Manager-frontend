import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
})

export const login = (username: string , password:string) => api.post('/api/login', {username, password});
export default api;     