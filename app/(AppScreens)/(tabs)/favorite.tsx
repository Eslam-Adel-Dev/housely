// react native imports
import { RefreshControl, View } from "react-native";
// components imports
import NoFavoriteImage from "@/assets/images/NoLocation.svg";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import EmptyState from "@/components/ui/EmptyState";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// hooks imports
import { useFavoriteProperties } from "@/hooks/useFavoriteProperties";
import { Property } from "@/types/type";
// skeletons imports
import PropertyCard2Skeleton from "@/components/skeletons/PropertyCard2Skeleton";

//===================================================================

const Favorite = () => {
  const { favorites, isFavoritesPending, refreshFavorites } =
    useFavoriteProperties();

  return (
    <ScreenWrapper>
      <TitleBar title="Favorite" />

      {isFavoritesPending ? (
        <View className="flex-1 mt-5">
          {[...Array(10)].map((_, index) => (
            <View key={index} className="mb-4">
              <PropertyCard2Skeleton fullWidth={true} />
            </View>
          ))}
        </View>
      ) : (
        <FlashList
          data={favorites}
          renderItem={({ item }: { item: Property }) => (
            <PropertyCard2 {...item} image={item?.images?.[0]} fullWidth />
          )}
          horizontal={false}
          keyExtractor={(item) => item._id.toString()}
          ItemSeparatorComponent={() => <View className="w-4 h-4" />}
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="py-10"
          contentContainerStyle={
            favorites?.length === 0
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
          refreshControl={
            <RefreshControl
              refreshing={isFavoritesPending}
              onRefresh={refreshFavorites}
            />
          }
        />
      )}
    </ScreenWrapper>
  );
};

export default Favorite;
