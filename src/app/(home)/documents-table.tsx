import { PaginationStatus } from "convex/react";
import { LoaderIcon } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";



import{Doc} from"../../../convex/_generated/dataModel";


interface DocumentsTableProps{
    documents: Doc<"documents">[]| undefined;
    loadMore:(numItems:number) =>void;
    status:PaginationStatus;
};


export const DocumentsTabel=({
    documents,
    loadMore,
    status,
}: DocumentsTableProps)=>{
    return(
        <div className="max-w-screen-xl max-auto px-16 py-6 flex flex-col gap-5">
            {documents=== undefined?(
                <div className="flex  justify-center items-center h-24">
              <LoaderIcon className="animate-spin text-muted-foreground size-5"/>
                </div>
            ):(
<Table>
    <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
            <TableHead>Name</TableHead>
            <TableHead>&nbps;</TableHead>
            <TableHead>Shared</TableHead>
            <TableHead>Created at</TableHead>
        </TableRow>
    </TableHeader>
</Table>
            )}        
        </div>
    );
};