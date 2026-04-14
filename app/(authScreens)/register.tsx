// react imports
import { useState } from "react";
// expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// country picker
import CountryPickerModal, {
  CountryItem,
} from "@/components/CountryPickerModal";
// expo imports
import { Link, useRouter } from "expo-router";
// react native imports
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// images imports
import facebook_logo from "@/assets/images/facebook-logo.png";
import google_logo from "@/assets/images/google-logo.png";
// types import
import { registerInput } from "@/types/type";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { registerSchema } from "@/lib/yupSchemas/registerSchema";

//=========================================================

const styles = {
  textInput: "h-16 rounded-2xl bg-white text-lg px-5 text-zinc-600",
};

//=========================================================

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInput>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      agreeToTerms: false,
    },
  });
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedPhone, setFocusedPhone] = useState(false);

  // Country Picker State
  const [pickerVisible, setPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryItem>({
    name: "Egypt",
    flag: "🇪🇬",
    dial_code: "20",
    code: "EG",
  });

  const router = useRouter();

  // -----------------------

  const handleRegister = async (data: registerInput) => {
    try {
      // Concatenate calling code with phone number
      const formattedData = {
        ...data,
        phone: `+${selectedCountry.dial_code}${data.phone}`,
      };
      console.log(formattedData);
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
          {/* Email Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="email"
              htmlFor="email"
              className="text-lg font-bold"
            >
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="email"
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => {
                    setFocusedEmail(false);
                    onBlur();
                  }}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  autoCapitalize="none"
                  className={`${focusedEmail ? "border-primary-600 border-[1.5px]" : errors.email ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400`}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Phone Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="phone"
              htmlFor="phone"
              className="text-lg font-bold"
            >
              Phone Number
            </Label>
            <View className="flex-row items-center gap-2">
              {/* Country Picker Trigger */}
              <TouchableOpacity
                onPress={() => setPickerVisible(true)}
                className={`flex-row items-center justify-center h-16 px-4 rounded-2xl bg-white border-[1.5px] ${focusedPhone ? "border-primary-600" : errors.phone ? "border-red-500" : "border-zinc-300"}`}
              >
                <Text className="text-2xl">{selectedCountry.flag}</Text>
                <Text className="text-zinc-600 text-lg ml-2">
                  +{selectedCountry.dial_code}
                </Text>
                <Feather
                  name="chevron-down"
                  size={16}
                  color="#D1D5DB"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>

              {/* Phone Input */}
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Enter your phone number"
                    value={value}
                    onChangeText={onChange}
                    onFocus={() => setFocusedPhone(true)}
                    onBlur={() => {
                      setFocusedPhone(false);
                      onBlur();
                    }}
                    keyboardType="phone-pad"
                    className={`flex-1 ${focusedPhone ? "border-primary-600 border-[1.5px]" : errors.phone ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
                  />
                )}
              />
            </View>
            {errors.phone && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.phone.message}
              </Text>
            )}
          </View>

          {/* Password Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="password"
              htmlFor="password"
              className="text-lg font-bold"
            >
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="password"
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => {
                    setFocusedPassword(false);
                    onBlur();
                  }}
                  secureTextEntry
                  textContentType="password"
                  autoComplete="password"
                  className={`${focusedPassword ? "border-primary-600 border-[1.5px]" : errors.password ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400`}
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.password.message}
              </Text>
            )}
          </View>

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
        >
          Sign Up
        </CustomButton>
        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-between gap-2 mt-5 mb-7">
          <View className="h-[1px] bg-zinc-200 flex-1" />
          <Text>OR</Text>
          <View className="h-[1px] bg-zinc-200 flex-1" />
        </View>

        {/* ---------------------------------- */}
        <View className="flex-row items-center justify-center mb-7 gap-7">
          <TouchableOpacity className="bg-white rounded-full p-2">
            <Image source={google_logo} className="size-10" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-full p-2">
            <Image source={facebook_logo} className="size-10" />
          </TouchableOpacity>
        </View>
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
