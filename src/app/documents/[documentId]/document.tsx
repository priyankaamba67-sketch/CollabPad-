"use client";
import { Room } from "./room";
import { Editor } from "./editor";
import { Navbar } from "./navbar";

import { Toolbar } from "./toolbar";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);
  console.log("Document data:", document); // Debug log

  return (
    <Room documentId={document!._id}>
      <div className="min-h-screen bg-[#e6e9ee]">
        <div className="px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#f8f5f8dd] print:hidden">
          <Navbar data={document!} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor initialContent={document?.initialContent ?? ''} />
        </div>
      </div>
    </Room>
  );
};
