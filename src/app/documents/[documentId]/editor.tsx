"use client";
import { TaskItem, TaskList, BulletList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { FontFamily, TextStyle } from "@tiptap/extension-text-style";
import React from "react";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent } from "@tiptap/react";
import { LineHeightExtension } from "@/extensions/line-height";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { useEditorStore } from "@/app/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";

import { Collaboration } from "@tiptap/extension-collaboration";
import CollaborationCaret from "@tiptap/extension-collaboration-caret";
import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { useRoom } from "@liveblocks/react";
import { useUser } from "@clerk/clerk-react";

interface EditorProps{
  initialContent?:string |undefined;

};

export const Editor = ({initialContent}:EditorProps) => {
  const { setEditor } = useEditorStore();
  const room = useRoom();
  const { user } = useUser();
  const userFullName = user?.fullName || user?.firstName || "Anonymous";

  console.log("Editor received initialContent:", initialContent); // Debug log

  const ydoc = React.useMemo(() => new Y.Doc(), []);
  const provider = React.useMemo(
    () => new LiveblocksYjsProvider(room, ydoc),
    [room, ydoc]
  );

  const editor = useEditor({
    autofocus: true,
    editable: true,
    injectCSS: true,
    content: initialContent,
    editorProps: {
      attributes: {
        class: "focus:outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px]",
      },
    },

    extensions: [
      StarterKit.configure({
        undoRedo: false,
        bulletList: false, // Disable bulletList from StarterKit since we're adding it separately
      }),
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
        defaultLineHeight: "normal",
      }),
      FontSizeExtension,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Underline,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Image,
      TextStyle,
      FontFamily,
      TableKit.configure({
        table: { resizable: true },
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
      BulletList,

      Collaboration.configure({ document: ydoc }),
      CollaborationCaret.configure({
        provider,
        user: {
          name: userFullName,
          color: "#f783ac",
        },
      }),
    ],
    immediatelyRender: true,
  });

  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  useEffect(() => {
    setEditor(editor);
    return () => setEditor(null);
  }, [editor, setEditor]);

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex  justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        {/* <Threads editor={editor}/> */}
      </div>
    </div>
  );
};
