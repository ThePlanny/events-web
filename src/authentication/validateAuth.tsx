import type { User } from "./user";

export const getToken = async (): Promise<string | null> => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return user?.token;
};

export const getUser = async (): Promise<User> => {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : {};
};
