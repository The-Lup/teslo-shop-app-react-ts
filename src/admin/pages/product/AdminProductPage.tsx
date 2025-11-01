import { Navigate, useNavigate, useParams } from 'react-router';

import { toast } from 'sonner';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullSCLoading } from '@/components/ui/custom/CustomFullSCLoading';

import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';

export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: product, mutation } = useProduct(id || '');

  const title = id === 'new' ? 'New Product' : 'Edit Product';
  const subTitle =
    id === 'new'
      ? 'Here you can create a new product.'
      : 'Here you can edit the product.';

  const handleSubmit = async (
    productLike: Partial<Product> & { files?: File[] }
  ) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success('Product updated successfully.', {
          position: 'top-right',
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: (error) => {
        console.log(error);
        toast.error('Error updating product.');
      },
    });
  };

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullSCLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={title}
      subTitle={subTitle}
      product={product}
      onSubmit={handleSubmit}
      isPending={mutation.isPending}
    />
  );
};
