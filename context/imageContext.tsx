// react imports
import { createContext, useContext, useMemo, useState } from "react";
// context type
import { contextProviderProps, ImageContextType } from "@/types/type";

export const ImageValueContext = createContext<ImageContextType | null>(null);

// provider component
const ImageContext = ({ children }: contextProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState<string | undefined>(undefined);

  const showImage = (imageUri: string) => {
    setUri(imageUri);
    setVisible(true);
  };

  const hideImage = () => {
    setVisible(false);
    setUri(undefined);
  };

  const value = useMemo(
    () => ({ visible, uri, showImage, hideImage }),
    [visible, uri],
  );

  return (
    <ImageValueContext.Provider value={value}>
      {children}
    </ImageValueContext.Provider>
  );
};

export default ImageContext;

// custom hook
export const useImageContext = () => {
  const context = useContext(ImageValueContext);
  if (!context) {
    throw new Error(
      "useImageContext must be used within an ImageContextProvider",
    );
  }
  return context;
};
