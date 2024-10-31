import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getProducts } from "../../api/product";
import ProductList from "../../components/ProductList";

export const Route = createFileRoute("/products/")({
  component: () => {
    const state = Route.useLoaderData();
    return (
      <div className="p-20 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Actions</h2>
          <Link
            href="/products/new"
            className="w-[300px] text-2xl p-2 font-bold hover:bg-primary hover:text-white border-2"
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Create product
          </Link>
        </div>
        <div>
          <h1 className="text-3xl">Products: ({state.length})</h1>
          <ProductList products={state} canEdit />
        </div>
      </div>
    );
  },
  loader: () => getProducts(),
});
