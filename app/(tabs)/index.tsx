// react native imports
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// icons imports
import chat from "@/assets/icons/Chat.png";
import location from "@/assets/icons/Location.png";
import notification from "@/assets/icons/Notification.png";

// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchComp from "@/components/SearchComp";
import AdSection from "@/components/homeScreen/AdSection";
import Filter from "@/components/homeScreen/Filter";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";

// images imports
import building from "@/assets/images/building.png";
import PropertyCard from "@/components/homeScreen/PropertyCard";

// dummy data imports
import { filtersData, properties } from "@/data/data";

// expo imports
import { useRouter } from "expo-router";

// flashlist imports
import { FlashList } from "@shopify/flash-list";
//===================================================================

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const router = useRouter();

  return (
    <ScrollView>
      <ScreenWrapper className="bg-[#fcfcfd] gap-8">
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Image source={location} className="size-7" resizeMode="contain" />
            <Text className="text-lg font-bold">Yogyakarta, Ind</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              className="border border-zinc-300 rounded-full p-3"
              onPress={() => router.push("/notifications")}
            >
              <RedDot />
              <Image source={notification} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-zinc-300 rounded-full p-3"
              onPress={() => router.push("/chat")}
            >
              <RedDot />
              <Image source={chat} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        {/* ---------------------------------- */}
        <SearchComp />
        {/* ---------------------------------- */}

        <AdSection
          mainText="GET YOUR 20% CASHBACK"
          subText="*Expired 25 Aug 2022"
          image={building}
        />
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Recommended</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        <FlashList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard {...item} image={item.images[0]} />
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Top Locations</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        <FlashList
          data={filtersData}
          renderItem={({ item }) => (
            <Filter
              {...item}
              setSelectedFilter={setSelectedFilter}
              selectedFilter={selectedFilter}
            />
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Popular Properties</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        <FlashList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard {...item} image={item.images[0]} />
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Nearby</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        <FlashList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard2 {...item} image={item.images[0]} />
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        />
        {/* ---------------------------------- */}

        <FlashList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard2 {...item} image={item.images[0]} />
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        />
      </ScreenWrapper>
    </ScrollView>
  );
};

export default Index;

const RedDot = () => {
  return (
    <View className="absolute top-0 right-0 bg-red-500 rounded-full size-3"></View>
  );
};
