import { useQuery } from '@tanstack/react-query';
import { getProductsAction } from '../actions/getProducts.action';
import { useParams, useSearchParams } from 'react-router-dom';

export const useProducts = () => {
  const { gender } = useParams();
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 9;
  const page = searchParams.get('page') || 1;
  const sizes = searchParams.get('sizes') || undefined;

  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: ['products', { offset, limit, gender, sizes }],
    queryFn: () =>
      getProductsAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
      }),

    staleTime: 1000 * 60 * 5, // 5mins
  });
};
