export const getToken = async (): Promise<string | null> => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return user?.token;
};
