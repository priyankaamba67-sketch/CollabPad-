"use Client";

import Image from "next/image";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";
import { FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, PrinterIcon, TrashIcon } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocumentInput } from "./document-input";
import { MenubarSeparator, MenubarSub } from "@radix-ui/react-menubar";

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
                <MenubarTrigger>
                  File
                  <MenubarContent className="print:hidden">
                    <MenubarSub>
                      <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-2" />
                      Save
                      </MenubarSubTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          <FileJsonIcon className="size-4 mr-2"/>
                          JSON
                        </MenubarItem>
                        <MenubarItem>
                          <GlobeIcon className="size-4 mr-2"/>
                          HTML
                        </MenubarItem>
                        <MenubarItem>
                          <BsFilePdf className="size-4 mr-2"/>
                          PDF
                        </MenubarItem>
                        <MenubarItem>
                          <FileTextIcon className="size-4 mr-2"/>
                          TEXT
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarSub>
                     <MenubarItem>
                      <FilePlusIcon className="size-4 mr-2"/> 
                      New Document
                     </MenubarItem>
                     <MenubarSeparator/>
                     <MenubarItem>
                     <MenubarSeparator className="size-4 mr-2"/> 
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
                     <MenubarSeparator/>
                     <MenubarItem onClick={() => window.print()}>
                      <PrinterIcon className="size-4 mr-2"/>
                      Print <MenubarShortcut>XP</MenubarShortcut>

                     </MenubarItem>
                  </MenubarContent>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
               <MenubarTrigger className="text-sm font-normal py-0 px-[7px] rounded-sm hover:bg-muted h-auto">
                Insert
                </MenubarTrigger> 
              </MenubarMenu>
             < MenubarMenu>
               <MenubarTrigger className="text-sm font-normal py-0 px-[7px] rounded-sm hover:bg-muted h-auto">
                Format
                </MenubarTrigger> 
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
