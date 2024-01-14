import React from "react";

export default function SnippetLoading() {
  return (
    <main>
      <div className="flex items-center gap-1 my-10">
        <span className="w-5 h-5 bg-slate-200 animate-pulse" />
        <span className="w-60 h-5 rounded-md animate-pulse bg-slate-200" />
      </div>
    </main>
  );
}
