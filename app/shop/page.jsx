'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { shops } from '@/shops';
import ShopStructure from '@/components/shop_structure';

function Page() {
  const searchParams = useSearchParams();
  const queryShopName = searchParams.get('name');

  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const foundShop = shops.find(shop => shop.name === queryShopName);

    if (foundShop) {
      setData(foundShop);
      console.log(foundShop);

      console.log(queryShopName);

    } else {
      setData("Nothing found")
      setError(true)
    }
  }, []);

  return (
    <>
      {error ? (
        <div className='flex items-center justify-center h-screen text-3xl font-bold'>
          <p>Shop not found</p>
        </div>
      ) : (
        <ShopStructure data={data} />
      )}
    </>
  );
}

export default Page;