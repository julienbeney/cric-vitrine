import TopBar from "@/components/homepage/top-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative z-10 h-dvh">
      <TopBar />
      <div className="mb-2 px-2 pt-36 h-full w-full sm:w-8/12 xl:w-7/12 mx-auto z-20">
        {children}
      </div>
    </main>
  );
}
//
