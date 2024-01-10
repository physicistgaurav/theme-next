"use client";
import { ThemeProvider } from "@/context/theme-context";
import Image from "next/image";
import Login from "./Login/page";
import ProductsScreen from "./Products/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <ThemeProvider> */}
      {/* <Landing /> */}
      {/* </ThemeProvider> */}

      <Login />
    </main>
  );
}
