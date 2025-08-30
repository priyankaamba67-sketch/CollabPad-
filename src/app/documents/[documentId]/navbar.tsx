"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";
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
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocumentInput } from "./document-input";
import { MenubarSubContent } from "@radix-ui/react-menubar";

export const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between bg-blue-100">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex ">
            <Menubar className=" border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger   className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                  <MenubarContent className="print:hidden">
                    <MenubarSub>
                      <MenubarSubTrigger>
                        <FileIcon className="size-4 mr-2" />
                        Save
                      </MenubarSubTrigger>
                      <MenubarContent>
                        <MenubarItem>
                        <MenubarMenu>
                          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                            Edit
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>
                              <Undo2Icon className="size-4 mr-2"/>
                                Undo <MenubarShortcut>xz</MenubarShortcut>
                              
                              </MenubarItem>
                              <MenubarItem>
                              <Redo2Icon className="size-4 mr-2"/>
                                Redo <MenubarShortcut>xy</MenubarShortcut>
                              
                              </MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>

                        
                          <FileJsonIcon className="size-4 mr-2" />
                          JSON
                        </MenubarItem>
                        <MenubarItem>
                          <GlobeIcon className="size-4 mr-2" />
                          HTML
                        </MenubarItem>
                        <MenubarItem>
                          <BsFilePdf className="size-4 mr-2" />
                          PDF
                        </MenubarItem>
                        <MenubarItem>
                          <FileTextIcon className="size-4 mr-2" />
                          TEXT
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarSub>
                    <MenubarItem>
                      <FilePlusIcon className="size-4 mr-2" />
                      New Document
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <MenubarSeparator className="size-4 mr-2" />
                      New Document
                    </MenubarItem>
                    <MenubarItem>
                      <FilePenIcon className="size-4 mr-2" />
                      Rename
                    </MenubarItem>
                    <MenubarItem>
                      <TrashIcon className="size-4 mr-2" />
                      Remove
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={() => window.print()}>
                      <PrinterIcon className="size-4 mr-2" />
                      Print <MenubarShortcut>XP</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        1 x 1
                      </MenubarItem>
                      <MenubarItem>
                        2 x 2
                        <MenubarItem>
                          3 x 3
                        </MenubarItem>
                        <MenubarItem>
                          4 x 4
                        </MenubarItem>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="size-4 mr-2"/>
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon className="size-4 mr-2"/>
                        Bold <MenubarShortcut>xB</MenubarShortcut>
                      </MenubarItem>
                       <MenubarItem>
                        <ItalicIcon className="size-4 mr-2"/>
                        Italic <MenubarShortcut>xI</MenubarShortcut>
                      </MenubarItem>
                       <MenubarItem>
                        <UnderlineIcon className="size-4 mr-2"/>
                        Underline <MenubarShortcut>xU</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <StrikethroughIcon   className="size-4 mr-2"/>
                        <span>Strikethrough&nbsp;&nbsp; </span><MenubarShortcut>xS</MenubarShortcut>
                      </MenubarItem>

                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarItem>
                     <RemoveFormattingIcon className="size-4 mr-2"/>
                     Clear formatting 
                    </MenubarItem>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
