// components imports
import CustomButton from "@/components/CustomButton";
import TitleBar from "@/components/layout/TitleBar";
import ReviewComp from "@/components/propertyScreen/Review";
import ScreenWrapper from "@/components/ScreenWrapper";
// react native imports
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// swiper imports
import Swiper from "react-native-swiper";
// data imports
import { properties } from "@/data/data";
// map imports
import { Camera, MapView, MarkerView } from "@maplibre/maplibre-react-native";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// expo imports
import { useLocalSearchParams } from "expo-router";
// icons imports
import Area from "@/assets/icons/area.svg";
import Bath from "@/assets/icons/bath.svg";
import Bed from "@/assets/icons/bed.svg";
import Call_Icon from "@/assets/icons/Call_Icon.svg";
import Chat_Icon from "@/assets/icons/Chat_Icon.svg";
import Location from "@/assets/icons/Location.svg";
import MapPin from "@/assets/icons/map-pin-icon.svg";
import ShareIcon from "@/assets/icons/share-2.svg";
import HeartIcon from "@/assets/icons/tabBarIcons/inactive/Heart.svg";

//===========================================================

const PropertyComp = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = properties.filter((property) => property.id === id)[0];

  return (
    <ScreenWrapper className="relative">
      <ScrollView>
        <View className="gap-7 mb-5">
          <TitleBar title="Details">
            <View className="flex-row items-center justify-center gap-5">
              <TouchableOpacity>
                <ShareIcon size={30} />
              </TouchableOpacity>
              <TouchableOpacity>
                <HeartIcon size={30} />
              </TouchableOpacity>
            </View>
          </TitleBar>
          {/* Swiper */}
          <View className="h-[250px] rounded-2xl overflow-hidden">
            <Swiper loop={true} autoplay={true} activeDotColor="#7F56D9">
              {state.images.map((image, index) => (
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
              <Text className="text-2xl font-bold w-[70%]">{state.name}</Text>

              <View className="p-2 py-1 rounded-xl flex-row gap-1 z-10 ">
                <Text className="text-primary-600 font-extrabold text-xl -mt-1">
                  ${state.rentPerMonth}
                </Text>
                <Text className="text-zinc-400">/month</Text>
              </View>
            </View>

            <View className="flex-row gap-2 items-center -ml-1">
              <Location className="w-4 h-4" />
              <Text className="text-zinc-400 text-lg">{state.location}</Text>
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
                  <Text className="font-bold">{state.bedrooms}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Bathtubs</Text>
                <View className="flex-row items-center gap-1">
                  <Bath size={20} />
                  <Text className="font-bold">{state.bathrooms}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Square</Text>
                <View className="flex-row items-center gap-1">
                  <Area size={20} />
                  <Text className="font-bold">{state.area}</Text>
                </View>
              </View>
            </View>

            {/* Second Row */}
            <View className="w-full flex-row justify-between">
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Build</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">{state.yearBuilt}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Parking</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">{state.parking}</Text>
                </View>
              </View>
              <View className="w-1/3 gap-1">
                <Text className="text-zinc-400">Status</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="font-bold">{state.status}</Text>
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
              {state.description}
            </Text>
          </View>

          {/* Agent Section */}
          <View className="gap-4">
            <Text className="text-xl font-bold">Agent</Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <Image
                  source={{ uri: "https://www.loremfaces.net/96/id/1.jpg" }}
                  className="w-14 h-14 rounded-full bg-primary-300"
                  resizeMode="contain"
                />
                <View>
                  <Text className="font-bold ">{state.agent.name}</Text>
                  <Text className="text-zinc-400" numberOfLines={1}>
                    {state.agent.profession}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity className="bg-primary-100/40 p-2 rounded-full">
                  <Call_Icon size={30} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-primary-100/40 p-2 rounded-full">
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
                    state.coords.longitude,
                    state.coords.latitude,
                  ]}
                  zoomLevel={16}
                />

                <MarkerView
                  coordinate={[state.coords.longitude, state.coords.latitude]}
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
              data={state.reviews}
              renderItem={({ item }) => <ReviewComp {...item} />}
              horizontal={true}
              keyExtractor={(item) => {
                if (typeof item.id === "number") {
                  return item.id.toString();
                }
                return item.id;
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
        onButtonPress={() => {}}
      >
        Rent Now
      </CustomButton>
    </ScreenWrapper>
  );
};

export default PropertyComp;
