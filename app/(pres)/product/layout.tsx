import FooterSimple from "@/components/homepage/footer-simple";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col align-middle justify-between items-center text-center">
          {children}
        </div>
        <FooterSimple />
      </div>
    </>
  );
}
