import Link from "next/link";
import React from "react";

export default function SnippetNotFound() {
  return (
    <div className="w-full my-10 flex gap-3 items-center">
      <Link
        href={"/"}
        className="border px-3 py-1 rounded-md hover:border-slate-600 transition-colors"
      >
        Go back
      </Link>
      <h1 className=" text-xl font-semibold">Snippet Not Exist</h1>
    </div>
  );
}
