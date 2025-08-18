import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdpageProps{
  params: Promise< {documentId: string}>;
};
const DocumentIdpageProps = async ({params}: DocumentIdpageProps) =>{
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;

return(
  <div className="min-h-screen">
    <Toolbar />
    <Editor/>
  </div>
);
}

export default DocumentIdpageProps;