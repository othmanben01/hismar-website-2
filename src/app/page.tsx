import fs from "fs";
import path from "path";
import { Providers } from "@/components/Providers";
import { CatalogPage } from "@/components/CatalogPage";

// Force static regeneration or dynamic rendering based on changes
export const revalidate = 0; // Ensures updates are loaded dynamically in dev / static server

function getInitialSlots(): Record<string, any> {
  const configFile = path.join(process.cwd(), "slots-config.json");
  try {
    if (fs.existsSync(configFile)) {
      const data = fs.readFileSync(configFile, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading slots-config.json in page.tsx:", err);
  }
  return {};
}

export default async function Home() {
  const initialSlots = getInitialSlots();

  return (
    <Providers initialSlots={initialSlots}>
      <CatalogPage />
    </Providers>
  );
}
