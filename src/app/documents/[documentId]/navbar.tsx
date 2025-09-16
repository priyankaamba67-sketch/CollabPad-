"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";
import { OrganizationSwitcher,UserButton } from "@clerk/nextjs";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormatting,
  RemoveFormattingIcon,
  Rows,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocumentInput } from "./document-input";
import { useEditor, useEditorState } from "@tiptap/react";
import { useEditorStore } from "@/app/store/use-editor-store";

export const Navbar = () => {
  const { editor } = useEditorStore();
  const InsertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };
  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };
  const onSaveJson = () => {
    if (!editor) return;
    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDownload(blob, "document.json"); //Todo: Use document name
  };
  const onSaveHTML = () => {
    if (!editor) return;
    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, "document.html"); //Todo: Use document name
  };
  const onSaveText = () => {
    if (!editor) return;
    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, "document."); //Todo: Use document name
  };

  return (
    <nav className="flex items-center  justify-between bg-blue-100">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>

                                                                      
                  <FileIcon className="size-4 mr-2" />
                    Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={onSaveJson}>
                        <FileJsonIcon className="size-4 mr-2"/>
                        JSON
                      </MenubarItem>
                       <MenubarItem onClick={onSaveHTML}>
                        <GlobeIcon className="size-4 mr-2"/>
                        HTML
                      </MenubarItem>
                       <MenubarItem  onClick={() => window.print()}>
                        <BsFilePdf className="size-4 mr-2"/>
                        PDF
                      </MenubarItem>
                       <MenubarItem onClick={onSaveText}>
                        <FileTextIcon className="size-4 mr-2"/>
                        Text
                      </MenubarItem>


                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <FilePlusIcon className="size-4 mr-2"/>
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePenIcon className="size-4 mr-2"/> 
                    Rename
                  </MenubarItem>
                  <MenubarItem>
                    <TrashIcon className="size-4 mr-2"/> 
                    Remove
                  </MenubarItem>
                  <MenubarSeparator/>
                  <MenubarItem  onClick={()=> window.print()}>
                    <PrinterIcon className="size-4 mr-2"/> 
                    Print <MenubarShortcut>XP</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={()=> InsertTable({rows: 1, cols:1 })}>
                        1 X 1
                      </MenubarItem>
                      <MenubarItem onClick={()=> InsertTable({rows: 2, cols:2 })}>
                        
                        2 X 2
                      </MenubarItem>
                      <MenubarItem onClick={()=> InsertTable({rows: 3, cols:3 })}>
                        
                        3 X 3
                      </MenubarItem>
                      <MenubarItem  onClick={()=> InsertTable({rows: 4, cols:4 })}>
                        
                        4 x 4
                      </MenubarItem>

                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon  className="size-4 mr-2"/>
                      Text
                    </MenubarSubTrigger>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center pl-6">
                <OrganizationSwitcher
                afterCreateOrganizationUrl="/"
                afterLeaveOrganizationUrl="/"
                afterSelectOrganizationUrl="/"
                afterSelectPersonalUrl="/"
                />

            
            <UserButton />
              </div>
    </nav>
  );
};
