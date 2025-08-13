"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border-[#C7C7C7]flex flex-col min-h-[1054px] w-[816px]",
      },
    },

    extensions: [StarterKit],
    content: "<p>hello world! </p>",
  });

  return (
    <div className="size-full overflow-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="-max flex <justify-center w-[816px] py-4 print:py-0 max-auto print:w-full print:min-w-0"></div>
      <EditorContent editor={editor} />
    </div>
  );
};
