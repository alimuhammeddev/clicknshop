import { Carousel } from "@/components/carousel";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <section>
      <Navbar />

      <div className="flex-grow container mx-auto px-4 py-8 mt-24 max-w-7xl">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="lg:text-2xl text-xl font-bold tracking-tight md:text-4xl">
              Welcome to <span className="text-[#134272]">ClickNShop</span>
            </h2>
            <p className="text-neutral-600">
              Explore a wide variety of clothing, shoes, and accessories
              tailored to fit every style and budget. At ClickNShop, we make
              online shopping simple, secure and enjoyable, bringing you
              quality products, unbeatable deals, and fast delivery right to
              your doorstep.
            </p>

            <Button
              variant="default"
              className="inline-flex items-center justify-center rounded-md px-6 py-5 bg-[#134272] text-white"
            >
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded"
            src="/hero.jpg"
          />
        </div>
      </div>

      <section className="py-8">
        <Carousel products={products.data}/>
      </section>
      
      <section>
        <CTA />
      </section>

      <section className="mt-10">
        <Footer />
      </section>
    </section>
  );
}
