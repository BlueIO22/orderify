import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { getOrderById, Order, updateOrderEntry } from "../../../api/orders";
import OrderForm from "../../../components/OrderForm";

export const Route = createFileRoute("/orders/$orderId/edit")({
  component: () => {
    const navigate = useNavigate();
    const order: Order = Route.useLoaderData();

    const handleUpdateOrder = createServerFn("POST", async (data: Order) => {
      const response = await updateOrderEntry(data);
      return response;
    });

    async function onSubmit(value) {
      const response = await handleUpdateOrder(value);
      if (response.status >= 200 && response.status <= 300) {
        navigate({
          to: "/orders/$orderId",
          params: {
            orderId: value.id,
          },
        });
      }
    }

    return (
      <div className="p-20">
        <h1 className="text-4xl">Edit Order#{order.id}</h1>
        <OrderForm order={order} onSubmit={onSubmit} />
      </div>
    );
  },
  loader: ({ params }) => getOrderById(params.orderId),
});
