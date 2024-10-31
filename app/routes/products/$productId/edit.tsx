import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import {
  CreateProductInput,
  getProductById,
  updateProductEntry,
} from "../../../api/product";
import ProductForm from "../../../components/ProductForm";

export const Route = createFileRoute("/products/$productId/edit")({
  component: () => {
    const navigate = useNavigate();
    const product = Route.useLoaderData();

    const handleUpdateProduct = createServerFn(
      "POST",
      async (data: CreateProductInput) => {
        const response = await updateProductEntry(data);
        return response;
      }
    );

    async function onSubmit(value) {
      const response = await handleUpdateProduct(value);
      if (response.status >= 200 && response.status <= 300) {
        navigate({
          to: "/products",
        });
      }
    }

    return (
      <div className="p-20">
        <h1 className="text-4xl">Edit {product.name}</h1>
        <ProductForm product={product} onSubmit={onSubmit} />
      </div>
    );
  },
  loader: ({ params }) => getProductById(params.productId),
});
