import PropertyCard2Error from "@/components/error/property/PropertyCard2Error";
import PropertyCardError from "@/components/error/property/PropertyCardError";
import PropertyCard2Skeleton from "@/components/skeletons/PropertyCard2Skeleton";
import PropertyCardSkeleton from "@/components/skeletons/PropertyCardSkeleton";
import { Property } from "@/types/type";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import PropertyCard from "./PropertyCard";
import PropertyCard2 from "./PropertyCard2";

interface PropertyCardListProps {
  data?: Property[];
  isPending: boolean;
  isError: boolean;
  onRetry: () => void;
  variant?: "large" | "small";
}

const PropertyCardList = ({
  data,
  isPending,
  isError,
  onRetry,
  variant = "large",
}: PropertyCardListProps) => {
  if (isPending) {
    return (
      <FlashList
        data={[1, 2, 3] as any}
        renderItem={() =>
          variant === "large" ? (
            <PropertyCardSkeleton />
          ) : (
            <PropertyCard2Skeleton fullWidth={false} />
          )
        }
        horizontal={true}
        keyExtractor={(item: any) => item.toString()}
        ItemSeparatorComponent={() => <View className="w-4" />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={variant === "small" ? { paddingRight: 20 } : {}}
      />
    );
  }

  if (isError) {
    return variant === "large" ? (
      <PropertyCardError onRetry={onRetry} />
    ) : (
      <View className="w-full pr-5">
        <PropertyCard2Error fullWidth onRetry={onRetry} />
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      renderItem={({ item }: { item: Property }) =>
        variant === "large" ? (
          <PropertyCard {...item} image={item.images?.[0]} />
        ) : (
          <PropertyCard2 {...item} fullWidth={false} />
        )
      }
      horizontal={true}
      keyExtractor={(item) => item._id.toString()}
      ItemSeparatorComponent={() => <View className="w-4" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={variant === "small" ? { paddingRight: 20 } : {}}
    />
  );
};

export default PropertyCardList;
