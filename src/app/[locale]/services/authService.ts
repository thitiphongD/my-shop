import { signUpUserSchema } from "@/app/validation/authValidationSchema";
import { z } from "zod";

type SignUpFormType = z.infer<typeof signUpUserSchema>;

export const signUpService = async (url: string, data: SignUpFormType) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("An error occurred while submitting the form");
  }
  return response.json();
};
