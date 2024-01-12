"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CheckOut() {
  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Shopify-Nepal
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid mb-4 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <Image
                width={100}
                height={100}
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">$138.99</p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <Image
                width={100}
                height={100}
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="mt-auto text-lg font-bold">$238.99</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked={isChecked}
                onChange={handleInputChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                // for="radio_1"
              >
                <Image
                  width={100}
                  height={100}
                  priority
                  className="object-contain "
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">
                    Namaste Cargo Nepal
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked={isChecked}
                onChange={handleInputChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                // for="radio_2"
              >
                <Image
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                  src="https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/12/blogblog.png?fit=1080%2C1080&ssl=1"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Nepal Can Move</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              // for="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              // for="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              // for="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              // for="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <Image
                    width={100}
                    height={100}
                    className="h-4 w-4 object-contain"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <select
                // type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
