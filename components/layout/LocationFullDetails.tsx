// react imports
import React from "react";
// react-native imports
import { Modal, Text, TouchableOpacity, View } from "react-native";
// icons imports
import { X } from "lucide-react-native";
// types imports
import { LocationFullDetailsProps } from "@/types/type";

//=============================================

const LocationFullDetails = ({
  visible,
  onClose,
  locationName,
}: LocationFullDetailsProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 justify-center items-center bg-black/40 px-6"
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          className="w-full bg-white rounded-3xl p-6 shadow-xl"
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-zinc-800">
              Full Location
            </Text>
            <TouchableOpacity onPress={onClose} className="p-1">
              <X size={24} color="#52525b" />
            </TouchableOpacity>
          </View>

          <View className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
            <Text className="text-lg text-zinc-700 leading-6 text-center">
              {locationName}
            </Text>
          </View>

          <TouchableOpacity
            onPress={onClose}
            className="mt-6 bg-primary-600 p-4 rounded-2xl items-center"
          >
            <Text className="text-white font-bold text-lg">Close</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default LocationFullDetails;
