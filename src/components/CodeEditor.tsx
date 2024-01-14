"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

type CodeEditorProps = {
  snippet: Snippet;
};

export default function CodeEditor({ snippet }: CodeEditorProps) {
  const [code, setCode] = useState(snippet.code);

  const handleChangeCodeValue = (value: string = "") => {
    console.log(value);
    setCode(value);
  };

  return (
    <div className="w-full">
      <Editor
        defaultValue={code}
        defaultLanguage="javascript"
        height={"35vh"}
        theme="vs-dark"
        options={{ minimap: { enabled: false }, fontSize: 16 }}
        onChange={handleChangeCodeValue}
      />
    </div>
  );
}
