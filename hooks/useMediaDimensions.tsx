// react imports
import React, { useEffect } from "react";
import { Image } from "react-native";

//=====================================================

interface Props {
  media: string;
  setState: React.Dispatch<
    React.SetStateAction<{ width: number; height: number } | null>
  >;
}

//=====================================================

const useMediaDimensions = ({ media, setState }: Props) => {
  useEffect(() => {
    Image.getSize(media, (width, height) => {
      setState({ width: width * 0.2, height: height * 0.2 });
    });
  }, [media, setState]);
};

export default useMediaDimensions;
