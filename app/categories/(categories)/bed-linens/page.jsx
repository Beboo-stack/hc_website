"use client";
import React from "react";
import CategoryStructure from "@/components/category_structure";
import { mallCategories } from "@/data";

const Page = () => {
  return (
    <div>
      <CategoryStructure category={mallCategories[21]} />
    </div>
  );
};

export default Page;
