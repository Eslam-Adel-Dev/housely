// react native imports
import { View } from "react-native";
// components imports
import EmptyBooking from "@/components/bookingScreen/EmptyBooking";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
// context imports
import { useUserContext } from "@/context/userContext";
// flashlist imports
import { FlashList } from "@shopify/flash-list";

const Favorite = () => {
  const { favorites } = useUserContext();
  return (
    <ScreenWrapper>
      <TitleBar title="Favorite" />
      {/* --------------------------------------- */}

      <FlashList
        data={favorites}
        renderItem={({ item }) => (
          <PropertyCard2 {...item} image={item.images[0]} fullWidth />
        )}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="w-4 h-4" />}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="py-10"
        contentContainerStyle={
          favorites.length === 0
            ? { flex: 1, justifyContent: "center", alignItems: "center" }
            : {}
        }
        ListEmptyComponent={<EmptyBooking />}
      />
    </ScreenWrapper>
  );
};

export default Favorite;
