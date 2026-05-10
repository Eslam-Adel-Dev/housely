import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

interface PropertyImagesProps {
  images: string[];
}

const PropertyImages = ({ images }: PropertyImagesProps) => {
  return (
    <View className="h-[250px] rounded-2xl overflow-hidden">
      <Swiper loop={true} autoplay={true} activeDotColor="#7F56D9">
        {images?.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            className="h-full w-full"
          />
        ))}
      </Swiper>
    </View>
  );
};

export default PropertyImages;
