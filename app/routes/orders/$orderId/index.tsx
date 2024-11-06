import {
  faCalendar,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import { getOrderById, Order, OrderItem } from "../../../api/orders";

export const Route = createFileRoute("/orders/$orderId/")({
  component: () => {
    const order: Order = Route.useLoaderData();

    const sum =
      order.orderItems.length > 0
        ? Math.round(
            order.orderItems
              .map((x) => x.product.price)
              .reduce((prev, curr) => {
                return prev + curr;
              })
          )
        : 0;
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
        <div className="mt-5 text-2xl flex gap-5">
          <Link
            to={"/orders/$orderId/edit"}
            params={{
              orderId: order.id.toString(),
            }}
            className="border-2 p-2 hover:bg-primary hover:text-white transition-all"
          >
            <FontAwesomeIcon icon={faPencil} size="xs" /> Edit order
          </Link>
          <Link
            to={"/orders/$orderId/edit"}
            params={{
              orderId: order.id.toString(),
            }}
            className="border-2 p-2 bg-[red] text-white"
          >
            <FontAwesomeIcon icon={faTrash} size="xs" /> Delete order
          </Link>
        </div>
      </div>
    );
  },
  loader: ({ params }) => getOrderById(params.orderId),
});
