import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, } from "next/font/google";

const montserrat = Montserrat({
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
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-full flex-col bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}