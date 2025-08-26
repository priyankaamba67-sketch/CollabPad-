"use client";
import { TaskItem, TaskList, BulletList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { FontSize } from '@tiptap/extension-text-style'
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
import { types } from "util";
import { FontSizeExtension } from "@/extensions/font-size";

export const Editor = () => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border-[#C7C7C7]flex flex-col min-h-[1054px] w-[816px]",
      },
    },

    extensions: [
      StarterKit,
      LineHeightExtension.configure({
        types:["heading","paragraph"],
        defaultLineHeight:"normal"
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
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
    immediatelyRender: false,
  });

  useEffect(() => {
    setEditor(editor);
    return () => setEditor(null);
  }, [editor, setEditor]);

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex  justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
