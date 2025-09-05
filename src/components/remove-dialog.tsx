"use client";

import{
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
import {Id} from"../../convex/_generated/dataModel";
import { Children } from "react";

interface RemoveDialogProps{
    documentId:Id<"documents">;
    children:React.ReactNode;


};
export const RemoveDialog=({documentId,Children}:RemoveDialogProps)=>{
return(
    <AlertDialog>
        <AlertDialogTrigger asChild>
            {Children}

        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e)=> e.stopPropagation()}>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
             This action cannot be undone. this will permenatley delete 
             your document.   
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel onClick={(e)=> e.stopPropagation()}>
               Cancel 
            </AlertDialogCancel>
            <AlertDialogAction>
                Delete
            </AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);
};

