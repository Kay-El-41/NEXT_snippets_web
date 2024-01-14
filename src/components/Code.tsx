"use client";
import React, { useState } from "react";

type CodeProps = {
  code: string;
};

export default function Code({ code }: CodeProps) {
  const [copy, setCopy] = useState("Copy");

  const handleClickCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy("Copied");
  };

  return (
    <div className="w-full bg-slate-200 rounded-md p-5 h-60 relative">
      <button
        onClick={handleClickCopy}
        className="border px-3 py-1 absolute top-3 right-3 rounded-md border-slate-600 hover:bg-slate-700 hover:text-white transition-colors"
      >
        {copy}
      </button>
      <p>{code}</p>
    </div>
  );
}
