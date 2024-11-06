import { Link } from "@tanstack/react-router";
import { Order } from "../api/orders";
import OrderList from "./OrderList";
import WidgetLayout from "./shared/Layout";

export default function LatestOrders({
  latestOrders,
}: {
  latestOrders: Order[];
}) {
  return (
    <WidgetLayout>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Latest orders</h1>
        <Link to={"/orders"}>View all orders</Link>
      </div>
      <div className="mt-5">
        <OrderList
          orders={latestOrders}
          columns={["id", "created_at", "description"]}
        />
      </div>
    </WidgetLayout>
  );
}
