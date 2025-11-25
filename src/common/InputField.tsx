"use client";

import React from "react";

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputField({
  type = "text",
  placeholder = "Type here...",
  value,
  onChange,
  className = "",
}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-[#EEEEEE] px-4 py-3 w-full placeholder:text-heading placeholder:text-[16px] placeholder:font-sans placeholder:font-normal rounded-md outline-none ${className}`}
    />
  );
}
