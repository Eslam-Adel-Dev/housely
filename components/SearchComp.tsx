// react native imports
import { TouchableOpacity, View } from "react-native";
// icons imports
import Filter from "@/assets/icons/Filter.svg";
import Search from "@/assets/icons/Search.svg";
import { Input } from "./ui/input";

const SearchComp = () => {
  return (
    <View className="w-full border-2 border-zinc-300/50 rounded-2xl px-4 py-2 flex-row items-center justify-between">
      <Search size={20} />
      <Input
        keyboardType="default"
        textContentType="name"
        autoComplete="name"
        placeholder="Search Here..."
        className="border-0 shadow-none outline-none flex-1 placeholder:text-zinc-400 text-zinc-600"
      />
      <TouchableOpacity>
        <Filter size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComp;
