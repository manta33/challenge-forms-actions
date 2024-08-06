"use server";

export async function handleForm(prevState: any, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const password = data.get("password");

  if (password !== "12345") {
    return {
      errors: ["Wrong password"],
    };
  }

  return {
    errors: [],
  };
}
