// react imports
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
// hooks imports
import useMediaDimensions from "@/hooks/useMediaDimensions";
// context for image preview
import { useImageContext } from "@/context/imageContext";
// types imports
import { size } from "@/types/type";
//=========================================================

const ImageBubble = React.memo(
  (props: any) => {
    const [size, setSize] = useState<null | size>(null);
    const { image } = props.currentMessage;
    const { showImage } = useImageContext();

    // get image dimensions (hook)
    useMediaDimensions({ media: image, setState: setSize });

    // rerender test
    console.warn("Image Bubble Rendered");

    const imageURL = props.currentMessage.image;

    if (!imageURL || !size) return null;

    return (
      <TouchableOpacity onPress={() => showImage(imageURL)} className="mb-2">
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
    prevProps.currentMessage.image === nextProps.currentMessage.image,
);

ImageBubble.displayName = "ImageBubble";

export default ImageBubble;
