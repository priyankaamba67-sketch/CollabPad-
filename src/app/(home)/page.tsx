"use client";

// app/page.tsx
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { usePaginatedQuery } from "convex/react";

import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { title } from "process";
import { create } from "domain";

const Home = () => {
  const documents = usePaginatedQuery(api.documents.get,{},{initialNumItems:5});
  const [isCreating,setCreating] = useState(false);

  const OnTemplateClick =(title:string,initialContent:string)=> {
    setIsCreating(true);
    create({title,initialContent})
    .then((documentId)=>{
      router.push(`/documents/${documentId}`);

    })
    .finally(()=>{
      setIsCreating(false);

    });

  };
  if (documents===undefined) {
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className="min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document)=>(
          <span key={document._id}>{document.title}</span>


        
       ) )}
      </div>
    </div>
  );
};

export default Home;
