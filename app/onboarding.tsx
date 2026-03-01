// react imports
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";

// expo imports
import { useRouter } from "expo-router";

// data imports
import { onboardingData } from "@/data/data";
import { storage } from "@/lib/mmkvStorage";

// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";

//=========================================================

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);
  const router = useRouter();

  const onSwiperChange = (index: number) => {
    setActiveIndex(index);
  };

  const onButtonPress = async () => {
    if (activeIndex < onboardingData.length - 1) {
      setActiveIndex((prev) => prev + 1);
      swiperRef.current?.scrollBy(1, true);
      return;
    }
    storage.set("isOnboardingCompleted", true);
    router.push("/login");
  };

  const handleSkipPress = async () => {
    storage.set("isOnboardingCompleted", true);
    router.push("/login");
  };

  return (
    <ScreenWrapper>
      <View className="flex-row w-full items-center justify-end">
        <TouchableOpacity
          className="border-2 border-gray-600/30 rounded-3xl h-12 w-20 flex items-center justify-center"
          onPress={handleSkipPress}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      {/* ======================================= */}
      <View className="h-[80%] p-8">
        <Swiper
          ref={swiperRef}
          activeDot={<ActiveDot />}
          dot={<Dot />}
          onIndexChanged={(index) => onSwiperChange(index)}
        >
          {onboardingData.map((item) => (
            <View
              key={item.id}
              className="flex items-center justify-center gap-y-4"
            >
              <Image source={item.image} className="mb-10" />
              <Text className="text-3xl text-center">{item.title}</Text>
              <Text className="text-sm text-center text-gray-400">
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
      </View>
      {/* ======================================= */}

      <CustomButton
        onButtonPress={onButtonPress}
        textClassName="text-white"
        className="rounded-lg"
      >
        {activeIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
      </CustomButton>
    </ScreenWrapper>
  );
};

//=========================================================

export default Onboarding;

const ActiveDot = () => {
  return (
    <View className="h-[10px] w-[30px] bg-primary-600 rounded-full mx-1" />
  );
};

const Dot = () => {
  return (
    <View className="h-[10px] w-[10px] bg-gray-400/70 rounded-full mx-1" />
  );
};

//=========================================================
