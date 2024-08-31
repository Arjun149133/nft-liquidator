"use client";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useWallet } from "@solana/wallet-adapter-react";

export default function SwapCard() {
  const wallet = useWallet();
  return (
    <div className=" flex justify-center items-center h-[500px]">
      <Card className=" w-[600px] h-[400px] bg-gray-900 border-gray-900 text-white">
        <CardTitle className=" flex justify-center">Swap</CardTitle>
        <CardContent className=" flex justify-center bg-black mt-10 rounded-lg">
          <div className=" w-[500px] bg-black p-2 rounded-lg space-y-2 mt-2">
            <div>
              <h1 className=" font-semibold">Your Selling</h1>
            </div>
            <div className=" flex justify-between">
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-800 font-semibold">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className=" bg-gray-800 font-semibold text-white">
                    <SelectItem value="light">select</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" flex justify-center items-center text-gray-700 font-bold text-2xl">
                0.00
              </div>
            </div>
          </div>
        </CardContent>
        {/* todo: add a line break here with swap button */}
        <br />
        <CardContent className=" flex justify-center bg-black mt-10 rounded-lg">
          <div className=" w-[500px] bg-black p-2 rounded-lg space-y-2 mt-2">
            <div>
              <h1 className=" font-semibold">Your Buying</h1>
            </div>
            <div className=" flex justify-between">
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-800 font-semibold">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className=" bg-gray-800 font-semibold text-white">
                    <SelectItem value="light">select</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" flex justify-center items-center text-gray-700 font-bold text-2xl">
                0.00
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent className=" flex justify-center items-center mt-7">
          <div>
            {wallet.publicKey?.toString() ? (
              <WalletDisconnectButton />
            ) : (
              <WalletMultiButton />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
