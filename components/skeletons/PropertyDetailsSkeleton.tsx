import { ScrollView, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import TitleBar from "@/components/layout/TitleBar";

const PropertyDetailsSkeleton = () => {
  return (
    <ScreenWrapper className="relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-7 mb-5">
          {/* Top Bar Skeleton */}
          <TitleBar title="Details">
            <View className="flex-row items-center justify-center gap-5">
              <View className="size-8 rounded-full bg-zinc-200 animate-pulse" />
              <View className="size-8 rounded-full bg-zinc-200 animate-pulse" />
            </View>
          </TitleBar>

          {/* Image Swiper Skeleton */}
          <View className="h-[250px] w-full rounded-2xl bg-zinc-200 animate-pulse" />

          {/* Title and Price Skeleton */}
          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <View className="h-8 w-[60%] rounded-md bg-zinc-200 animate-pulse" />
              <View className="h-8 w-[25%] rounded-md bg-zinc-200 animate-pulse" />
            </View>
            {/* Location Skeleton */}
            <View className="flex-row items-center gap-2 -ml-1">
              <View className="size-5 rounded-full bg-zinc-200 animate-pulse" />
              <View className="h-5 w-[45%] rounded-md bg-zinc-200 animate-pulse" />
            </View>
          </View>

          {/* Property Details Skeleton */}
          <View className="gap-4 mt-2">
            <View className="h-6 w-[45%] rounded-md bg-zinc-200 animate-pulse" />
            
            {/* First Row */}
            <View className="w-full flex-row justify-between">
              {[1, 2, 3].map((item) => (
                <View key={item} className="w-1/3 gap-3">
                  <View className="h-4 w-[60%] rounded-md bg-zinc-200 animate-pulse" />
                  <View className="flex-row items-center gap-2">
                    <View className="size-5 rounded-full bg-zinc-200 animate-pulse" />
                    <View className="h-5 w-[40%] rounded-md bg-zinc-200 animate-pulse" />
                  </View>
                </View>
              ))}
            </View>

            {/* Second Row */}
            <View className="w-full flex-row justify-between mt-2">
              {[4, 5, 6].map((item) => (
                <View key={item} className="w-1/3 gap-3">
                  <View className="h-4 w-[60%] rounded-md bg-zinc-200 animate-pulse" />
                  <View className="h-5 w-[60%] rounded-md bg-zinc-200 animate-pulse" />
                </View>
              ))}
            </View>
          </View>

          {/* Description Skeleton */}
          <View className="gap-4">
             <View className="h-6 w-[35%] rounded-md bg-zinc-200 animate-pulse" />
             <View className="gap-3">
                <View className="h-4 w-full rounded-md bg-zinc-200 animate-pulse" />
                <View className="h-4 w-[95%] rounded-md bg-zinc-200 animate-pulse" />
                <View className="h-4 w-full rounded-md bg-zinc-200 animate-pulse" />
                <View className="h-4 w-[75%] rounded-md bg-zinc-200 animate-pulse" />
             </View>
          </View>

          {/* Agent Section Skeleton */}
          <View className="gap-4">
             <View className="h-6 w-[20%] rounded-md bg-zinc-200 animate-pulse" />
             <View className="flex-row items-center justify-between">
               <View className="flex-row items-center gap-4">
                 <View className="w-14 h-14 rounded-full bg-zinc-200 animate-pulse" />
                 <View className="gap-2">
                   <View className="h-5 w-[140px] rounded-md bg-zinc-200 animate-pulse" />
                   <View className="h-4 w-[90px] rounded-md bg-zinc-200 animate-pulse" />
                 </View>
               </View>
               <View className="flex-row items-center gap-3">
                 <View className="size-12 rounded-full bg-zinc-200 animate-pulse" />
                 <View className="size-12 rounded-full bg-zinc-200 animate-pulse" />
               </View>
             </View>
          </View>

          {/* Map Location Skeleton */}
          <View className="gap-4">
            <View className="h-6 w-[65%] rounded-md bg-zinc-200 animate-pulse" />
            <View className="h-[200px] w-full rounded-lg bg-zinc-200 animate-pulse border-2 border-zinc-100" />
          </View>

          {/* Reviews Skeleton */}
          <View className="gap-4">
            <View className="h-6 w-[35%] rounded-md bg-zinc-200 animate-pulse" />
            <View className="flex-row gap-4 overflow-hidden">
              {[1, 2].map((item) => (
                <View key={item} className="h-[140px] w-[280px] rounded-2xl bg-zinc-200 animate-pulse border border-zinc-100" />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Rent Now Button Skeleton */}
      <View className="h-[60px] w-full rounded-2xl bg-zinc-200 animate-pulse mt-2 z-10" />
    </ScreenWrapper>
  );
};

export default PropertyDetailsSkeleton;
