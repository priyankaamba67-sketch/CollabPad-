"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,

} from "@/components/ui/alert-dialog";

import { Input } from "./ui/input";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle:string;
  children: React.ReactNode;
}
export const RenameDialog = ({ documentId,initialTitle, children }: RenameDialogProps) => {
const update= useMutation(api.documents.updateById);
const [isUpdating,setIsUpdating]=useState(false);

const [title,setTitle]=useState(initialTitle);
const[open,setOpen]=useState(false);

const onSubmit =(e:React.FormEvent<HTMLFormElement> )=>{
e.preventDefault();
setIsUpdating(true);

update({id:documentId,title:title.trim()||"untitled"})
}

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
          {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form>
          <AlertDialogHeader>
            <AlertDialogTitle>Rename document</AlertDialogTitle>
            <AlertDialogDescription>
             Enter a new name for this document
            </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="my-4">
           <Input/>
            </div>
            <AlertDialogFooter>
              <Button>
                Cancel
              </Button>
              <Button>
                Save
              </Button>
            </AlertDialogFooter>
          </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
