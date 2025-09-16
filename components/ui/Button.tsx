"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={`rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50 ${className}`}
      {...props}
    />
  );
}
