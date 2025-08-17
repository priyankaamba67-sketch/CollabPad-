"use client";

import {BoldIcon, LucideIcon,PrinterIcon, Redo2Icon, SpellCheckIcon, Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import {useEditorStore} from "@/store/use-editor-store";
import {Separator} from "@/components/ui/seprator";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

export const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 flex items-center justify-center rounded-b-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};
export const Toolbar = () => {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "undo",
        icon: Undo2Icon,
        onClick: () => console.log("undo clicked"),
      },
      {label:"Redo",
        icon: Redo2Icon,
        onClick: () =>editor?.chain().focus().redo().run(),
      },
      {
        label: "print",
        icon: PrinterIcon,
        onClick:() => window.print(),
          
        },
        {
          label:"spell Check",
          icon: SpellCheckIcon,
          onClick: ()=>{
            const current= editor?.view.dom.getAttribute("spellcheck");
            editor?.view.dom.setAttribute("spellcheck", current === "false"? "true":"false")

          },

        }
    ],
    [
      {
        label:"Bold",
        icon:BoldIcon,
        onClick:() =>editor?.chain().focus().toggleBold().run(),
      }

    ]
  ];

      

      
  {  
  
  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
           {sections[0].map((item) => (
            <ToolbarButton key={item.label} {...item} />

           ))}
           <Separator orientation="vertical" className="h-6 bg-neutral-300"/>

      {/*TODO: font family*/}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
       {/*TOOD:heading*/}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
       {/*TODO:font size*/}
       <span>TODO:font Size</span>
       <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
       {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item}/>
       ))}
           
           </div>
   
          );
};

