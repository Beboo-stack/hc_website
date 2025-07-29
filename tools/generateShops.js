// tools/generateShops.js
const fs = require('fs');
const path = require('path');
const shops = require('./shops.json'); // Export your shops array into a .json file

const basePath = path.join(__dirname, '../app/shop/(shops)');

const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

shops.forEach((shop, index) => {
  const folder = path.join(basePath, slugify(shop.name));
  const filePath = path.join(folder, 'page.jsx');

  fs.mkdirSync(folder, { recursive: true });

  const content = `import { shops } from '@/data';
import ShopStructure from '@/components/ShopStructure';

export default function Page() {
  return <ShopStructure data={shops[${index}]} />;
}
`;

  fs.writeFileSync(filePath, content, 'utf8');
});
