import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../utils/constants";
import { LoginUserDto } from "../schemas/types";

export default function useLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  async function login(email: string, password: string) {
    if (!email.trim().length || !password) {
      throw "All fields are required";
    }
    setLoading(true);
    try {
      const res = await axios.post<LoginUserDto>(`${API_URL}/auth/login`, {
        email,
        password,
      });
      const { data: user } = res;

      if (!user.data) throw "Invalid username or password";

      localStorage.setItem("token", user.data.token);
      localStorage.setItem("userId", user.data.id);
      
      navigate("/dashboard", { replace: true });
    } catch (error) {
      throw error ||"Invalid username or password";
    } finally {
      setLoading(false);
    }
  }
  return { loading, login };
}
