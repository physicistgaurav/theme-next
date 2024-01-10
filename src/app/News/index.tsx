"use client";
import { ThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";

export default function News() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="flex flex-col mt-10 mb-5">
      <h1 className="font-bold text-5xl text-blue-900">कान्तिपुर समाचार</h1>

      <div
        className={`mt-5 max-w-sm p-6 ${
          theme === "light" ? "bg-white" : "bg-red-800"
        } border border-gray-200 rounded-lg shadow`}
      >
        <a href="#">
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            कोशीको सभामुखमा राप्रपाका विष्ट सर्वसम्मत
          </h5>
        </a>
        <p
          className={`mb-3 font-normal ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          विराटनगर — कोशी प्रदेशको सभामुखमा राष्ट्रिय प्रजातन्त्र पार्टीका
          अम्बरबहादुर विष्ट सर्वसम्मत चयन भएका छन् । मंगलबार बसेको प्रदेशसभा
          बैठकमा उपसभामुख सिर्जना दनुवारले विष्ट सर्वसम्मत सभामुखमा चयन भएको
          घोषणा गरिन् ।
        </p>
        <a
          href="#"
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${
            theme === "light" ? "bg-blue-700" : "bg-yellow-600 "
          } rounded-lg`}
        >
          Read more
          <svg
            className={`rtl:rotate-180 w-3.5 h-3.5 ms-2`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
