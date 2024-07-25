
'use client'
import { Inter } from "next/font/google";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>   </h1>
      <div className="flex flex-row w-fit justify-center gap-">
        <Link href="/product/cyber-search"><h1>CyberSearch</h1></Link>
        <Link href="/product/cyber-score"><h1>CyberScore</h1></Link>
      </div>
      {children}
    </div>
  );
}
//
