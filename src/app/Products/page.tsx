"use client";

import React, { useEffect, useState } from "react";
import {
  useCartStore,
  // useCartStore,
  useProductsStore,
  useUsersStore,
} from "../../../zustand/store";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

const ProductsScreen = () => {
  // const users = useUsersStore((state:any) => state.data);
  // const getUsers = useUsersStore((state:any) => state.getUsers);

  const { theme, setTheme } = useTheme();

  const products = useProductsStore((state: any) => state.data);
  const getProducts = useProductsStore((state: any) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const { add } = useCartStore();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      {/* <button
        onClick={toggleTheme}
        type="button"
        className={`mt-5 ml-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } 
      rounded-full px-4 py-2 shadow hover:shadow-md transition duration-150 ease-in-out`}
      >
        {theme === "light" ? "☀️ Light" : "☪ Dark"}
      </button> */}

      <ul className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products?.map((product: any) => (
          <div
            key={product.id}
            // href={`/[product]`}
            // as={`/Products/${product.id}`}
          >
            <div className="w-72 bg-white border p-2 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <Link
                  key={product.id}
                  href={`/[product]`}
                  as={`/Products/${product.id}`}
                >
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    quality={95}
                    priority={true}
                    alt="Product"
                    className="h-48 w-48 mx-auto object-contain rounded-t-xl"
                  />
                </Link>
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.category}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        ${(product.price + 50).toFixed(2)}
                      </p>
                    </del>

                    <div
                      className="ml-auto"
                      onClick={() => {
                        console.log(product);
                        add(product);
                        alert("added");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus dark:text-black"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductsScreen;

const StarRating = ({ rating }: any) => {
  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: roundedRating });

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};
