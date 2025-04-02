import { z } from "zod";
const SignupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z
      .string({ message: "First name is required" })
      .min(3, { message: "Must be at least 3 characters" }),
    age: z
      .number({ message: "Age must be a number" })
      .min(10, { message: "You must be ten years or older" }),
    phoneNumber: z
      .string()
      .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" })
      .optional(),
    gender: z.enum(["male", "female", "other"], {
      message: "Gender must male, female, or other",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
          "Password must contain a letter, a number, and a special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords should match",
    path: ["confirmPassword"],
  });

const updateUserSchema = z.object({
  name: z
    .string({ message: "First name is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  age: z
    .number({ message: "Age must be a number" })
    .min(10, { message: "You must be ten years or older" }),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" })
    .optional(),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender must male, female, or other",
  }),
});

const newBookSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  author: z
    .string({ message: "Author name is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  image: z
    .string({ message: "Image link is required" })
    .regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.,@?^=%&:/~+#-]*)?$/,"Invalid link"),
  path: z
    .string({ message: "Link to the book is required" })
    .min(3, { message: "Must be at least 3 characters" })
    .regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.,@?^=%&:/~+#-]*)?$/,"Invalid link"),
  description: z
    .string({ message: "Book description is required" })
    .min(3, { message: "Must be at least 3 characters" }),
});

const newExpertSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z
    .string({ message: "First name is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  age: z
    .number({ message: "Age must be a number" })
    .min(10, { message: "You must be ten years or older" }),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" })
    .optional(),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender must male, female, or other",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        "Password must contain a letter, a number, and a special character",
    }),
  specialty: z
    .string({ message: "Speciality is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  expertise: z
    .string({ message: "Expertise name is required" })
    .min(3, { message: "Must be at least 3 characters" }),
  image: z
    .string({ message: "Image link is required" })
    .min(3, { message: "Must be at least 3 characters" })
    .regex(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.,@?^=%&:/~+#-]*)?$/,"Invalid link"),
});
export { SignupSchema, updateUserSchema, newBookSchema, newExpertSchema };
