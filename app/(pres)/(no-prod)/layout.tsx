export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col align-middle justify-center items-center text-center">
      {children}
    </div>
  );
}
//
