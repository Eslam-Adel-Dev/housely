import { Dimensions } from "react-native";

const useScreenDimensions = () => {
  const screenHeight = Dimensions.get("screen").height;
  const screenWidth = Dimensions.get("screen").width;

  return {
    screenHeight,
    screenWidth,
  };
};

export default useScreenDimensions;
