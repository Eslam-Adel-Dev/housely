// react native imports
import { Text, View } from "react-native";
// images imports
import EmptyBookingImage from "@/assets/images/NoBooking.svg";

const EmptyBooking = () => {
  return (
    <View className="items-center justify-center">
      <EmptyBookingImage size={100} />
      <View className="w-full items-center justify-center gap-3 my-10">
        <Text className="font-bold text-2xl text-center">
          You have no upcoming booking
        </Text>
        <View className="px-12">
          <Text className="text-md text-zinc-400 text-center">
            are you looking fo a{" "}
            <Text className="text-primary-500"> completed</Text> or{" "}
            <Text className="text-primary-500">cancelled</Text> booking ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyBooking;
