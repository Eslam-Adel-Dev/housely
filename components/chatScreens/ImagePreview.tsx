// react imports
import { Modal, TouchableWithoutFeedback, View } from "react-native";
// context
import { useImageContext } from "@/context/imageContext";
// imageZoom imports
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
//  gesture handler imports
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ImagePreview = () => {
  const { visible, uri, hideImage } = useImageContext();

  // test rerender
  console.warn("Image Preview Rendered");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={hideImage}
    >
      <TouchableWithoutFeedback onPress={hideImage}>
        <GestureHandlerRootView>
          <View className="flex-1 justify-center items-center bg-black/50">
            {uri && (
              <ImageZoom
                uri={uri}
                style={{ width: "100%", height: "100%", zIndex: 10 }}
                doubleTapScale={3}
              />
            )}
          </View>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ImagePreview;
