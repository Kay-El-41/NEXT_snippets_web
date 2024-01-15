"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

import * as actions from "@/src/actions";

type CodeEditorProps = {
  snippet: Snippet;
};

export default function CodeEditor({ snippet }: CodeEditorProps) {
  const [code, setCode] = useState(snippet.code);

  const handleChangeCodeValue = (value: string = "") => {
    setCode(value);
  };

  const handleUpdateCode = actions.updateSnippet.bind(null, snippet.id, code);

  return (
    <>
      <div className="w-full h-fit pb-5">
        <Editor
          defaultValue={code}
          defaultLanguage="javascript"
          height={"35vh"}
          theme="vs-dark"
          options={{ minimap: { enabled: false }, fontSize: 16 }}
          onChange={handleChangeCodeValue}
        />
      </div>
      <form action={handleUpdateCode} className="flex justify-center w-full">
        <button
          type="submit"
          className="rounded-md w-1/4 mx-auto p-2 border text-white bg-slate-600 hover:shadow-md active:shadow-inner active:translate-y-[1px] transition"
        >
          Update
        </button>
      </form>
    </>
  );
}
