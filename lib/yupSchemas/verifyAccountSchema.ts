import * as yup from "yup";

export const verifyAccountSchema = yup.object({
  otp: yup.string().required("OTP is required").min(6, "OTP must be 6 digits"),
});

export type VerifyAccountFormData = yup.InferType<typeof verifyAccountSchema>;
