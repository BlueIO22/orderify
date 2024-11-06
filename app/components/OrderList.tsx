import { useNavigate } from "@tanstack/react-router";
import { Order } from "../api/orders";

export default function OrderList({
  orders,
  columns,
}: {
  orders: Order[];
  columns: string[] | "all";
}) {
  if (orders.length === 0) {
    return;
  }
  const keys = Object.keys(orders[0]).filter(
    (x) => columns === "all" || columns.includes(x)
  );
  const navigate = useNavigate();
  return (
    <table className="px-10 w-full">
      {keys.map((header, index: number) => {
        return (
          <th
            className="ml-10 border-2 min-w-[100px] text-2xl font-bold"
            key={index + "h"}
          >
            {header}
          </th>
        );
      })}
      {orders.map((order: Order) => {
        return (
          <tr
            onClick={() => {
              navigate({
                to: "/orders/$orderId",
                params: {
                  orderId: order.id.toString(),
                },
              });
            }}
            className="hover:bg-primary cursor-pointer hover:text-white border-2 text-xl text-center"
          >
            {Object.keys(order)
              .filter((x) => columns === "all" || columns.includes(x))
              .map((key: string) => {
                if (key === "order_item") {
                  return <td>nothing</td>;
                }
                return <td>{order[key]}</td>;
              })}
          </tr>
        );
      })}
    </table>
  );
}
