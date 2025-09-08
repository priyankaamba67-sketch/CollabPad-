"use client";

// app/page.tsx
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { usePaginatedQuery } from "convex/react";
import { DocumentsTabel } from "./documents-table";

import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { title } from "process";
import { create } from "domain";
import { useSearchParam } from "@/hooks/use-search-param";
import { Search } from "lucide-react";

const Home = () => {
  const {
    results,
    status,
    loadMore
  
} = usePaginatedQuery(api.documents.get,{},{initialNumItems:5});
  const [isCreating,setCreating] = useState(false);


  return (
    <div className="min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTabel
        documents={results}
        loadMore={loadMore}
        status={status}
        
      />
      </div>
    </div>
  );
}

export default Home;
