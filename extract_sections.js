const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, 'src/components/CatalogPage.tsx'), 'utf-8');

const regex = /{\/\* ════ PAGE [A-Z0-9-]* — (.*?) ════ \*\/}\s*<PageSection([\s\S]*?)<\/PageSection>/g;
let match;
let count = 0;

const sectionMap = {
  "ATELIERS & TECHNOLOGIE": "AteliersSection",
  "MATIÈRES PREMIÈRES": "MatieresSection",
  "RÉALISATIONS": "RealisationsSection",
  "PORTES D'ENTRÉE (1/2)": "PortesEntree1Section",
  "PORTES D'ENTRÉE (2/2)": "PortesEntree2Section",
  "PORTES INTÉRIEURES (1/2)": "PortesInterieures1Section",
  "PORTES INTÉRIEURES (2/2)": "PortesInterieures2Section",
  "PLACARDS & DRESSINGS (1/2)": "Placards1Section",
  "PLACARDS & DRESSINGS (2/2)": "Placards2Section",
  "CUISINES SUR MESURE (1/2)": "Cuisines1Section",
  "CUISINES SUR MESURE (2/2)": "Cuisines2Section",
  "PROCESSUS": "ProcessusSection",
  "CERTIFICATIONS & ENGAGEMENTS": "CertificationsSection",
  "CONTACT": "ContactSection",
};

const imports = `import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

`;

while ((match = regex.exec(file)) !== null) {
  const title = match[1].trim();
  if (sectionMap[title]) {
    const componentName = sectionMap[title];
    let content = match[0].replace(/{\/\* ════.*════ \*\/}\s*/, '');
    
    if (componentName === 'ProcessusSection') {
      const timelineMatch = file.match(/const TIMELINE_STEPS: TimelineStep\[\] = \[[\s\S]*?\];/);
      if (timelineMatch && !content.includes('TIMELINE_STEPS')) {
        content = timelineMatch[0] + "\n\n" + content;
      }
    }
    
    const fileContent = `${imports}export const ${componentName}: React.FC = () => {\n  return (\n    ${content}\n  );\n};\n`;
    fs.writeFileSync(path.join(__dirname, 'src/components/Sections', `${componentName}.tsx`), fileContent);
    console.log(`Extracted ${componentName}`);
    count++;
  }
}

let indexExports = `export { CoverSection } from './CoverSection';\nexport { PourquoiSection } from './PourquoiSection';\n`;
Object.values(sectionMap).forEach(name => {
  indexExports += `export { ${name} } from './${name}';\n`;
});
fs.writeFileSync(path.join(__dirname, 'src/components/Sections/index.ts'), indexExports);

console.log('Done!');
