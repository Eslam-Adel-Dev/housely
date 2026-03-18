import { BottomSheetCompProps } from "@/types/type";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback } from "react";

const BottomSheetComp = forwardRef<BottomSheet, BottomSheetCompProps>(
  (
    {
      snapPoints,
      children,
      index = -1,
      onChange,
      onClose,
      enablePanDownToClose = true,
    },
    ref,
  ) => {
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        index={index}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={onChange}
        onClose={onClose}
        enablePanDownToClose={enablePanDownToClose}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: "white",
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
        handleIndicatorStyle={{
          backgroundColor: "#D1D5DB",
          width: 50,
          height: 8,
        }}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheet>
    );
  },
);

BottomSheetComp.displayName = "BottomSheetComp";

export default BottomSheetComp;
