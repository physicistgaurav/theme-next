import Image from "next/image";
import React from "react";

export default function ImageCard() {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
            <a href="#" className="">
              <Image
                src="https://i.postimg.cc/904JVBhh/pexels-andrea-piacquadio-840996.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://i.postimg.cc/Qdhgyp8g/second.jpg"
                    alt=""
                    className="object-cover object-right w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                      David beckham
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Node developer
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full dark:bg-blue-700 dark:hover:bg-blue-600 hover:bg-blue-600 hover:text-gray-100"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
            <a href="#" className="">
              <Image
                src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                    alt=""
                    className="object-cover object-right w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                      David beckham
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Node developer
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:text-gray-100"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
            <a href="#" className="">
              <Image
                src="https://i.postimg.cc/pdZ0BTZg/pexels-cowomen-2041627.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <Image
                    src="https://i.postimg.cc/pdZ0BTZg/pexels-cowomen-2041627.jpg"
                    alt=""
                    className="object-cover object-right w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                      David beckham
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Node developer
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:text-gray-100"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
