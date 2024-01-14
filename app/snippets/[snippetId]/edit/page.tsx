import Link from "next/link";
import { db } from "@/app/db";
import { notFound } from "next/navigation";
import { ViewSnippetProps } from "../page";
import CodeEditor from "@/src/components/CodeEditor";

export default async function EditSnippet(props: ViewSnippetProps) {
  const id = props.params.snippetId;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.snippetId) },
  });

  if (!snippet) return notFound();

  return (
    <main>
      <div className="flex my-10 w-full justify-between">
        <Link href={`/snippets/${id}`} className="flex items-center gap-1">
          <span> {"<"} </span>
          <span className=" text-xl font-semibold">Back</span>
        </Link>
      </div>
      <CodeEditor snippet={snippet} />
    </main>
  );
}
