// react imports
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
// hooks imports
import useMediaDimensions from "@/hooks/useMediaDimensions";
// types imports
import { size } from "@/types/type";
//=========================================================

const ImageBubble = React.memo(
  ({ imageProps }: any) => {
    const [size, setSize] = useState<null | size>(null);
    const { image } = imageProps.currentMessage;

    // get image dimensions (hook)
    useMediaDimensions({ media: image, setState: setSize });

    // rerender test
    console.warn("Image Bubble Rendered");

    const imageURL = imageProps.currentMessage.image;

    if (!imageURL || !size) return null;
    return (
      <TouchableOpacity
        onPress={imageProps.setImageSheetVisible}
        className="mb-2"
      >
        <Image
          source={{ uri: imageURL }}
          style={{
            width: size.width,
            height: size.height,
            borderRadius: 10,
          }}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    prevProps.imageProps.currentMessage.image ===
    nextProps.imageProps.currentMessage.image,
);

ImageBubble.displayName = "ImageBubble";

export default ImageBubble;
