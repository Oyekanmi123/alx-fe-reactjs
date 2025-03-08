const useAuth = () => {
    const user = localStorage.getItem("user"); // Simulating authentication state
    return { isAuthenticated: !!user }; // Convert to boolean
  };
  
  export default useAuth;