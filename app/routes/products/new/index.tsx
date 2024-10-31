import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { createProductEntry, CreateProductInput } from "../../../api/product";
import ProductForm from "../../../components/ProductForm";

export const Route = createFileRoute("/products/new/")({
  component: () => {
    const navigate = useNavigate();
    const createProduct = createServerFn(
      "POST",
      async (value: CreateProductInput) => {
        const product = await createProductEntry(value);
        return product;
      }
    );

    const onSubmit = async (data: CreateProductInput) => {
      const response = await createProduct(data);
      if (response.status == 200) {
        navigate({ to: "/products" });
      }
    };

    return (
      <div className="p-20 flex flex-col gap-10">
        <h1 className="text-3xl">Create new product</h1>
        <p className="text-xl pt-0 mt-0">Please fill in details and submit</p>

        <ProductForm onSubmit={onSubmit} />
      </div>
    );
  },
});
