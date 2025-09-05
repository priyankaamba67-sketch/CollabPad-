import { ExternalLinkIcon, MoreVertical, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button";
import { RemoveDialog } from "@/components/remove-dialog";

import{
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,  
} from "@/components/ui/dropdown-menu";

interface DocumentMenuProps{
    documentId:Id<"documents">;
    title:string;
    onNewTab:(id:Id<"document">)=> void;

};
export const DocumentMenu=({documentId,title,onNewTab}:DocumentMenuProps)=>{
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="size-4"/>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <RemoveDialog documentId={documentId}>
                <DropdownMenuItem
                onSelect={(e)=> e.stopPropagation()}
                onClick={(e)=> e.stopPropagation()}
                >
                    <TrashIcon className="size-4 mr-2"/>
                    Remove
                </DropdownMenuItem>

            </RemoveDialog>
            <DropdownMenuItem
            onClick={()=> onNewTab(documentId)}
            >
                <ExternalLinkIcon className="size-4 mr-2"/>
                open in a new tab
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}