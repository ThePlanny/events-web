import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const ValidateAuth = () => {
  const userAuthenticated = useAuth((state) => state.userAuthenticated);
  console.log("🥑 ~ useEffect ~ userAuthenticated:", userAuthenticated);

  useEffect(() => {
    if (!userAuthenticated) {
      window.location.href = "/auth/login";
    }
  }, [userAuthenticated]);

  return null; // No necesitas renderizar nada, solo manejar la redirección
};
