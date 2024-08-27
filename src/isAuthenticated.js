export const isAuthenticated = () => {
  return new Promise((resolve) => {
    const storedPassword = localStorage.getItem("password");
    resolve(storedPassword === "182644");
  });
};