import { createClient } from 'contentful';

// Contentful client for reading content
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Contentful management client for admin operations
export const managementClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

// Helper function to get all shops
export async function getAllShops() {
  try {
    const response = await client.getEntries({
      content_type: 'shop',
      'fields.isActive': true,
      order: 'fields.shopName',
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching shops:', error);
    return [];
  }
}

// Helper function to get all categories
export async function getAllCategories() {
  try {
    const response = await client.getEntries({
      content_type: 'category',
      order: 'fields.name',
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Helper function to get shops by category
export async function getShopsByCategory(categorySlug) {
  try {
    const response = await client.getEntries({
      content_type: 'shop',
      'fields.category.fields.slug': categorySlug,
      'fields.isActive': true,
      include: 2,
      limit: 1000,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching shops by category:', error);
    return [];
  }
}

// Helper function to get hot deals
export async function getHotDeals() {
  try {
    const response = await client.getEntries({
      content_type: 'product',
      'fields.isHotDeal': true,
      include: 2,
      limit: 20,
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching hot deals:', error);
    return [];
  }
}

