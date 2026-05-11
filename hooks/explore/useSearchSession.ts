import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export const useSearchSession = () => {
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

  return {
    priceRange,
    selectedFilter,
    setSelectedFilter,
    bottomSheetRef,
    handlePriceChange,
    handleSheetChange,
    handleSnapPress,
    handleClosePress,
    snapPoints,
  };
};
