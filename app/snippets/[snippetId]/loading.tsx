import React from "react";

export default function SnippetLoading() {
  return (
    <main>
      <div className="w-full flex items-center justify-between my-10">
        <div className="flex gap-1">
          <span className="w-5 h-5 bg-slate-200 animate-pulse" />
          <span className="w-60 h-5 rounded-md animate-pulse bg-slate-200" />
        </div>
        <div className="flex gap-3">
          <span className="w-20 h-8 rounded-md bg-slate-200 animate-pulse" />
          <span className="w-20 h-8 rounded-md bg-slate-200 animate-pulse" />
        </div>
      </div>
    </main>
  );
}
