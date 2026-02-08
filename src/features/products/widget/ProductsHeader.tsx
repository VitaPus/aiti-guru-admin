import React from "react";
import ProductsHeaderView from "@/features/products/ui/header";
import { useProductsTableStore } from "@/features/products/model/productsTable.store";

const ProductsHeader: React.FC = () => {
  const value = useProductsTableStore((s) => s.searchQuery);
  const onSearchChange = useProductsTableStore((s) => s.setSearchQuery);

  return <ProductsHeaderView value={value} onSearchChange={onSearchChange} />;
};

export default ProductsHeader;
