import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and privacy policy")
    .required(),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
