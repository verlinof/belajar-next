import AppShell from "@/components/layouts/AppShell";
import Navbar from "@/components/layouts/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <AppShell>
        <h1 className="text-3xl font-bold">Fajri</h1>
      </AppShell>
    </>
  );
}
