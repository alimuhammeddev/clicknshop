import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function CTA() {
  return (
    <div className="bg-[#F8F8F8] max-w-7xl mx-auto mt-5">
      <div className="flex lg:flex-row flex-col items-center justify-between p-4 gap-8">
        <div>
          <h1 className="text-[#134272] lg:text-2xl text-lg font-bold">ClickNShop</h1>
          <p className="text-gray-700 mt-2">
            Discover the easiest way to shop online. At ClickNShop, we bring you
            the latest fashion, shoes, and accessories all at unbeatable prices.
            Enjoy a seamless shopping experience with fast delivery and
            top-notch customer support. Your style, just a click away.
          </p>
          <Button className="bg-[#134272] text-white mt-4 px-6 py-3 rounded-md">
            <Link href="/product">Get Started</Link>
          </Button>
        </div>
        <Image src="/cta.jpg" alt="cta-image" width={400} height={400} />
      </div>
    </div>
  );
}
