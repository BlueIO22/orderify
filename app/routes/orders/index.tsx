import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getOrders } from "../../api/orders";
import OrderList from "../../components/OrderList";

export const Route = createFileRoute("/orders/")({
  component: () => {
    const router = useRouter();

    const state = Route.useLoaderData();

    if (!state) {
      return <p className="p-10 text-xl">No orders found</p>;
    }

    return (
      <div className="p-20 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl">Actions</h2>
          <button className="text-2xl p-2 font-bold hover:bg-primary hover:text-white border-2">
            Create order
          </button>
        </div>
        <div>
          <h1 className="text-3xl">Orders: ({state.length})</h1>
          <OrderList orders={state} canEdit />
        </div>
      </div>
    );
  },
  loader: () => getOrders(),
});
