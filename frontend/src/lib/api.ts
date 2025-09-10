import axios from "axios";
import type { RefObject } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const useApiHelpers = () => {
  const getServerStatus = async () => {
    try {
      const response = await api.get("/");
      return response.status == 200;
    } catch {
      return false;
    }
  };
  const submitPaste = async (
    userInputRef: RefObject<HTMLTextAreaElement | null>,
  ) => {
    const value = userInputRef.current?.value || "";
    const response = await api.post("/", { content: value });
    const data = response.data;
    return data.id;
  };

  const getPaste = async (id: string) => {
    const response = await api.get("/" + id);
    const data = response.data;
    return data;
  };

  const deletePaste = async (id: string) => {
    const response = await api.delete("/" + id);
    const data = response.data;
    return data;
  };

  return {
    getServerStatus,
    submitPaste,
    getPaste,
    deletePaste,
  };
};

export default api;
