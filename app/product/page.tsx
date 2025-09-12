import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <section>
      <Navbar />

      <div className="pb-8 mt-28 p-4 max-w-7xl mx-auto">
        <h1 className="lg:text-3xl text-xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
          All Products
        </h1>
        <ProductList products={products.data} />
      </div>
      <section className="mt-10">
        <Footer />
      </section>
    </section>
  );
}
