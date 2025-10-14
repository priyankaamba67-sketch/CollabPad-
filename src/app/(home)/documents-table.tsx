import { PaginationStatus } from "convex/react";
import { LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DocumentRow } from "./document-row";
import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentsTableProps {
  documents: Doc<"documents">[] | undefined;
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
}

export const DocumentsTabel = ({
  documents,
  loadMore,
  status,
}: DocumentsTableProps) => {
  return (
    <div className="max-w-screen-xl max-auto px-16 py-6 flex flex-col gap-5">
      {documents === undefined ? (
        <div className="flex  justify-center items-center h-24">
          <LoaderIcon className="animate-spin text-muted-foreground size-5" />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead>Name</TableHead>
              <TableHead className="md: table-cell">Shared</TableHead>
              <TableHead className="md: table-cell">
                Created at{" "}
              </TableHead>
            </TableRow>
          </TableHeader>
          {documents.length === 0 ? (
            <TableBody>
              <TableRow className="hover: bg-transparent">
                <TableCell
                  colSpan={4}
                  className="h-24 text-center text-muted-foreground"
                >
                  No documents found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map((document) => (
                <DocumentRow key={document._id} document={document} />
              ))}
            </TableBody>
          )}
        </Table>
      )}
      <div className="flex items-center justify-center"></div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => loadMore(5)}
        disabled={status !== "CanLoadMore"}
      >
        {status === "CanLoadMore" ? "Load more" : "end of results"}
      </Button>
    </div>
  );
};
