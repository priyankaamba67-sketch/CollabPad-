"use client";
import {useState} from "react";
import {type ColorResult,SketchPicker} from "react-color";
import {type Level} from "@tiptap/extension-heading";

import {
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  List,
  ListTodoIcon,
  LucideIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/app/store/use-editor-store";
import { useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import{
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { DialogContent } from "@radix-ui/react-dialog";

const ImageButton =()=>{
  const {editor} = useEditorStore();
  const[isDialogOpen,setIsDialogOpen] =useState(false);
  const [imageUrl,setImageUrl] =useState ("");

  const onChange= (src:string) =>{
    editor?.chain().focus().setImage({src}).run();
    
  };
  const onUpload =() =>{
    const input  =document.createElement("input");
    input.type ="file";
    input.accept="image/*";

    input.onchange =(e)=>{
      const file = (e.target as HTMLInputElement).files?.[0];
      if(file){
        const imageUrl =URL.createObjectURL(file);
        onChange(imageUrl);
      }

    }
    input.click();
  };
  const handleImageUrlSubmit =()=>{
    if(imageUrl){
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };


  return (
    <>
    <DropdownMenu >
      <DropdownMenuTrigger  asChild>
        <button 
        className="h-7 min-w-7 shrink-0 flex-col items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm "> 
          <ImageIcon className="size-4"/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuItem onClick={onUpload}>
          <UploadIcon className="size-4 mr-2"/>
          Upload
        </DropdownMenuItem>
      <DropdownMenuItem onClick={()=> setIsDialogOpen(true)}>
        <SearchIcon className="size-4 mr-2"/>
        Paste image url
      </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert image URL</DialogTitle>
        </DialogHeader>
      
      <Input
      placeholder="Insert image URL"
      value={imageUrl}
      onChange={(e) =>setImageUrl(e.target.value)}
      onKeyDown={(e)=>{
       if(e.key ==="Enter"){
        handleImageUrlSubmit();
       }
      }}
/>
    </DialogContent>
    <DialogFooter>
    <Button  onClick={handleImageUrlSubmit}>
    Insert
    </Button>
    </DialogFooter>
    </Dialog>
    </>
  );
}



const LinkButton =()=>{
  const {editor} = useEditorStore();
  const [v,setValue] =useState ("");
console.log(editor?.getAttributes("Link").href,"TEST")

  const onChange= (href:string) =>{
    editor?.chain().focus().extendMarkRange("link").setLink({href}).run();
    setValue("");
  };


  function handleImageUrlSubmit() {
    throw new Error("Function not implemented.");
  }

  function setImageUrl(value: string): void {
    throw new Error("Function not implemented.");
  }

  function setIsDialogOpen(open: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
    <DropdownMenu >
      
      <DropdownMenuTrigger  asChild>
        <button 
        
        className="h-7 min-w-7 shrink-0 flex-col items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm " 
        >
          <ImageIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuItem onClick={onUpload}>
        <UploadIcon/>
        Upload
      </DropdownMenuItem>
      <DropdownMenuItem onClick={()=> setIsDialogOpen(true)}>
      <SearchIcon className= "size-4 mr-2"/>
      paste image url
      </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    <Dialog  open ={setIsDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert image URL</DialogTitle>
        </DialogHeader>
        <Input
        placeholder="Insert image URL"
        value={imageUrl}
        onChange= {(e) => setImageUrl(e.target.value )}
        onKeyDown={(e)=>{
          if(e.key==="Enter"){
           handleImageUrlSubmit(); 
          }
        }}
        >

        </Input>
      
      <DialogFooter>
        <Button onClick={handleImageUrlSubmit}>
          Insert
        </Button>
      </DialogFooter>
    </DialogContent>
    </Dialog>
    </>
  );

};

const HilightColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#00000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex-col items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm "> 
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const heading = [
    { label: "Normal text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];
  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return "Heading ${level}";
      }
    }
    return "Normal text";
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {heading.map(({ value, label, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
            className={cn(
              "flex items-center gap-x-2 py-1 rounded-sm hover:bg-neutral-200/80",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80")
            )}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const FontFamilyButton = () => {
  const { editor } = useEditorStore();
  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: " courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
          <span className="truncate">
            {editor?.getAttributes("textstyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex-col gap-y-1">
        {fonts.map(({ label, value }) => (
          <DropdownMenuItem
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            key={value}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover: bg-neutral-200/80",
              editor?.getAttributes("textstyle").fontFamily == value &&
                "bg-neutral-200/80"
            )}
            style={{ fontFamily: value }}
          >
            <span className="text-sm">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
        "text-sm h-7 w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-300 text-black" // darker active state
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const [, setUpdateCount] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const handler = () => setUpdateCount((c) => c + 1);

    editor.on("selectionUpdate", handler);
    editor.on("transaction", handler);

    return () => {
      editor.off("selectionUpdate", handler);
      editor.off("transaction", handler);
    };
  }, [editor]);

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
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),

        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "UnderLine",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),

        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Bullet List",
        icon: List,
        isActive: editor?.isActive("bulletList"),
        onClick: () => editor?.chain().focus().toggleBulletList().run(),
      },

      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
        isActive: editor?.isActive("Remove Formatting"),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="min-h-6 bg-neutral-300" />

      <FontFamilyButton />
      <Separator orientation="vertical" className="min-h-6 bg-neutral-300" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="min-h-6 bg-neutral-300" />

      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <HilightColorButton />
      <Separator orientation="vertical" className="min-h-6 bg-neutral-300" />
      <LinkButton />
      <ImageButton />
      {/*TODO :Align*/}
      {/*TODO :Line height*/}
      {/*TODO :List*/}
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      {/*TODO: Text color*/}
      {/*TODO: Highlight color*/}
      {/*TODO: Highlight color*/}
    </div>
  );
};
