"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Navbar() {
  const pathname = usePathname();
  const wallet = useWallet();
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
        {wallet.publicKey?.toString() ? (
          <WalletDisconnectButton />
        ) : (
          <WalletMultiButton />
        )}
      </div>
    </nav>
  );
}
