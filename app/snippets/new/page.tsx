import React from "react";
import { db } from "@/app/db";
import { redirect } from "next/navigation";

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
    console.log(snippet);
    // Redirect the user back to the root route
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
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
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
