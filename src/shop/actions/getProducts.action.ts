import { tesloApi } from '@/api/tesloApi';
import type { ProductsResponse } from '@/interfaces/products.response';

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes } = options;

  const { data } = await tesloApi.get<ProductsResponse>('/products', {
    params: {
      limit,
      offset,
      gender,
      sizes,
    },
  });

  const productsWithImgUrls = data.products.map((product) => ({
    ...product,
    images: product.images.map(
      (Image) => `${import.meta.env.VITE_API_URL}/files/product/${Image}`
    ),
  }));

  return {
    ...data,
    products: productsWithImgUrls,
  };
};
