// react native imports
import { View } from "react-native";
// components imports
import NoFavoriteImage from "@/assets/images/NoLocation.svg";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import EmptyState from "@/components/ui/EmptyState";
// context imports
import { useUserContext } from "@/context/userContext";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// types imports
import { Property } from "@/types/type";

//===================================================================

const Favorite = () => {
  const { favorites } = useUserContext() as { favorites: Property[] };

  // ui part
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
        ListEmptyComponent={
          <EmptyState
            ImageComp={NoFavoriteImage}
            title="You have no favorites yet"
            subTitle="Start exploring and save your favorite properties here!"
          />
        }
      />
    </ScreenWrapper>
  );
};

export default Favorite;
