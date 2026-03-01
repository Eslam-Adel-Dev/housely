// react
import { createContext, useContext, useMemo, useState } from "react";
// types imports
import { contextProviderProps, Properties } from "@/types/type";

export const UserValueContext = createContext<any>(null);

//================================================

const UserContext = ({ children }: contextProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [favorites, setFavorites] = useState<Properties>([]);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  const value = useMemo(
    () => ({
      isLogged,
      favorites,
      login,
      logout,
      setIsLogged,
      setFavorites,
    }),
    [isLogged, favorites],
  );

  return (
    <UserValueContext.Provider value={value}>
      {children}
    </UserValueContext.Provider>
  );
};

export default UserContext;

//================================================

export const useUserContext = () => {
  const context = useContext(UserValueContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
