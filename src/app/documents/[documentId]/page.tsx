interface DocumentIdpageProps{
  params: Promise< {documentId: string}>;
};
const DocumentIdpageProps = async ({params}: DocumentIdpageProps) =>{
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;

return(
  <div>
  Document ID:{documentId}
  </div>
);
}

export default DocumentIdpageProps;