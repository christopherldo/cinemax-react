import z from "zod";

export const schema = z
  .object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must contain at least 6 characters"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and services and the privacy policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });
