"use client";

type SnippetCreateErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function SnippetCreateErrorPage({
  error,
}: SnippetCreateErrorPageProps) {
  return (
    <div className="w-full h-full flex place-content-center">
      {error.message}
    </div>
  );
}
