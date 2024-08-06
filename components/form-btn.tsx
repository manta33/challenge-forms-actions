"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-2xl bg-gray-200 items-center text-sm justify-center w-[400px] py-2.5 font-bold h-10 hover:bg-gray-400 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
