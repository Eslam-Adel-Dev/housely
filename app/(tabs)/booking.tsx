// components imports
import BookingCard from "@/components/bookingScreen/BookingCard";
import EmptyBooking from "@/components/bookingScreen/EmptyBooking";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// data imports
import { propertyData2 } from "@/data/data";
// types imports
import { TabsProps } from "@/types/type";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// react imports
import { useState } from "react";
// react native imports
import { Text, View } from "react-native";

const Booking = () => {
  const [tabsValue, setTabsValue] = useState("upcoming");
  return (
    <ScreenWrapper className="gap-7">
      <TitleBar title="My Booking" />
      <View className="flex-1">
        <Tabs value={tabsValue} onValueChange={setTabsValue} className="flex-1">
          {/* ----------------------------------- */}

          <TabsList className="rounded-xl bg-zinc-200 w-full justify-between h-16">
            <Tab value="upcoming" text="Upcoming" tabsValue={tabsValue} />
            <Tab value="completed" text="Completed" tabsValue={tabsValue} />
            <Tab value="cancelled" text="Cancelled" tabsValue={tabsValue} />
          </TabsList>

          {/* ----------------------------------- */}
          <TabsContent value="upcoming" className="flex-1">
            <FlashList
              className="py-5"
              data={[]}
              renderItem={({ item }) => (
                <BookingCard {...item} date={"08 Aug - 12 Aug"} />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View className="h-4" />}
              ListEmptyComponent={<EmptyBooking />}
              contentContainerStyle={{
                marginVertical: "auto",
              }}
            />
          </TabsContent>
          <TabsContent value="completed" className="flex-1">
            <FlashList
              className="py-5"
              data={propertyData2}
              renderItem={({ item }) => (
                <BookingCard {...item} date={"08 Aug - 12 Aug"} />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View className="h-4" />}
              ListEmptyComponent={<EmptyBooking />}
            />
          </TabsContent>
          <TabsContent value="cancelled" className="flex-1">
            <FlashList
              className="py-5"
              data={propertyData2}
              renderItem={({ item }) => (
                <BookingCard {...item} date={"08 Aug - 12 Aug"} />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View className="h-4" />}
              ListEmptyComponent={<EmptyBooking />}
            />
          </TabsContent>
        </Tabs>
      </View>
    </ScreenWrapper>
  );
};

export default Booking;

//=====================================================

export const Tab = ({
  value,
  textClassName,
  triggerClassName,
  text,
  tabsValue,
}: TabsProps) => {
  return (
    <TabsTrigger value={value} className={`${triggerClassName} w-1/3`}>
      <Text
        className={`${textClassName} text-zinc-500/50 font-bold text-center py-3 px-3 rounded-lg flex-1`}
        style={{
          color: tabsValue === value ? "white" : "gray",
          backgroundColor: tabsValue === value ? "#7F56D9" : "transparent",
        }}
      >
        {text}
      </Text>
    </TabsTrigger>
  );
};
