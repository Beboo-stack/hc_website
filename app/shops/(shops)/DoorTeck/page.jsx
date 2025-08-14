import React from "react";
import ShopStructure from "@/components/shop_structure";
import { shops } from "@/shops";

const Page = () => {
  console.log("Rendering DoorTeck page with shop data:", shops[33]);
  return (
    <div>
      <ShopStructure data={shops[33]} />
    </div>
  );
};

export default Page;
