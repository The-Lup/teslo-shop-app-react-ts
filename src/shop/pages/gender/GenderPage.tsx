import { useParams } from 'react-router-dom';

import { CustomPagination } from '@/components/ui/custom/CustomPagination';
import { products } from '@/mocks/productslist.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

export const GenderPage = () => {
  const { gender } = useParams();

  const genderLabel =
    gender === 'men' ? 'men' : gender === 'women' ? 'women' : 'kids';

  return (
    <>
      <CustomJumbotron title={`All products for ${genderLabel}`} />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={8} />
    </>
  );
};
