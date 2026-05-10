// react imports
import { useState } from "react";
// expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import CustomInput from "@/components/inputs/CustomInput";
import PhoneInput from "@/components/inputs/PhoneInput";
// country picker
import CountryPickerModal, {
  CountryItem,
} from "@/components/CountryPickerModal";
// expo imports
import { Link, useRouter } from "expo-router";
// react native imports
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SocialAuth from "@/components/auth/SocialAuth";
// types import
import { registerInput } from "@/types/type";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { registerSchema } from "@/lib/yupSchemas/registerSchema";
// hooks imports
import { useRegister } from "@/api/hooks/useAuth";

//=========================================================

//=========================================================

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInput>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      agreeToTerms: false,
    },
  });

  // Country Picker State
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryItem>({
    name: "Egypt",
    flag: "🇪🇬",
    dial_code: "20",
    code: "EG",
  });

  const router = useRouter();

  // hooks
  const { mutateRegister, isPending } = useRegister();
  // -----------------------

  const handleRegister = async (data: registerInput) => {
    try {
      // Concatenate calling code with phone number
      const formattedData = {
        ...data,
        phone: `+${selectedCountry.dial_code}${data.phone}`,
      };
      mutateRegister(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  // -----------------------

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <ScrollView>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        {/* ---------------------------------- */}
        <View className="flex gap-2 mb-10 mt-5">
          <Text className="text-[1.7rem] font-bold">Register Account</Text>
          <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
            Sign in with your email and password or social media to continue
          </Text>
        </View>
        {/* ---------------------------------- */}
        <View className="mb-10">
          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Name"
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.name?.message}
                textContentType="name"
                autoComplete="name"
              />
            )}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Email"
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
                autoCapitalize="none"
              />
            )}
          />

          {/* Phone Field */}
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneInput
                label="Phone Number"
                placeholder="Enter your phone number"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.phone?.message}
                selectedCountry={selectedCountry}
                onPickerPress={() => setPickerVisible(true)}
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Password"
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
                isPassword
                autoComplete="password"
              />
            )}
          />

          {/* Terms Checkbox */}
          <View className="mb-8">
            <Controller
              name="agreeToTerms"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckboxWithLabel
                  label="Agree with terms and privacy"
                  classNameLabel="text-md font-semibold"
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
            {errors.agreeToTerms && (
              <Text className="text-red-500 text-sm ml-1 mt-1">
                {errors.agreeToTerms.message}
              </Text>
            )}
          </View>
        </View>
        {/* ---------------------------------- */}

        <CustomButton
          onButtonPress={handleSubmit(handleRegister) as () => void}
          textClassName="text-white"
          className="rounded-lg"
          disabled={isPending}
          loading={isPending}
        >
          Sign Up
        </CustomButton>
        {/* ---------------------------------- */}
        <SocialAuth />
        {/* ---------------------------------- */}
        <View>
          <Text className="text-zinc-400 text-center">
            Already have an account ?{" "}
            <Link href="/login" className="text-primary-600">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>

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

export default Register;
