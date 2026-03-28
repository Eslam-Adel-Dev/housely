// react imports
import React, { forwardRef, useCallback } from "react";
// bottom sheet imports
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
// types imports
import { BottomSheetCompProps } from "@/types/type";

//=============================================

const BottomSheetComp = forwardRef<BottomSheet, BottomSheetCompProps>(
  (
    {
      snapPoints,
      children,
      index = -1,
      onChange,
      onClose,
      enablePanDownToClose = true,
      keyboardBehavior = "fillParent",
      keyboardBlurBehavior = "restore",
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
        keyboardBehavior={keyboardBehavior}
        keyboardBlurBehavior={keyboardBlurBehavior}
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

//=============================================

export default BottomSheetComp;
