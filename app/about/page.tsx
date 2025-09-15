import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 mt-10">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="lg:text-xl text-lg font-bold text-gray-800 mb-2">
            About <span className="text-[#1c4880]">ClickNShop</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop online store for fashion, shoes, and lifestyle
            essentials. At <span className="text-[#1c4880]">ClickNShop</span>, we believe shopping should be simple,
            fun, and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div>
            <h2 className="lg:text-xl text-lg font-medium text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make online shopping effortless for everyone. We
              carefully select high-quality products that blend style, comfort,
              and affordability, so you can look your best without breaking the
              bank.
            </p>
          </div>

          <div>
            <h2 className="lg:text-xl text-lg font-medium text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be Africa’s most trusted and customer-focused online shopping
              destination — delivering happiness, style, and convenience to
              every doorstep we reach.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="lg:text-xl text-lg font-medium text-gray-800 text-center mb-4">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-5 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg text-[#1c4880]">Quality</h3>
              <p className="text-gray-600">
                We prioritize top-notch quality in every product we deliver.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg text-[#1c4880]">Affordability</h3>
              <p className="text-gray-600">
                Great style doesn’t have to cost a fortune. We keep prices fair.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg text-[#1c4880]">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our success. We’re here to serve you
                better.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="lg:text-xl text-lg font-medium text-gray-800">
            Ready to Shop with Us?
          </h2>
          <p className="text-gray-600 mb-3">
            Explore our latest collections and enjoy a seamless shopping
            experience.
          </p>
          <Link
            href="/product"
            className="inline-block px-5 py-2 bg-[#1c4880] text-white rounded-md"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      <section className="mt-10">
        <Footer />
      </section>
    </section>
  );
}
