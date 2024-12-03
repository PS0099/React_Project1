import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/localStorage";

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [] });

  // Populate userData with localStorage data on mount
  useEffect(() => {
    const storedData = getLocalStorage();

    if (storedData && Array.isArray(storedData.employees) && storedData.admin) {
      // If valid stored data, set it to userData
      setUserData(storedData);
    } else {
      // Initialize with default structure if no valid data exists
      const initialData = { employees: [] };
      setLocalStorage(initialData); // Store default data
      setUserData(initialData); // Set initial userData
    }
  }, []);

  // Sync userData to localStorage whenever it changes
  useEffect(() => {
    if (userData && Array.isArray(userData.employees)) {
      // Ensure userData is an object with employees before saving
      setLocalStorage({ employees: userData.employees });
    } else {
      console.warn("Invalid userData format detected.");
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
