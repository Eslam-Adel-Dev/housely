import { View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ReviewComp from "@/components/propertyScreen/Review";
import { Review } from "@/types/type";

interface PropertyReviewsProps {
  reviews: Review[];
}

const PropertyReviews = ({ reviews }: PropertyReviewsProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold">Reviews</Text>

      <FlashList
        data={reviews}
        renderItem={({ item }: { item: Review }) => (
          <ReviewComp {...item} />
        )}
        horizontal={true}
        keyExtractor={(item) => {
          if (typeof item._id === "number") {
            return item._id.toString();
          }
          return item._id;
        }}
        ItemSeparatorComponent={() => <View className="w-4" />}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default PropertyReviews;
