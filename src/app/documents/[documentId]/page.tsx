import { Room } from "./room";
import { Editor } from "./editor";
import { Navbar } from "./navbar";

import { Toolbar } from "./toolbar";

interface DocumentIdpageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdpageProps = async ({ params }: DocumentIdpageProps) => {
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;
  console.log("Document ID:", documentId);

  return (
    <Room>
      <div className="min-h-screen bg-[#e6e9ee]">
        <div className="px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#f8f5f8dd] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentIdpageProps;
