import { Grid } from '@mui/material';
import { ProductCard, ProductCardProps } from '../productCard/ProductCard';

interface ProductGalleryProps {
  products: ProductCardProps[];
}

export const ProductGallery = ({ products }: ProductGalleryProps) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};