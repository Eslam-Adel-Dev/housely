// react imports
import { createContext, useContext, useMemo, useState } from "react";
// types imports
import {
  contextProviderProps,
  Coordinates,
  Properties,
  UserContextType,
} from "@/types/type";

//================================================

export const UserValueContext = createContext<UserContextType | null>(null);

//================================================

const UserContext = ({ children }: contextProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [favorites, setFavorites] = useState<Properties>([]);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  const value = useMemo(
    () => ({
      isLogged,
      favorites,
      login,
      logout,
      userLocation,
      setUserLocation,
      setIsLogged,
      setFavorites,
    }),
    [isLogged, favorites, userLocation],
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
