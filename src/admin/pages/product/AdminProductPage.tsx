import { Navigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullSCLoading } from '@/components/ui/custom/CustomFullSCLoading';

import { ProductForm } from './ui/ProductForm';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
}

export const AdminProductPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data: product } = useProduct(id || '');

  const title = id === 'new' ? 'New Product' : 'Edit Product';
  const subTitle =
    id === 'new'
      ? 'Here you can create a new product.'
      : 'Here you can edit the product.';

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullSCLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return <ProductForm title={title} subTitle={subTitle} product={product} />;
};
