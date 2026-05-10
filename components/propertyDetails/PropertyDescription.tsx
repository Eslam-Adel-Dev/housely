import { View, Text } from "react-native";

interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription = ({ description }: PropertyDescriptionProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold" numberOfLines={1}>
        Description
      </Text>
      <Text className="text-zinc-400 text-md leading-6">
        {description}
      </Text>
    </View>
  );
};

export default PropertyDescription;
