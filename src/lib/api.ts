export const API_URL = "https://kangaroo-xuf7.vercel.app/api/videos";
export const CATEGORIES_API_URL = "https://kangaroo-xuf7.vercel.app/api/categories";
const API_KEY = process.env.HISMAR_API_KEY || "";

export async function getRealizationsData() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch realizations: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching realizations:", error);
    return [];
  }
}

export async function getCategoriesData() {
  try {
    const response = await fetch(CATEGORIES_API_URL, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch categories: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
