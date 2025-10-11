import { CustomPagination } from '@/components/ui/custom/CustomPagination';
import { products } from '@/mocks/productslist.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="All Products" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={8} />
    </>
  );
};
