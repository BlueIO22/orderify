import { createFileRoute } from "@tanstack/react-router";
import { getProductById } from "../../../api/product";

export const Route = createFileRoute("/products/$productId/")({
  component: () => {
    const product = Route.useLoaderData();
    return (
      <div className="p-20 text-2xl">
        <h1 className="font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  },
  loader: async ({ params }) => getProductById(params.productId),
});
