import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // choose the weights you need
});


export const metadata: Metadata = {
  title: "ClickNShop",
  description: "ClickNShop E-commerce Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex min-h-full flex-col bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}