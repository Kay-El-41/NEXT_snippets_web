import { notFound } from "next/navigation";
import { db } from "@/app/db";
import React from "react";
import Link from "next/link";

type ViewSnippetProps = {
  params: {
    snippetId: string;
  };
};

export default async function ViewSnippet(props: ViewSnippetProps) {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.snippetId) },
  });

  if (!snippet) return notFound();

  return (
    <main>
      <Link href={"/"} className="flex items-center gap-1 my-10">
        <span> {"<"} </span>
        <span className=" text-xl font-semibold">{snippet.title}</span>
      </Link>
    </main>
  );
}
