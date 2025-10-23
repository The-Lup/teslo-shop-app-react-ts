import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom/CustomPagination';
import { AdminTitle } from '@/admin/components/AdminTitle';
import { useProducts } from '@/shop/hooks/useProducts';
import { CustomFullSCLoading } from '@/components/ui/custom/CustomFullSCLoading';
import { currencyFormmatter } from '@/lib/currency-formatter';

export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) {
    return <CustomFullSCLoading />;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Products"
          subtitle="Here you can view and manage your products."
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              New product
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.products.map((product) => (
            <TableRow>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="hover:text-blue-500 underline"
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormmatter(product.price)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join(', ')}</TableCell>
              <TableCell className="flex items-center justify-end h-full">
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className="w-4 h-4 text-blue-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
