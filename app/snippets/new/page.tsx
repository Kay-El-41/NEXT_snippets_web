import React from "react";
import { db } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // Ths needs to be a server action!
    "use server";
    //? "use server" is a NEXT directive that this will use the server

    // Check the user's input and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // Create a new record in a database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // Redirect the user back to the root route
    redirect("/");
  }

  return (
    <form action={createSnippet}>
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
            required
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
            required
            id="code"
            name="code"
            rows={10}
            className="border rounded p-2 w-full resize-none"
          />
        </div>

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
