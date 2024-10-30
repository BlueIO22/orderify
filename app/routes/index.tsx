import { createFileRoute, useRouter } from "@tanstack/react-router";
import dayjs from "dayjs";
import { getOrders, Order } from "./api/orders";

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => getOrders(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div>
      <h1>Welcome to orderify</h1>
      <h2>My orders:</h2>
      <ul>
        {state.map((order: Order) => {
          return (
            <li>
              {order.description} - {order.id} -{" "}
              {dayjs(order.createdAt).format("DD-MM-YYYY HH:mm")}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
