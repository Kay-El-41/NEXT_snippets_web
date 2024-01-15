import { notFound } from "next/navigation";
import { db } from "@/app/db";
import React from "react";
import Link from "next/link";
import Code from "@/src/components/Code";
import * as actions from "@/src/actions";

export type ViewSnippetProps = {
  params: {
    snippetId: string;
  };
};

export default async function ViewSnippet(props: ViewSnippetProps) {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.snippetId) },
  });

  const handleDeleteSnippet = actions.deleteSnippet.bind(
    null,
    parseInt(props.params.snippetId)
  );

  if (!snippet) return notFound();

  return (
    <main>
      <div className="flex my-10 w-full justify-between">
        <Link href={"/"} className="flex items-center gap-1">
          <span> {"<"} </span>
          <span className=" text-xl font-semibold">{snippet.title}</span>
        </Link>
        <div className="flex gap-3">
          <Link
            href={`${props.params.snippetId}/edit`}
            className="border px-3 py-1 rounded-md hover:border-slate-600 transition-colors"
          >
            Edit
          </Link>
          <form action={handleDeleteSnippet}>
            <button className="border px-3 py-1 rounded-md hover:border-slate-600 transition-colors">
              Delete
            </button>
          </form>
        </div>
      </div>
      <Code code={snippet.code} />
    </main>
  );
}
