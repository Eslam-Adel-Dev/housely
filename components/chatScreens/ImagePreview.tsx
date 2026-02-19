// react imports
import { Modal, TouchableWithoutFeedback, View } from "react-native";
// types imports
import { ImagePreviewProps } from "@/types/type";
// imageZoom imports
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
//  gesture handler imports
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ImagePreview = ({ visible, onClose }: ImagePreviewProps) => {
  // test rerender
  console.warn("Image Preview Rendered");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <GestureHandlerRootView>
          <View className="flex-1 justify-center items-center bg-black/50">
            <ImageZoom
              uri="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
              style={{ width: "100%", height: "100%", zIndex: 10 }}
              doubleTapScale={3}
            />
          </View>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ImagePreview;
