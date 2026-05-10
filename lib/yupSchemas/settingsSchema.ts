import * as yup from "yup";

export interface SettingsFormData {
  name: string;
  email: string;
  profession: string;
  phone: string;
}

export const settingsSchema: yup.ObjectSchema<SettingsFormData> = yup
  .object({
    name: yup.string().ensure(),
    email: yup.string().email("Please enter a valid email address").ensure(),
    profession: yup.string().ensure(),
    phone: yup
      .string()
      .ensure()
      .test("is-number", "Phone number must be digits only", (val) =>
        val ? /^[0-9]+$/.test(val) : true,
      )
      .test("is-length", "Phone number must be at least 10 digits", (val) =>
        val ? val.length >= 10 : true,
      ),
  })
  .test("at-least-one", "At least one field must be filled", (values) => {
    return !!(values.name || values.email || values.profession || values.phone);
  });
