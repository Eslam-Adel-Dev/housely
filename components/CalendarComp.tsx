// react imports
import React from "react";
import { View } from "react-native";
// calendar imports
import { Calendar } from "react-native-calendars";
// types imports
import { CalendarCompProps } from "@/types/type";

//=============================================

const CalendarComp = ({ selectedRange, onSelectRange }: CalendarCompProps) => {
  const { startDate, endDate } = selectedRange;

  const onDayPress = (day: any) => {
    if (!startDate || (startDate && endDate)) {
      onSelectRange({ startDate: day.dateString, endDate: "" });
    } else {
      if (day.dateString < startDate) {
        onSelectRange({ startDate: day.dateString, endDate: "" });
      } else if (day.dateString === startDate) {
        onSelectRange({ startDate: "", endDate: "" });
      } else {
        onSelectRange({ startDate, endDate: day.dateString });
      }
    }
  };

  const getMarkedDates = () => {
    let marked: any = {};

    if (startDate) {
      marked[startDate] = {
        startingDay: true,
        color: "#6941C6",
        textColor: "white",
      };
    }

    if (endDate) {
      marked[endDate] = {
        endingDay: true,
        color: "#6941C6",
        textColor: "white",
      };

      // Fill the range between startDate and endDate
      let start = new Date(startDate);
      let end = new Date(endDate);
      let current = new Date(start);
      current.setDate(current.getDate() + 1);

      while (current < end) {
        const dateString = current.toISOString().split("T")[0];
        marked[dateString] = {
          color: "#F4EBFF",
          textColor: "#6941C6",
        };
        current.setDate(current.getDate() + 1);
      }
    }

    return marked;
  };

  return (
    <View className="p-4">
      <Calendar
        markingType={"period"}
        markedDates={getMarkedDates()}
        onDayPress={onDayPress}
        theme={{
          todayTextColor: "#6941C6",
          arrowColor: "#6941C6",
          monthTextColor: "#6941C6",
          indicatorColor: "#6941C6",
          textDayFontWeight: "600",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "600",
        }}
      />
    </View>
  );
};

export default CalendarComp;
