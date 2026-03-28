// react imports
import React, { useEffect, useRef, useState } from "react";
// react native imports
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// icons imports
import Calender from "@/assets/icons/Calendar.svg";
import CreditCard from "@/assets/icons/credit_card.svg";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
// expo imports
import { router, useLocalSearchParams } from "expo-router";
// bottom sheet imports
import BottomSheet from "@gorhom/bottom-sheet";
// data imports
import { properties } from "@/data/data";
// utility imports
import {
  calculatePrice,
  calculateRentTime,
  calculateTotalPrice,
  formatDateRange,
  maskCardNumber,
} from "@/lib/utils";
// component imports
import BottomSheetComp from "@/components/bottomSheets/BottomSheetComp";
import CalendarComp from "@/components/CalendarComp";
import CreditCardComp from "@/components/CreditCardComp";
import CustomButton from "@/components/CustomButton";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import TitleBar from "@/components/layout/TitleBar";
import ScreenWrapper from "@/components/ScreenWrapper";
// toast imports
import Toast from "react-native-toast-message";

//===================================================

const RentPropertyDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const property = properties.filter((property) => property.id === id)[0];
  const paymentBottomSheetRef = useRef<BottomSheet>(null);
  const calenderBottomSheetRef = useRef<BottomSheet>(null);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [selectedRange, setSelectedRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [rentTime, setRentTime] = useState({
    months: 0,
    days: 0,
  });
  const price = calculatePrice(
    Number(property.rentPerMonth),
    rentTime.months,
    rentTime.days,
  );
  const tax = 15;
  const totalPrice = calculateTotalPrice(price, tax).toFixed(2);

  //-----------------------------------------------------

  // useEffect
  useEffect(() => {
    const checkRange = () => {
      if (selectedRange.startDate && selectedRange.endDate) {
        const { months, days } = calculateRentTime(
          selectedRange.startDate,
          selectedRange.endDate,
        );
        if (months < 1) {
          Toast.show({
            text1: "You must rent the property for at least one month",
            type: "error",
          });
          setSelectedRange({
            startDate: "",
            endDate: "",
          });
        }

        setRentTime({
          months,
          days,
        });
      }
    };
    checkRange();

    return () => checkRange();
  }, [selectedRange]);

  //-----------------------------------------------------

  // close payment bottom sheet
  const onPaymentBottomSheetClose = () => {
    paymentBottomSheetRef.current?.close();
  };

  // close calender bottom sheet
  const onCalenderBottomSheetClose = () => {
    calenderBottomSheetRef.current?.close();
  };

  // open payment bottom sheet
  const onPaymentBottomSheetOpen = () => {
    paymentBottomSheetRef.current?.expand();
  };

  // open calender bottom sheet
  const onCalenderBottomSheetOpen = () => {
    calenderBottomSheetRef.current?.expand();
  };

  //-----------------------------------------------------

  // ui part
  return (
    <ScreenWrapper>
      <TitleBar title="Rent Property" />
      <ScrollView
        className="flex-1 py-4"
        contentContainerClassName="pb-10 pt-4 gap-10"
        showsVerticalScrollIndicator={false}
      >
        <PropertyCard2 {...property} image={property.images[0]} fullWidth />

        {/* date picker */}
        <View className="px-4 gap-2">
          <Text className="text-zinc-800 text-xl font-bold">Period</Text>
          <TouchableOpacity
            onPress={onCalenderBottomSheetOpen}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-5 ">
              <Calender />
              <View>
                <Text className="text-zinc-400 text-md">Date</Text>
                <Text className="text-zinc-800 text-lg font-bold">
                  {formatDateRange(
                    selectedRange.startDate,
                    selectedRange.endDate,
                  )}
                </Text>
              </View>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
          </TouchableOpacity>
          <Text className="text-zinc-400 text-sm mt-2">
            Make sure to check your date before making any sort of payments
          </Text>
        </View>

        {/* payment method */}
        <View className="px-4 gap-2">
          <Text className="text-zinc-800 text-xl font-bold">Payments</Text>
          <TouchableOpacity
            onPress={onPaymentBottomSheetOpen}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-5 ">
              <CreditCard />
              <View>
                <Text className="text-zinc-400 text-md">
                  Credit or debit card
                </Text>
                <Text className="text-zinc-800 text-lg font-bold">
                  {maskCardNumber(cardData.number)}
                </Text>
              </View>
            </View>
            <AntDesign name="plus" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Price Details */}
        <View className="px-4 gap-2">
          <Text className="text-zinc-800 text-xl font-bold">Price Details</Text>
          <View className="flex-col gap-4 mt-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-md text-zinc-500">Rent Time</Text>
              <Text className="text-md">
                {rentTime.months > 0 ? `${rentTime.months} months` : "- - -"}{" "}
                {rentTime.days > 0 && `${rentTime.days} days`}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-md text-zinc-500">Monthly Paymnet</Text>
              <Text className="text-md">{property.rentPerMonth}$</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-md text-zinc-500">Tax</Text>
              <Text className="text-md ">15%</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-md font-bold">Total price</Text>
              <Text className="text-2xl text-primary-700 font-bold">
                {totalPrice}
              </Text>
            </View>
          </View>
        </View>

        {/* confirm rent button */}
        <View className="px-4 jus">
          <CustomButton
            className="rounded-lg"
            onButtonPress={() => {
              // Handle payment
              router.back();
            }}
            textClassName="text-white"
          >
            Confirm Rent
          </CustomButton>
        </View>
      </ScrollView>

      {/* payment bottom sheet */}
      <BottomSheetComp
        snapPoints={["50%", "90%"]}
        ref={paymentBottomSheetRef}
        onClose={onPaymentBottomSheetClose}
      >
        <View className="items-center my-4">
          <CreditCardComp
            cardData={cardData}
            setCardData={setCardData}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
        </View>

        {/* add card button */}
        <View className="px-4 mt-10">
          <CustomButton
            className="rounded-lg"
            onButtonPress={() => {
              // Handle payment
              onPaymentBottomSheetClose();
            }}
            textClassName="text-white"
          >
            Add Card
          </CustomButton>
        </View>
      </BottomSheetComp>

      {/* calendar bottom sheet */}
      <BottomSheetComp
        snapPoints={["60%"]}
        ref={calenderBottomSheetRef}
        onClose={onCalenderBottomSheetClose}
      >
        <CalendarComp
          selectedRange={selectedRange}
          onSelectRange={(range) => setSelectedRange(range)}
        />
        <View className="px-4 mt-4">
          <CustomButton
            onButtonPress={onCalenderBottomSheetClose}
            className="rounded-lg"
            textClassName="text-white"
          >
            Confirm Date
          </CustomButton>
        </View>
      </BottomSheetComp>
    </ScreenWrapper>
  );
};

export default RentPropertyDetails;
