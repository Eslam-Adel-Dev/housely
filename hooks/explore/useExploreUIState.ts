import { useState, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Property } from "@/types/type";

export const useExploreUIState = () => {
  const [showFullLocation, setShowFullLocation] = useState(false);
  const [isRelocating, setIsRelocating] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<number[] | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Property | null>(null);
  
  const bottomSheetRef = useRef<BottomSheet>(null);

  return {
    showFullLocation,
    setShowFullLocation,
    isRelocating,
    setIsRelocating,
    selectedPoint,
    setSelectedPoint,
    selectedPlace,
    setSelectedPlace,
    bottomSheetRef,
  };
};
