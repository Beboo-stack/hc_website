# Contentful CMS Implementation Guide for HC Furniture Mall

## Content Models Structure

### 1. Shop Content Type
```json
{
  "name": "Shop",
  "fields": {
    "shopName": "Text",
    "slug": "Text (URL-friendly)",
    "logo": "Media (Image)",
    "floor": "Text",
    "phone": "Text",
    "instagram": "Text",
    "facebook": "Text",
    "category": "Reference to Category",
    "description": "Rich Text",
    "products": "Array of Product References",
    "gallery": "Array of Media (Images)",
    "isActive": "Boolean"
  }
}
```

### 2. Category Content Type
```json
{
  "name": "Category",
  "fields": {
    "name": "Text",
    "slug": "Text",
    "image": "Media (Image)",
    "description": "Rich Text",
    "shops": "Array of Shop References"
  }
}
```

### 3. Product Content Type
```json
{
  "name": "Product",
  "fields": {
    "name": "Text",
    "description": "Rich Text",
    "originalPrice": "Number",
    "discountedPrice": "Number",
    "discount": "Number",
    "image": "Media (Image)",
    "shop": "Reference to Shop",
    "category": "Reference to Category",
    "isHotDeal": "Boolean",
    "validUntil": "Date"
  }
}
```

## Implementation Steps

### Step 1: Install Dependencies
```bash
npm install contentful contentful-management
```

### Step 2: Environment Variables
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token
```

### Step 3: Contentful Client Setup
```javascript
// lib/contentful.js
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
```

### Step 4: Dynamic Shop Pages
```javascript
// app/shops/[slug]/page.jsx
import { client } from '@/lib/contentful';

export async function generateStaticParams() {
  const shops = await client.getEntries({
    content_type: 'shop',
    'fields.isActive': true,
  });

  return shops.items.map((shop) => ({
    slug: shop.fields.slug,
  }));
}

export default async function ShopPage({ params }) {
  const shop = await client.getEntry({
    content_type: 'shop',
    'fields.slug': params.slug,
  });

  return (
    <div>
      <h1>{shop.fields.shopName}</h1>
      {/* Shop content */}
    </div>
  );
}
```

### Step 5: Dashboard Implementation
```javascript
// app/dashboard/page.jsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

export default async function Dashboard() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div>
      <h1>HC Mall Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

## Security Implementation

### 1. Authentication with NextAuth.js
```bash
npm install next-auth
```

### 2. Dashboard Route Protection
```javascript
// middleware.js
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Additional middleware logic
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'admin',
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*']
};
```

### 3. API Route Protection
```javascript
// app/api/admin/[...path]/route.js
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const session = await getServerSession();
  
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Protected API logic
}
```

## Dashboard Features

### 1. Content Management
- Create/Edit/Delete Shops
- Manage Categories
- Upload/Manage Products
- Handle Media Assets

### 2. Analytics
- Shop Performance Metrics
- Popular Categories
- User Engagement

### 3. User Management
- Admin User Roles
- Access Control
- Activity Logs

## Deployment Considerations

### 1. VPS Requirements (Updated)
- **RAM**: 4-8 GB (for dynamic content generation)
- **Storage**: 80-100 GB SSD
- **Bandwidth**: 5-10 TB/month
- **Price**: $40-80/month

### 2. Environment Setup
- Node.js 18+
- PM2 for process management
- Nginx reverse proxy
- SSL certificates
- Regular backups

## Cost Breakdown

### Monthly Costs:
- **VPS Hosting**: $40-80
- **Contentful CMS**: $489 (Team Plan)
- **Domain & SSL**: $2-5
- **Total**: $531-574/month

### Alternative: Self-Hosted CMS
- **VPS Hosting**: $40-80
- **Strapi/Strapi**: Free (self-hosted)
- **Database**: $10-20
- **Total**: $50-100/month

## Recommendation

For a business website like yours, I recommend starting with **Contentful** because:
1. **Professional**: Industry-standard CMS
2. **Scalable**: Grows with your business
3. **Reliable**: 99.9% uptime guarantee
4. **Support**: Professional support included

Start with the Team Plan and scale up as needed!

