"use server";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => (email.includes("zod.com") ? true : false),
      "Only @zod.com emails are allowed"
    ),
  username: z.string().min(5, "Username should be at least 5 characters long"),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long")
    .refine(
      (password) =>
        password.includes(
          "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0"
        )
          ? true
          : false,
      "Password should contain at least one number (0123456789)."
    ),
});

export async function handleForm(prevState: any, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const items = {
    username: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const result = formSchema.safeParse(items);
  if (!result.success) {
    return result.error.flatten();
  }
}
