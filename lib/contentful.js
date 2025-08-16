import { createClient } from "contentful";
import { createClient as createManagementClient } from "contentful-management";

// Contentful client for reading content
export const client = createClient({
  space:
    process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Contentful management client for admin operations
let managementClient = null;

export const getManagementClient = async () => {
  if (!managementClient) {
    const client = createManagementClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });
    managementClient = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  }
  return managementClient;
};

// Helper function to get all shops
export async function getAllShops() {
  try {
    const response = await client.getEntries({
      content_type: "shop",
      "fields.isActive": true,
      order: "fields.shopName",
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching shops:", error);
    return [];
  }
}

// Helper function to get all categories
export async function getAllCategories() {
  try {
    const response = await client.getEntries({
      content_type: "category",
      order: "fields.name",
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Helper function to get shops by category
export async function getShopsByCategory(categorySlug) {
  try {
    const response = await client.getEntries({
      content_type: "shop",
      "fields.category.fields.slug": categorySlug,
      "fields.isActive": true,
      include: 2,
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching shops by category:", error);
    return [];
  }
}

// Helper function to get hot deals
export async function getHotDeals() {
  try {
    const response = await client.getEntries({
      content_type: "hotDeals",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching hot deals:", error);
    return [];
  }
}

// Helper function to get whats new
export const whatsNew = async () => {
  try {
    const response = await client.getEntries({
      content_type: "whatsNew",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching whats new:", error);
    return [];
  }
};

// Helper function to get home page banner
export const homePageBanner = async () => {
  try {
    const response = await client.getEntries({
      content_type: "homePageBanner",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching home page banner:", error);
    return [];
  }
};

// Helper function to get logos carousels
export const logosCarousels = async () => {
  try {
    const response = await client.getEntries({
      content_type: "logosCarousels",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching logos carousels:", error);
    return [];
  }
};
