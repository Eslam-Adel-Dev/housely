// hooks imports
import useScreenDimensions from "@/hooks/useScreenDimensions";
// react imports
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
// types imports
import { CreditCardProps } from "@/types/type";
// utils imports
import { formatCardNumber, formatExpiry, getCardLogo } from "@/lib/utils";
// expo imports
import { LinearGradient } from "expo-linear-gradient";
import { Cpu, Landmark } from "lucide-react-native";
// reanimated imports
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

//==================================================

const CreditCardComp = ({
  cardData,
  setCardData,
  isFlipped,
  setIsFlipped,
}: CreditCardProps) => {
  const { number, name, expiry, cvv } = cardData;
  const { screenWidth } = useScreenDimensions();
  const CARD_WIDTH = screenWidth * 0.9;
  const flipRotation = useSharedValue(0);
  const CARD_HEIGHT = 200;

  // useEffect to flip the card

  useEffect(() => {
    flipRotation.value = withTiming(isFlipped ? 180 : 0, { duration: 500 });
  }, [isFlipped]);

  // animations for front side

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipRotation.value, [0, 180], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
    };
  });

  // animations for back side

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flipRotation.value, [0, 180], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
    };
  });

  const logoUri = getCardLogo(number);

  // ui part

  return (
    <View className="w-full px-4">
      <View className="items-center">
        <View style={{ height: CARD_HEIGHT, width: CARD_WIDTH }}>
          {/* Front Side */}
          <Animated.View style={[styles.cardSide, frontAnimatedStyle]}>
            <LinearGradient
              colors={["#6941C6", "#0a5857ff"]}
              className="w-full h-full rounded-2xl p-5 justify-between overflow-hidden"
            >
              <View className="flex-row justify-between items-center">
                <Cpu color="white" size={40} />
                {logoUri ? (
                  <Image
                    source={logoUri}
                    style={{ width: 60, height: 40, resizeMode: "contain" }}
                  />
                ) : (
                  <Text className="text-white font-bold text-lg opacity-60">
                    CREDIT CARD
                  </Text>
                )}
              </View>

              <Text className="text-white text-2xl font-bold tracking-widest mt-4">
                {number || "•••• •••• •••• ••••"}
              </Text>

              <View className="flex-row justify-between mt-4">
                <View className="flex-1 mr-2">
                  <Text className="text-zinc-300 text-xs">CARD HOLDER</Text>
                  <Text className="text-white font-semibold" numberOfLines={1}>
                    {name.toUpperCase() || "YOUR NAME"}
                  </Text>
                </View>
                <View>
                  <Text className="text-zinc-300 text-xs">EXPIRES</Text>
                  <Text className="text-white font-semibold">
                    {expiry || "MM/YY"}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>

          {/* Back Side */}
          <Animated.View style={[styles.cardSide, backAnimatedStyle]}>
            <LinearGradient
              colors={["#4A2C9E", "#2D1B5E"]}
              className="w-full h-full rounded-2xl justify-between py-6 overflow-hidden"
            >
              <View className="bg-black/80 w-full h-12 mt-2" />
              <View className="px-6">
                <View className="bg-zinc-200 w-full h-10 rounded-sm justify-center items-end px-4">
                  <Text className="text-black font-bold italic tracking-tighter">
                    {cvv || "•••"}
                  </Text>
                </View>
                <Text className="text-zinc-300 text-[10px] mt-2 italic text-center">
                  Valid only with signature. This card is property of Hovsely
                  Bank.
                </Text>
              </View>
              <View className="items-end px-6">
                <Landmark color="white" size={24} opacity={0.5} />
              </View>
            </LinearGradient>
          </Animated.View>
        </View>
      </View>

      <View className="w-full mt-10 px-4 gap-4">
        {/* card number */}
        <View className="gap-1 ">
          <Text className="text-zinc-600 font-semibold ml-1">Card Number</Text>
          <TextInput
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
            value={number}
            onChangeText={(text) =>
              setCardData({ ...cardData, number: formatCardNumber(text) })
            }
            onFocus={() => setIsFlipped(false)}
            className="bg-white border border-zinc-200 p-4 rounded-xl text-lg text-black placeholder:text-zinc-400"
            maxLength={19}
          />
        </View>

        {/* card holder name */}
        <View className="gap-1">
          <Text className="text-zinc-600 font-semibold ml-1">
            Card Holder Name
          </Text>
          <TextInput
            placeholder="John Doe"
            autoCapitalize="characters"
            value={name}
            onChangeText={(text) => setCardData({ ...cardData, name: text })}
            onFocus={() => setIsFlipped(false)}
            className="bg-white border border-zinc-200 p-4 rounded-xl text-lg text-black placeholder:text-zinc-400"
          />
        </View>

        <View className="flex-row justify-between gap-4">
          {/* expiry date */}
          <View className="flex-1 gap-1">
            <Text className="text-zinc-600 font-semibold ml-1">
              Expiry Date
            </Text>
            <TextInput
              placeholder="MM/YY"
              keyboardType="numeric"
              value={expiry}
              onChangeText={(text) =>
                setCardData({ ...cardData, expiry: formatExpiry(text) })
              }
              onFocus={() => setIsFlipped(false)}
              className="bg-white border border-zinc-200 p-4 rounded-xl text-lg text-black placeholder:text-zinc-400"
              maxLength={5}
            />
          </View>

          {/* cvv */}
          <View className="flex-1 gap-1">
            <Text className="text-zinc-600 font-semibold ml-1">CVV</Text>
            <TextInput
              placeholder="***"
              keyboardType="numeric"
              value={cvv}
              onChangeText={(text) =>
                setCardData({ ...cardData, cvv: text.slice(0, 3) })
              }
              onFocus={() => setIsFlipped(true)}
              className="bg-white border border-zinc-200 p-4 rounded-xl text-lg text-black placeholder:text-zinc-400"
              maxLength={3}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardSide: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default CreditCardComp;
