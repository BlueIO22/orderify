import { createFileRoute, useRouter } from "@tanstack/react-router";
import dayjs from "dayjs";
import { getOrders, Order } from "../api/orders";

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => getOrders(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className="px-10">
      <h1>Welcome to orderify</h1>
      <h2>My orders:</h2>
      <table className="w-[600px]">
        <th>id</th>
        <th>description</th>
        <th>created</th>
        {state.map((order: Order) => {
          return (
            <tr className=" border-2 text-center" key={order.id}>
              <td>{order.id}</td>
              <td>{order.description}</td>
              <td>{dayjs(order.createdAt).format("DD-MM-YYYY HH:mm")}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
