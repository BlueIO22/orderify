import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import { getOrderById, Order, OrderItem } from "../../../api/orders";

export const Route = createFileRoute("/orders/$orderId/")({
  component: () => {
    const order: Order = Route.useLoaderData();

    const sum = Math.round(
      order.orderItems
        .map((x) => x.product.price)
        .reduce((prev, curr) => {
          return prev + curr;
        }),
      2
    );
    return (
      <div className="p-20 [&>p]:text-2xl">
        <h1 className="text-3xl">OrderID: {order.id}</h1>
        <p>
          <FontAwesomeIcon icon={faCalendar} />{" "}
          {dayjs(order.createdAt).format("DD.MM.YYYY HH:mm")}
        </p>
        <p>Note: {order.description}</p>
        {order.orderItems && (
          <>
            <ul className="flex mt-5 flex-col gap-2">
              {order.orderItems.map((orderItem: OrderItem) => {
                return (
                  <li className="p-2 border-2 w-[300px]">
                    <Link
                      to="/products/$productId"
                      params={{
                        productId: orderItem.product.id.toString(),
                      }}
                    >
                      {orderItem.product.name} - ${orderItem.product.price}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-[300px] border-2 mt-5 text-2xl p-2">
              <p>Count of products: {order.orderItems.length}</p>
              <p>Sum: ${sum}</p>
            </div>
          </>
        )}
      </div>
    );
  },
  loader: ({ params }) => getOrderById(params.orderId),
});
