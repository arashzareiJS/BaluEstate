import React from "react";

import Link from "next/link";
import { categories } from "@/constants/categories";
import { HiFilter } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow-lg">
      <p className="font-semibold my-3 flex justify-center items-center">
        <HiFilter color="blue" />
        دسته بندی
      </p>
      <ul className="flex justify-center gap-9 sm:block">
      <Link href="/advertisements" className="mt-4">
        همه
      </Link>
        {Object.keys(categories).map((i) => (
          <li className="mt-4" key={i}>
            <Link
              href={{
                pathname: "/advertisements",
                query: { category: i },
              }}
            >
              {categories[i]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
