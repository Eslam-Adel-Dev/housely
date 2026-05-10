// icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import CustomInput from "@/components/inputs/CustomInput";
import PhoneInput from "@/components/inputs/PhoneInput";
// expo imports
import { useRouter } from "expo-router";
// react imports
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import {
  SettingsFormData,
  settingsSchema,
} from "@/lib/yupSchemas/settingsSchema";
// images imports
import { useUpdateUserProfile } from "@/api/hooks/useUser";
import { useUserStore } from "@/store/userStore";
// date package imports
import CountryPickerModal, {
  CountryItem,
} from "@/components/CountryPickerModal";

//=========================================================

//=========================================================

const Settings = () => {
  // Country Picker State
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryItem>({
    name: "Egypt",
    flag: "🇪🇬",
    dial_code: "20",
    code: "EG",
  });

  const router = useRouter();

  // user store
  const { user } = useUserStore();
  const { updateProfile, isPending } = useUpdateUserProfile();

  const userPhone = user?.phone?.split("+")[1];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    resolver: yupResolver(settingsSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      profession: user?.profession || "",
      phone: userPhone || "",
    },
  });

  const handleUpdate = (data: SettingsFormData) => {
    updateProfile({
      ...data,
      phone: `+${selectedCountry.dial_code}${data.phone}`,
    });
  };

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      {/* ---------------------------------- */}
      <View className="py-12 w-full items-center justify-center gap-4">
        <View>
          <Image
            className="rounded-full"
            source={{ uri: user?.image || "" }}
            style={{ width: 150, height: 150 }}
            resizeMode="cover"
          />
        </View>
        <View className="items-center justify-center gap-1">
          <Text className="text-lg font-bold">{user?.name}</Text>
          <Text className="text-zinc-400">{user?.email}</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView
          className="h-full"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ---------------------------------- */}
          <View className="mb-10">
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Name"
                  placeholder="Enter your name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.name?.message}
                  textContentType="name"
                  autoComplete="name"
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.email?.message}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  autoCapitalize="none"
                />
              )}
            />

            <Controller
              name="profession"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Profession"
                  placeholder="Enter your profession"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.profession?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PhoneInput
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.phone?.message}
                  selectedCountry={selectedCountry}
                  onPickerPress={() => setPickerVisible(true)}
                />
              )}
            />
          </View>
          {/* ---------------------------------- */}

          <CustomButton
            onButtonPress={handleSubmit(handleUpdate)}
            className="rounded-lg"
            textClassName="text-white"
            loading={isPending}
            disabled={isPending}
          >
            Save Changes
          </CustomButton>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Country Picker Modal */}
      <CountryPickerModal
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
        onSelect={(country) => {
          setSelectedCountry(country);
          setPickerVisible(false);
        }}
      />
    </ScreenWrapper>
  );
};

export default Settings;
