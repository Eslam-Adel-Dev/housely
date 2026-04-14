import countriesData from "@/data/countries.json";
import Feather from "@expo/vector-icons/Feather";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// =========================================================

export interface CountryItem {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
}

interface CountryPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: CountryItem) => void;
}

// =========================================================

const CountryPickerModal = ({
  visible,
  onClose,
  onSelect,
}: CountryPickerModalProps) => {
  const [search, setSearch] = useState("");

  const filteredCountries = useMemo(() => {
    if (!search) return countriesData;
    const q = search.toLowerCase();
    return countriesData.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial_code.includes(search),
    );
  }, [search]);

  const handleSelect = (country: CountryItem) => {
    onSelect(country);
    setSearch("");
  };

  const handleClose = () => {
    onClose();
    setSearch("");
  };

  const renderItem = ({ item }: { item: CountryItem }) => (
    <TouchableOpacity
      onPress={() => handleSelect(item)}
      style={styles.item}
      activeOpacity={0.6}
    >
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.dialCode}>+{item.dial_code}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
            <Feather name="x" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.title}>Select Country</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search country or code..."
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#9CA3AF"
            autoCorrect={false}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Feather name="x-circle" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Country List */}
        <FlatList
          data={filteredCountries}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </Modal>
  );
};

// =========================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  closeBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 14,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#1F2937",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F9FAFB",
  },
  flag: {
    fontSize: 26,
    marginRight: 14,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  dialCode: {
    fontSize: 15,
    color: "#9CA3AF",
    fontWeight: "600",
  },
  listContent: {
    paddingBottom: 30,
  },
});

export default CountryPickerModal;
