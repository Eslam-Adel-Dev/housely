import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
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
