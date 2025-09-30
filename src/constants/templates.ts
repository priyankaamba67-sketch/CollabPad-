export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    

    <h1>Software Development</h1>
    <h2>project overview</h2>
    <p> Brief description of the proposed software development project.</p>

    <h2>scope of work</h2>
    <p> detailed breakdown of project deliverables and requirements.</p>

    <h2>Timeline</h2>
    <p>Project Milestone and delivery schedule.</p>

    <h2>Budget</h2>
    <p>Cost breakdown and payment terms.</p>
`,
  },
  {
    id: "project-proposal",
    label: "project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project summary</h1>
    <h2> Executive Summary</h2>

    <p> Brief overview of the project proposal.</p>

    <h2>project Goals</h2>
    <p> Key objectives and expected outcomes.</p>

    <h2>Implimentation plan</h2>
    <p> Stratergy and methodology for project execution.</p>

    <h2> Resources Required</h2>
    <p> Team, equipment, and requirement.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Business Letter</h1>
    <p>This is a business letter templates.</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1> [Your Name]</h1>
    <p> [Content Information]</p>
    
    <h2> Proffesional Summary</h2>
    <p> Brief overview of your proffesional background and key stenghs. </p>
    
    <h2> Work Expirence</h2>
    <p> [company Name]-[Position]<br>
    [Date Range]</p>

    <h2> Education</h2>
    <p>[Degree]-[Instituion]<br>
    [Greadutaion Year]</p>

    <h2>Skills</h2>
    <p>List of relevent skilss and competencies. </p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <p>[Your Name]
    [Your Name]<br>
    [City,Adress]<br>
    [City,state ZIP]</p>
    
    <p>[Date]</p>
    
    <p>[Recipient's Name]<br>
    [Company Name]<br>
    [Company Adress]</p>
    
    <p> Dear [Recipient's Name]<br>
    [Company Name]<br>
     [Company Adress]</p>
     
     <p> Dear [Reciepent's Name],</p>
     
     <p> I am writing to express my interst in [position] at [company name]. </p>
     
     <p>Sinceriely,<br>
     [your Name]</p>
     `,
  },
  {
    id: "letter",
    label: "letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <p>Subject:[Email Subject]</p>
    
    <p> Dear [Recipients],</p>
    
    <p> I hope this email finds you will.</p>
    
    <p> [Email Body]</p>
    
    <p>Best regards <br>
    [Your Name]</p>
    `,
  },
];
