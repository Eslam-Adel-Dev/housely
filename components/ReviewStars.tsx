// react native imports
import { View } from "react-native";
//icons imports
import { Review } from "@/types/type";
import AntDesign from "@expo/vector-icons/AntDesign";
// util functions
import { avgPropertyRatingFunction } from "@/lib/utils";
//============================================

interface ReviewStarsProps {
  reviews: Review[] | number;
  starSize?: number;
}

const ReviewStars = ({ reviews, starSize }: ReviewStarsProps) => {
  let rating = 0;
  let remainingStars = 5;

  if (Array.isArray(reviews)) {
    const avgRating = avgPropertyRatingFunction(reviews);
    rating = Math.floor(avgRating);
    remainingStars = 5 - rating;
  } else if (typeof reviews === "number") {
    rating = Math.floor(reviews);
    remainingStars = 5 - rating;
  }

  return (
    <View className="flex-row items-center gap-1">
      {Array.from({ length: rating }, (_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={starSize || 20}
          color="#FDB022"
        />
      ))}
      {Array.from({ length: remainingStars }, (_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={starSize || 20}
          color="#FEDF89"
        />
      ))}
    </View>
  );
};

export default ReviewStars;
