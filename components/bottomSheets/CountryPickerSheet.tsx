import Feather from "@expo/vector-icons/Feather";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import countriesData from "../../assets/data/countries.json";

interface Country {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
}

interface CountryPickerSheetProps {
  onSelect: (country: Country) => void;
  onClose: () => void;
}

const CountryPickerSheet = forwardRef<
  BottomSheetModal,
  CountryPickerSheetProps
>(({ onSelect, onClose }, ref) => {
  const [search, setSearch] = useState("");

  const filteredCountries = useMemo(() => {
    if (!search) return countriesData;
    return countriesData.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial_code.includes(search),
    );
  }, [search]);

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

  const renderItem = useCallback(
    ({ item }: { item: Country }) => (
      <TouchableOpacity
        onPress={() => onSelect(item)}
        style={styles.itemContainer}
        activeOpacity={0.7}
      >
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.dialCode}>+{item.dial_code}</Text>
      </TouchableOpacity>
    ),
    [onSelect],
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={["50%", "85%"]}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      onDismiss={onClose}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.indicator}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Country</Text>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#9CA3AF" />
            <BottomSheetTextInput
              placeholder="Search country or code..."
              style={styles.input}
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#9CA3AF"
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch("")}>
                <Feather name="x-circle" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <FlashList
          data={filteredCountries}
          renderItem={renderItem}
          estimatedItemSize={60}
          keyExtractor={(item) => item.code}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </BottomSheetModal>
  );
});

CountryPickerSheet.displayName = "CountryPickerSheet";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    borderRadius: 30,
  },
  indicator: {
    backgroundColor: "#D1D5DB",
    width: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#1F2937",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#1F2937",
    height: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  flag: {
    fontSize: 24,
    marginRight: 15,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  dialCode: {
    fontSize: 16,
    color: "#9CA3AF",
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CountryPickerSheet;
