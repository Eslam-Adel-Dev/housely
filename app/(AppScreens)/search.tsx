import BottomSheetComp from "@/components/bottomSheets/BottomSheetComp";
import ExploreEmptyState from "@/components/explore/ExploreEmptyState";
import ExploreFilters from "@/components/explore/ExploreFilters";
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchComp from "@/components/SearchComp";
import { useSearchSession } from "@/hooks/explore/useSearchSession";
import React from "react";

const Search = () => {
  const {
    priceRange,
    selectedFilter,
    setSelectedFilter,
    bottomSheetRef,
    handlePriceChange,
    handleSheetChange,
    handleSnapPress,
    handleClosePress,
    snapPoints,
  } = useSearchSession();

  return (
    <ScreenWrapper className="!bg-zinc-100 py-10">
      {/* Search Input and Filter Trigger */}
      <SearchComp handleOpenFilterModal={() => handleSnapPress(1)} />

      {/* Results / Empty State */}
      <ExploreEmptyState />

      {/* Filter Bottom Sheet */}
      <BottomSheetComp
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        onClose={handleClosePress}
      >
        <ExploreFilters
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          onApply={handleClosePress}
          onClear={handleClosePress}
        />
      </BottomSheetComp>
    </ScreenWrapper>
  );
};

export default Search;
