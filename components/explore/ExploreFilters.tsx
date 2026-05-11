import React from "react";
import { View, Text } from "react-native";
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import PriceRangeSelector from "@/components/PriceRangeSelector";
import { SearchFilter } from "@/components/Filters";
import { SearchFiltersData } from "@/data/data";
import CustomButton from "@/components/CustomButton";

interface ExploreFiltersProps {
  priceRange: { min: number; max: number };
  onPriceChange: (min: number, max: number) => void;
  selectedFilter: number;
  setSelectedFilter: (id: number) => void;
  onApply?: () => void;
  onClear?: () => void;
}

const ExploreFilters = ({
  priceRange,
  onPriceChange,
  selectedFilter,
  setSelectedFilter,
  onApply,
  onClear,
}: ExploreFiltersProps) => {
  return (
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

      {/* Price Range Section */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-xl font-bold">Price Range</Text>
        </View>
        <PriceRangeSelector
          minPrice={0}
          maxPrice={10000}
          onRangeChange={onPriceChange}
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
          onButtonPress={onApply}
          className="flex-1 rounded-md"
          textClassName="text-white font-bold"
        >
          Apply
        </CustomButton>
        <CustomButton
          onButtonPress={onClear}
          className="flex-1 rounded-md border border-zinc-300 bg-transparent"
          textClassName="text-zinc-400 font-bold"
        >
          Clear
        </CustomButton>
      </View>
    </View>
  );
};

export default ExploreFilters;
