import { db } from "@/app/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="border w-full lg:w-1/2 rounded-md px-2 py-2 hover:border-slate-600 transition-colors"
      >
        <span>{snippet.title}</span>
      </Link>
    );
  });

  return (
    <main>
      <div className="w-full my-10 flex justify-between items-center">
        <h1 className=" text-xl font-semibold">Snippets</h1>
        <Link
          href={"/snippets/new"}
          className="border px-3 py-1 rounded-md hover:border-slate-600 transition-colors"
        >
          New
        </Link>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-3">
        {renderedSnippets}
      </div>
    </main>
  );
}
