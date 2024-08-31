"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "./ui/tabs";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className=" flex justify-between p-4 bg-black text-white">
      <div className=" flex justify-center items-center">
        <h1 className=" text-lg font-bold">NFT SWAPPER</h1>
      </div>
      <div className=" flex justify-center items-center">
        <div className=" w-[150px] flex justify-between bg-gray-800 p-2 rounded-md">
          <div
            className={`${
              pathname === "/"
                ? "bg-white text-black rounded-md px-2"
                : " bg-gray-700 px-2 rounded-md"
            }`}
          >
            <Link href="/">Swap</Link>
          </div>
          <div
            className={`${
              pathname === "/nft"
                ? "bg-white text-black rounded-md px-2"
                : " bg-gray-700 px-2 rounded-md"
            }`}
          >
            <Link href="/nft">NFT</Link>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant={"secondary"}
          className=" bg-gradient-to-r from-green-500 to-green-400"
        >
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
}
