import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../api/orders";

export default function OrderList({
  orders,
  canEdit,
}: {
  orders: Order[];
  canEdit?: boolean;
}) {
  const keys = Object.keys(orders[0]);
  return (
    <table className="px-10">
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
      {canEdit && (
        <th className="border-2 min-w-[100px] text-2xl font-bold">Edit</th>
      )}
      {orders.map((order: Order) => {
        return (
          <tr className="border-2 text-xl text-center">
            {Object.keys(order).map((key: string) => {
              if (key === "order_item") {
                return <td>nothing</td>;
              }
              return <td>{order[key]}</td>;
            })}
            {canEdit && (
              <td>
                <button className="p-2 font-bold hover:bg-primary hover:text-white">
                  <FontAwesomeIcon icon={faPencil} />
                </button>
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}
