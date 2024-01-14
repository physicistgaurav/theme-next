import Image from "next/image";
import React from "react";

export default function card2() {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="" className="">
              <Image
                src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a
                href=""
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300"
              >
                Community hub
              </a>
              <p className="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                lorem ipsum dor amit isoeirspus soiduitrsas orem ipsum dor ami
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="" className="">
              <Image
                src="https://i.postimg.cc/7hBDr1vC/pexels-rodnae-productions-7005064.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a
                href=""
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300"
              >
                Awars and reputation
              </a>
              <p className="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                lorem ipsum dor amit isoeirspus soiduitrsas orem ipsum dor ami
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="" className="">
              <Image
                src="https://i.postimg.cc/wT039J5Q/third.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a
                href=""
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300"
              >
                Business firm
              </a>
              <p className="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                lorem ipsum dor amit isoeirspus soiduitrsas orem ipsum dor ami
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
