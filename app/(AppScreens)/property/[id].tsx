// react native imports
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// components imports
import CustomButton from "@/components/CustomButton";
import PropertyDetailsError from "@/components/error/PropertyDetailsError";
import TitleBar from "@/components/layout/TitleBar";
import ReviewComp from "@/components/propertyScreen/Review";
import ScreenWrapper from "@/components/ScreenWrapper";
import PropertyDetailsSkeleton from "@/components/skeletons/PropertyDetailsSkeleton";
// swiper imports
import Swiper from "react-native-swiper";
// map imports
import { Camera, MapView, MarkerView } from "@maplibre/maplibre-react-native";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// expo imports
import { useLocalSearchParams, useRouter } from "expo-router";
// icons imports
import Area from "@/assets/icons/area.svg";
import Bath from "@/assets/icons/bath.svg";
import Bed from "@/assets/icons/bed.svg";
import Call_Icon from "@/assets/icons/Call_Icon.svg";
import Chat_Icon from "@/assets/icons/Chat_Icon.svg";
import Liked from "@/assets/icons/Heart.svg";
import Location from "@/assets/icons/Location.svg";
import MapPin from "@/assets/icons/map-pin-icon.svg";
import ShareIcon from "@/assets/icons/share-2.svg";
import NotLiked from "@/assets/icons/tabBarIcons/inactive/Heart.svg";
// hooks imports
import { usePropertyDetails } from "@/api/hooks/useProperties";
import { usePhoneLinking, useSharePropertyLink } from "@/hooks/useDeepLinking";
import { useFavoriteProperties } from "@/hooks/useFavoriteProperties";
// types imports
import { Property, Review } from "@/types/type";

//===========================================================

const PropertyComp = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    propertyDetails,
    isPropertyDetailsPending,
    isPropertyDetailsError,
    refetchPropertyDetails,
  } = usePropertyDetails(id);

  const router = useRouter();

  // custom hooks
  const { handleShare } = useSharePropertyLink(id);
  const { handleLinking } = usePhoneLinking(propertyDetails?.agent.phone);
  const { toggleLike, favorites } = useFavoriteProperties();

  // check if property is liked
  const isLiked = favorites?.some((prop: Property) => prop._id === id);

  // mavigation functions
  const handleChat = () => {
    router.push(`/chat/${propertyDetails?.agent?._id}`);
  };

  const handleRentNow = () => {
    router.push(`/property/rent/${id}`);
  };

  // render error page
  if (isPropertyDetailsError)
    return <PropertyDetailsError onRetry={refetchPropertyDetails} />;
  // render skeleton
  if (isPropertyDetailsPending) return <PropertyDetailsSkeleton />;

  // main return
  return (
    <ScreenWrapper className="relative">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isPropertyDetailsPending}
            onRefresh={refetchPropertyDetails}
          />
        }
      >
        <View className="gap-7 mb-5">
          <TitleBar title="Details">
            <View className="flex-row items-center justify-center gap-5">
              <TouchableOpacity onPress={handleShare}>
                <ShareIcon size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  toggleLike(propertyDetails, isLiked ? "remove" : "add")
                }
              >
                {isLiked ? (
                  <Liked className="w-[60%] h-[60%]" />
                ) : (
                  <NotLiked className="w-[60%] h-[60%]" />
                )}
              </TouchableOpacity>
            </View>
          </TitleBar>
          {/* Swiper */}
          <View className="h-[250px] rounded-2xl overflow-hidden">
            <Swiper loop={true} autoplay={true} activeDotColor="#7F56D9">
              {propertyDetails?.images.map((image: string, index: number) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  className="h-full w-full"
                />
              ))}
            </Swiper>
          </View>
          {/* property name ,price ,location */}
          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl font-bold w-[70%]">
                {propertyDetails?.name}
              </Text>

              <View className="p-2 py-1 rounded-xl flex-row gap-1 z-10 ">
                <Text className="text-primary-600 font-extrabold text-xl -mt-1">
                  ${propertyDetails?.rentPerMonth}
                </Text>
                <Text className="text-zinc-400">/month</Text>
              </View>
            </View>

            <View className="flex-row gap-2 items-center -ml-1">
              <Location className="w-4 h-4" />
              <Text className="text-zinc-400 text-lg">
                {propertyDetails?.address}
              </Text>
            </View>
          </View>

          {/* Property Details  */}
          <Text className="text-xl font-bold" numberOfLines={1}>
            Property Details
          </Text>
          <View className="gap-4">
            {/* First Row */}
            <View className="w-full flex-row justify-between">
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Bedrooms</Text>
                <View className="flex-row items-center gap-1">
                  <Bed size={20} />
                  <Text className="font-bold">{propertyDetails?.bedrooms}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Bathtubs</Text>
                <View className="flex-row items-center gap-1">
                  <Bath size={20} />
                  <Text className="font-bold">
                    {propertyDetails?.bathrooms}
                  </Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Square</Text>
                <View className="flex-row items-center gap-1">
                  <Area size={20} />
                  <Text className="font-bold">{propertyDetails?.area}</Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View className="w-full flex-row justify-between">
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Build</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">
                    {propertyDetails?.yearBuilt}
                  </Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Parking</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">{propertyDetails?.parking}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Status</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">{propertyDetails?.status}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="gap-4">
            <Text className="text-xl font-bold" numberOfLines={1}>
              Description
            </Text>
            <Text className="text-zinc-400 text-md leading-6">
              {propertyDetails?.description}
            </Text>
          </View>

          {/* Agent Section */}
          <View className="gap-4">
            <Text className="text-xl font-bold">Agent</Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <Image
                  source={{
                    uri: propertyDetails?.agent.image
                      ? propertyDetails?.agent.image
                      : "https://www.loremfaces.net/96/id/1.jpg",
                  }}
                  className="w-14 h-14 rounded-full bg-primary-300"
                  resizeMode="cover"
                />
                <View>
                  <Text className="font-bold ">
                    {propertyDetails?.agent.name}
                  </Text>
                  <Text className="text-zinc-400" numberOfLines={1}>
                    {propertyDetails?.agent.profession}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity
                  className="bg-primary-100/40 p-2 rounded-full"
                  onPress={handleLinking}
                >
                  <Call_Icon size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-primary-100/40 p-2 rounded-full"
                  onPress={handleChat}
                >
                  <Chat_Icon size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Property Location on Map */}
          <View className="gap-4">
            <Text className="text-xl font-bold">
              Location & Public Fasilities
            </Text>

            <View className="h-[200px] rounded-lg overflow-hidden border-2 border-zinc-300">
              <MapView
                style={{ flex: 1 }}
                mapStyle={{
                  version: 8,
                  sources: {
                    osm: {
                      type: "raster",
                      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                      tileSize: 256,
                    },
                  },
                  layers: [
                    {
                      id: "osm",
                      type: "raster",
                      source: "osm",
                    },
                  ],
                }}
              >
                <Camera
                  centerCoordinate={[
                    propertyDetails?.location.coordinates[0],
                    propertyDetails?.location.coordinates[1],
                  ]}
                  zoomLevel={16}
                />

                <MarkerView
                  coordinate={[
                    propertyDetails?.location.coordinates[0],
                    propertyDetails?.location.coordinates[1],
                  ]}
                >
                  <MapPin width={30} height={30} />
                </MarkerView>
              </MapView>
            </View>
          </View>

          {/* Reviews Section */}
          <View className="gap-4">
            <Text className="text-xl font-bold">Reviews</Text>

            <FlashList
              data={propertyDetails?.reviews}
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
            />
          </View>
        </View>
      </ScrollView>
      {/* Custom Button */}
      <CustomButton
        textClassName="text-white"
        className="z-10 w-full rounded-xl"
        onButtonPress={handleRentNow}
      >
        Rent Now
      </CustomButton>
    </ScreenWrapper>
  );
};

export default PropertyComp;
