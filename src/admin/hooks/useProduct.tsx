import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id.action';

import { createUpdateProductAction } from '../actions/create-update-product.action';
import type { Product } from '@/interfaces/product.interface';

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['product', { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, //5 mins
  });

  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      //invalidate cache
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({
        queryKey: ['product', { id: product.id }],
      });

      //update querydata
      queryClient.setQueryData(['products', { id: product.id }], product);
    },
  });

  return {
    ...query,
    mutation,
  };
};
