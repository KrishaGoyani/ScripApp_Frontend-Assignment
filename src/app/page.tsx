import Navbar from "@/components/Navbar";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import type { ProductData } from "@/components/ProductGrid";

export default async function Home() {
  async function fetchProductData(): Promise<ProductData[]> {
    const res = await fetch("https://fakestoreapi.com/products?limit=18");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  }

  const productData = await fetchProductData();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Discover />
      <Hero productData={productData} />
      <Footer></Footer>
    </div>
  );
}
