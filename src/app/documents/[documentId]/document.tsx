import { Room } from "./room";
import { Editor } from "./editor";
import { Navbar } from "./navbar";

import { Toolbar } from "./toolbar";
import { Preloaded } from "convex/react";
import {api} from"../../../../convex/_generated/api";

interface DocumentIdProps {
  preloadDocument: Preloaded< typeof api.documents.getById>;
};

export const Document= async ({ preloadDocument }: DocumentIdProps) => {
return (
   <Room>
      <div className="min-h-screen bg-[#e6e9ee]">
        <div className="px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#f8f5f8dd] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};


