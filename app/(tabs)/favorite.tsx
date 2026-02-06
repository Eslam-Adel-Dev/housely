// react native imports
import { ScrollView, View } from "react-native";
// components imports
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import { properties } from "@/data/data";
import { FlashList } from "@shopify/flash-list";

const Favorite = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <TitleBar title="Favorite" />
        {/* --------------------------------------- */}
        <FlashList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard2 {...item} image={item.images[0]} fullWidth />
          )}
          horizontal={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4 h-4" />}
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="py-10"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Favorite;
