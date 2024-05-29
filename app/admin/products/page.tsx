import { getProducts } from "@/app/actions/productActions";
import { Grid } from "@mui/material";
import ProductRow from "../ProductRow";
import AddProductCard from "../addProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AddProductCard />
      <Grid container spacing={4} sx={{ marginTop: "0px" }}>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
}