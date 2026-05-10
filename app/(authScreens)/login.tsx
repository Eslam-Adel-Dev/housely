// react  imports
// components imports
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import CustomInput from "@/components/inputs/CustomInput";
// expo imports
import { Link } from "expo-router";
// react native imports
import SocialAuth from "@/components/auth/SocialAuth";
import { ScrollView, Text, View } from "react-native";
// types import
import { loginInput } from "@/types/type";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { loginSchema } from "@/lib/yupSchemas/loginSchema";
// hooks imports
import { useLogin } from "@/api/hooks/useAuth";

//=========================================================

//=========================================================

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const { mutateLogin, isPending } = useLogin();

  // -----------------------

  const handleLogin = async (data: loginInput) => {
    console.log(data);
    try {
      mutateLogin(data);
    } catch (error) {
      console.log("FETCH ERROR", error);
    }
  };

  // -----------------------

  return (
    <ScreenWrapper className="p-4 pt-10 bg-[#fcfcfd]">
      <ScrollView>
        {/* ---------------------------------- */}
        <View className="flex gap-2 mb-10 mt-5">
          <Text className="text-[1.7rem] font-bold">Welcome Back !</Text>
          <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
            Sign in with your email and password or social media to continue
          </Text>
        </View>
        {/* ---------------------------------- */}
        <View className="mb-10">
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message}
                keyboardType="email-address"
                autoCapitalize="none"
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
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
                isPassword
              />
            )}
          />

          {/* Remember Me + Forgot Password */}
          <View className="flex-row items-center justify-between mb-8">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckboxWithLabel
                  classNameContainer=""
                  label="Remember Me"
                  classNameLabel="text-md font-semibold"
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
            <Link href="/forgot-password" className="text-primary-600">
              Forgot Password ?
            </Link>
          </View>

          {/* Submit */}
          <CustomButton
            onButtonPress={handleSubmit(handleLogin) as () => void}
            textClassName="text-white"
            className="rounded-lg"
            loading={isPending}
            disabled={isPending}
          >
            Sign In
          </CustomButton>
        </View>

        {/* ---------------------------------- */}
        <SocialAuth />
        {/* ---------------------------------- */}
        <View>
          <Text className="text-zinc-400 text-center">
            Dont have an account ?{" "}
            <Link href="/register" className="text-primary-600">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Login;
