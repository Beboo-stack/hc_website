// Test script to verify Contentful configuration
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('contentful');
const { createClient: createManagementClient } = require('contentful-management');

async function testContentfulConnection() {
  console.log('Testing Contentful configuration...\n');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('NEXT_PUBLIC_CONTENTFUL_SPACE_ID:', process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ? '✓ Set' : '✗ Missing');
  console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID ? '✓ Set' : '✗ Missing');
  console.log('NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:', process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ? '✓ Set' : '✗ Missing');
  console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? '✓ Set' : '✗ Missing');
  console.log('CONTENTFUL_MANAGEMENT_TOKEN:', process.env.CONTENTFUL_MANAGEMENT_TOKEN ? '✓ Set' : '✗ Missing');
  console.log('');

  // Create clients directly for testing
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Test delivery client
  try {
    console.log('Testing Delivery API...');
    const response = await client.getEntries({ limit: 1 });
    console.log('✓ Delivery API connection successful');
    console.log(`Found ${response.total} entries in space`);
    
    // Check available content types
    console.log('\nChecking available content types...');
    const allEntries = await client.getEntries({ limit: 100 });
    const contentTypes = [...new Set(allEntries.items.map(item => item.sys.contentType.sys.id))];
    console.log('Available content types:', contentTypes);
    
    // Try whatsNew specifically
    console.log('\nTesting whatsNew content type...');
    const whatsNewResponse = await client.getEntries({ content_type: 'whatsNew' });
    console.log('WhatsNew entries found:', whatsNewResponse.total);
    if (whatsNewResponse.items.length > 0) {
      console.log('First whatsNew item:', JSON.stringify(whatsNewResponse.items[0], null, 2));
    }
  } catch (error) {
    console.log('✗ Delivery API connection failed:');
    console.log('Error:', error.message);
    if (error.message.includes('401')) {
      console.log('This usually means your access token is invalid or missing');
    }
  }

  // Test management client
  if (process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    try {
      console.log('\nTesting Management API...');
      const managementClient = createManagementClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
      });
      const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
      console.log('✓ Management API connection successful');
      console.log(`Connected to space: ${space.name}`);
    } catch (error) {
      console.log('✗ Management API connection failed:');
      console.log('Error:', error.message);
      if (error.message.includes('401')) {
        console.log('This usually means your management token is invalid');
      }
    }
  } else {
    console.log('\nSkipping Management API test (no management token provided)');
  }
}

testContentfulConnection().catch(console.error);
