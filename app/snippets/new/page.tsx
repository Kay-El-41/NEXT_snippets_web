"use client";
import React from "react";
import Link from "next/link";
import * as actions from "@/src/actions";
import { useFormState } from "react-dom";

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <Link href={"/"} className="flex items-center gap-1 my-10">
        <span> {"<"} </span>
        <span className=" text-xl font-semibold">Create New Snippet</span>
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="code" className="w-12">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="w-12">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            rows={10}
            className="border rounded p-2 w-full resize-none"
          />
        </div>

        <p>{formState.message}</p>

        <button
          type="submit"
          className="rounded-md w-1/4 mx-auto p-2 border text-white bg-slate-600 hover:shadow-md active:shadow-inner active:translate-y-[1px] transition"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
