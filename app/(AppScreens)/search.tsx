import NoSearch from "@/assets/images/NoSearch.svg";
import BottomSheetComp from "@/components/bottomSheets/BottomSheetComp";
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
import { SearchFilter } from "@/components/Filters";
import PriceRangeSelector from "@/components/PriceRangeSelector";
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchComp from "@/components/SearchComp";
import { SearchFiltersData } from "@/data/data";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";

const Search = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedFilter, setSelectedFilter] = useState(1);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  return (
    <ScreenWrapper className="!bg-zinc-100 py-10">
      <SearchComp handleOpenFilterModal={() => handleSnapPress(1)} />

      <View className="flex-1 items-center justify-center">
        <View className="items-center justify-center">
          <NoSearch size={500} />
          <View className="items-center justify-center gap-3 my-10">
            <Text className="font-bold text-2xl text-center">
              Search not found
            </Text>
            <View className="px-12">
              <Text className="text-md text-zinc-400 text-center">
                Please enable your location services for more optimal result
              </Text>
            </View>
          </View>
        </View>
      </View>
      <BottomSheetComp
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        onClose={handleClosePress}
      >
        <View className="px-6 py-4">
          <Text className="text-xl font-bold mb-4 text-center">Filters</Text>

          {/* Looking For Section */}
          <View className="mb-6">
            <Text className="text-xl font-bold mb-3">Looking For</Text>
            <View className="flex-row flex-wrap gap-4">
              <CheckboxWithLabel
                label="For Rent"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
              <CheckboxWithLabel
                label="For Sale"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
            </View>
          </View>

          {/* Property Type Section */}
          <View className="mb-6">
            <Text className="text-xl font-bold mb-3">Property Type</Text>
            <View className="flex-row flex-wrap gap-4">
              <CheckboxWithLabel
                label="Apartment"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
              <CheckboxWithLabel
                label="Penhouse"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
              <CheckboxWithLabel
                label="Hotel"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
              <CheckboxWithLabel
                label="Villa"
                classNameContainer="w-full flex-row-reverse items-center justify-between"
                classNameLabel="text-zinc-600"
                classNameCheckBox="border-zinc-300 w-6 h-6"
                styleLabel={{ fontSize: 15 }}
              />
            </View>
          </View>

          {/* Price Range Section moved to bottom */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-xl font-bold">Price Range</Text>
            </View>
            <PriceRangeSelector
              minPrice={0}
              maxPrice={10000}
              onRangeChange={handlePriceChange}
            />
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-zinc-400">${priceRange.min}</Text>
              <Text className="text-zinc-400">${priceRange.max}</Text>
            </View>
          </View>

          {/* Facilities section  */}
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold">Facilities</Text>
          </View>
          <View className="flex-row gap-2 mt-4">
            {SearchFiltersData.map((item) => (
              <View key={item.id} className="flex-1">
                <SearchFilter
                  {...item}
                  setSelectedFilter={setSelectedFilter}
                  selectedFilter={selectedFilter}
                />
              </View>
            ))}
          </View>

          {/* Buttons to confirm */}
          <View className="flex-row items-center justify-between gap-2 mt-10">
            <CustomButton
              className="flex-1 rounded-md"
              textClassName="text-white font-bold"
            >
              Apply
            </CustomButton>
            <CustomButton
              className="flex-1 rounded-md border border-zinc-300 bg-transparent"
              textClassName="text-zinc-400 font-bold"
            >
              Clear
            </CustomButton>
          </View>
        </View>
      </BottomSheetComp>
    </ScreenWrapper>
  );
};

export default Search;
