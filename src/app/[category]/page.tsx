import ProductClient from "@/components/ProductClient";
import { products, ProductKey } from "@/data/products";

// Generate static paths for Next.js dynamic routing
export function generateStaticParams() {
  return (Object.keys(products) as ProductKey[]).map((category) => ({ category }));
}

// Render the product page based on the category parameter
export default async function ProductPage({ params }: { params: Promise<{ category: ProductKey }> }) {
  const { category } = await params;
  const product = products[category];
  if (!product) return <p className="text-center mt-20 text-white">Product not found</p>;

  return <ProductClient product={product} />;
}
