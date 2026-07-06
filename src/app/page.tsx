import { CatalogPage } from "@/components/CatalogPage";

export const revalidate = 0; // Ensures updates are loaded dynamically in dev / static server

export default async function Home() {
  return (
    <CatalogPage />
  );
}
