"use client";

import React, { useEffect } from "react";
import { useProductsStore, useUsersStore } from "../../../zustand/store";
import Image from "next/image";
import Link from "next/link";

const ProductsScreen = () => {
  // const users = useUsersStore((state:any) => state.data);
  // const getUsers = useUsersStore((state:any) => state.getUsers);

  const products = useProductsStore((state: any) => state.data);
  const getProducts = useProductsStore((state: any) => state.getProducts);

  console.log("products", products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product: any) => (
          <Link
            key={product.id}
            href={`/[product]`}
            as={`/Products/${product.id}`}
          >
            <div className="relative  m-10 flex justify-between w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <div className="flex flex-col">
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    className="object-contain  h-full mx-auto w-2/3 flex justify-center items-center"
                    width={100}
                    height={50}
                    quality={95}
                    priority
                    objectFit="cover"
                    src={product.image}
                    alt="product image"
                  />
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  {product.category}
                </span> */}
                </a>
                <a href="#">
                  <h5 className="text-xl mt-3 mx-5 tracking-tight text-slate-900">
                    {product.title}
                  </h5>
                </a>
              </div>
              <div className="mt-4 px-5 pb-5">
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <StarRating rating={product.rating.rate} />

                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          </Link>
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
