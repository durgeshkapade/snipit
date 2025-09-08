import axios from "axios";
import type { Ref, RefObject } from "react";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

export const submitPaste = async (userInputRef:RefObject<HTMLTextAreaElement | null>) => {
    const value = userInputRef.current?.value || "";
    const response = await api.post('/', { content: value });
    const data = response.data;
    if (response.status == 200) {
        alert("submitted with id: " + data.id)
    }
    return data;
}

export default api;