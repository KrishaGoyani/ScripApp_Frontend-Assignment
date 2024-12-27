import ProductCard from "./ProductCard";

export interface ProductData {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductGrid = ({
  isSidebarOpen,
  productData,
}: {
  isSidebarOpen: boolean;
  productData: ProductData[];
}) => {
  return (
    <div className={`product-grid ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
