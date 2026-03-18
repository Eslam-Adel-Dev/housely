import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface PriceRangeSelectorProps {
  minPrice: number;
  maxPrice: number;
  onRangeChange?: (min: number, max: number) => void;
}

const PriceRangeSelector = ({
  minPrice,
  maxPrice,
  onRangeChange,
}: PriceRangeSelectorProps) => {
  const containerWidth = useSharedValue(0);
  const thumbSize = 28; // Increased for better touch

  const leftThumbX = useSharedValue(0);
  const rightThumbX = useSharedValue(0);

  // Capture start positions for smoother gestures
  const startXLeft = useSharedValue(0);
  const startXRight = useSharedValue(0);

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    containerWidth.value = width;
    // Initialize right thumb position once width is known
    if (rightThumbX.value === 0) {
      rightThumbX.value = width;
    }
  };

  const leftThumbGesture = Gesture.Pan()
    .onStart(() => {
      startXLeft.value = leftThumbX.value;
    })
    .onUpdate((e) => {
      let newX = e.translationX + startXLeft.value;
      if (newX < 0) newX = 0;
      if (newX > rightThumbX.value - thumbSize)
        newX = rightThumbX.value - thumbSize;
      leftThumbX.value = newX;
    })
    .onEnd(() => {
      if (onRangeChange && containerWidth.value > 0) {
        const min = Math.round(
          (leftThumbX.value / containerWidth.value) * (maxPrice - minPrice) +
            minPrice,
        );
        const max = Math.round(
          (rightThumbX.value / containerWidth.value) * (maxPrice - minPrice) +
            minPrice,
        );
        runOnJS(onRangeChange)(min, max);
      }
    });

  const rightThumbGesture = Gesture.Pan()
    .onStart(() => {
      startXRight.value = rightThumbX.value;
    })
    .onUpdate((e) => {
      let newX = e.translationX + startXRight.value;
      if (newX > containerWidth.value) newX = containerWidth.value;
      if (newX < leftThumbX.value + thumbSize)
        newX = leftThumbX.value + thumbSize;
      rightThumbX.value = newX;
    })
    .onEnd(() => {
      if (onRangeChange && containerWidth.value > 0) {
        const min = Math.round(
          (leftThumbX.value / containerWidth.value) * (maxPrice - minPrice) +
            minPrice,
        );
        const max = Math.round(
          (rightThumbX.value / containerWidth.value) * (maxPrice - minPrice) +
            minPrice,
        );
        runOnJS(onRangeChange)(min, max);
      }
    });

  const animatedLeftThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftThumbX.value - thumbSize / 2 }],
  }));

  const animatedRightThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightThumbX.value - thumbSize / 2 }],
  }));

  const animatedTrackStyle = useAnimatedStyle(() => ({
    left: leftThumbX.value,
    width: Math.max(0, rightThumbX.value - leftThumbX.value),
  }));

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.sliderContainer}>
        <View style={styles.track} />
        <Animated.View style={[styles.activeTrack, animatedTrackStyle]} />
        <GestureDetector gesture={leftThumbGesture}>
          <Animated.View style={[styles.thumb, animatedLeftThumbStyle]} />
        </GestureDetector>
        <GestureDetector gesture={rightThumbGesture}>
          <Animated.View style={[styles.thumb, animatedRightThumbStyle]} />
        </GestureDetector>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: "auto",
    width: "90%",
  },
  sliderContainer: {
    height: 40,
    justifyContent: "center",
  },
  track: {
    height: 4,
    backgroundColor: "#E4E4E7",
    borderRadius: 2,
  },
  activeTrack: {
    height: 6,
    backgroundColor: "#7F56D9",
    position: "absolute",
    borderRadius: 3,
  },
  thumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#7F56D9",
    position: "absolute",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default PriceRangeSelector;
