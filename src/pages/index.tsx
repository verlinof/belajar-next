import AppShell from "@/components/layouts/AppShell";
import Navbar from "@/components/fragments/navbar";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Fajri</h1>
    </>
  );
}
