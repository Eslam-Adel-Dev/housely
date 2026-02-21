import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// types imports
import { ActionSheetProps } from "@/types/type";

// icons imports
import Feather from "@expo/vector-icons/Feather";

//=========================================

const ActionSheet = ({
  visible,
  onClose,
  onPickImage,
  onPickVideo,
  onPickPdf,
}: ActionSheetProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-end bg-zinc-700/30">
          <TouchableWithoutFeedback>
            <View className="py-5 px-10 mb-5 mx-2 bg-white rounded-[30px] shadow-xl  shadow-slate-600 border-2 border-zinc-300">
              <Text className="text-xl font-bold">Choose An action</Text>

              {/* buttons container */}
              <View className="flex-row items-center justify-center gap-12 mb-4 mt-7">
                {/* image button */}
                <View className="items-center justify-center gap-2">
                  <TouchableOpacity
                    onPress={() => {
                      onPickImage();
                      onClose();
                    }}
                    className="rounded-full p-4 bg-green-400"
                  >
                    <Feather name="image" size={30} color="white" />
                  </TouchableOpacity>
                  <Text className="font-bold">Image</Text>
                </View>

                {/* video button */}
                <View className="items-center justify-center gap-2">
                  <TouchableOpacity
                    onPress={() => {
                      onPickVideo();
                      onClose();
                    }}
                    className="rounded-full p-4 bg-violet-400"
                  >
                    <Feather name="video" size={30} color="white" />
                  </TouchableOpacity>
                  <Text className="font-bold">Video</Text>
                </View>
              </View>

              <TouchableOpacity className="mt-2 py-3" onPress={onClose}>
                <Text className="text-white text-center text-[15px] font-bold bg-primary-500 py-4 rounded-full">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ActionSheet;
