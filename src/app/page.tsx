import { CatalogPage } from "@/components/CatalogPage";
import { getRealizationsData, getCategoriesData } from "@/lib/api";

export const revalidate = 60;

export default async function Home() {
  const [realizations, categories] = await Promise.all([
    getRealizationsData(),
    getCategoriesData(),
  ]);

  return (
    <CatalogPage initialProjects={realizations} initialCategories={categories} />
  );
}
