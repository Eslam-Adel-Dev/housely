// react imports
import React, { useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
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
    const { image, status } = props.currentMessage;
    const { showImage } = useImageContext();

    // get image dimensions (hook)
    useMediaDimensions({ media: image, setState: setSize });

    // rerender test
    console.warn("Image Bubble Rendered");

    const imageURL = props.currentMessage.image;

    if (!imageURL || !size) return null;

    const isLoading = status === "uploading" || status === "pending";

    return (
      <TouchableOpacity
        onPress={() => !isLoading && showImage(imageURL)}
        className="mb-2"
        disabled={isLoading}
      >
        <View style={{ width: size.width, height: size.height }}>
          <Image
            source={{ uri: imageURL }}
            style={{
              width: size.width,
              height: size.height,
              borderRadius: 10,
              opacity: isLoading ? 0.5 : 1,
            }}
            resizeMode="stretch"
          />
          {isLoading && (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: 10,
              }}
            >
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    prevProps.currentMessage.image === nextProps.currentMessage.image &&
    prevProps.currentMessage.status === nextProps.currentMessage.status,
);

ImageBubble.displayName = "ImageBubble";

export default ImageBubble;
