import { useParams } from 'react-router-dom';

import { CustomPagination } from '@/components/ui/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const GenderPage = () => {
  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel =
    gender === 'men' ? 'men' : gender === 'women' ? 'women' : 'kids';

  return (
    <>
      <CustomJumbotron title={`All products for ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
