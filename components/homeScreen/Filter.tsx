// react native imports
import { Image, Text, TouchableOpacity } from "react-native";
// types imports
import { FilterProps } from "@/types/type";

const Filter = ({
  id,
  image,
  filterName,
  selectedFilter,
  setSelectedFilter,
}: FilterProps) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedFilter(id)}
      className="flex-row items-center gap-3 border border-zinc-300 rounded-xl p-2 px-3"
      style={{
        backgroundColor: selectedFilter === id ? "#7F56D9" : "transparent",
      }}
    >
      <Image
        source={image}
        className="w-16 h-10 rounded-xl"
        resizeMode="cover"
        style={{
          borderWidth: selectedFilter === id ? 1 : 0,
          borderColor: selectedFilter === id ? "white" : "transparent",
        }}
      />
      <Text
        style={{
          color: selectedFilter === id ? "white" : "black",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {filterName}
      </Text>
    </TouchableOpacity>
  );
};

export default Filter;
