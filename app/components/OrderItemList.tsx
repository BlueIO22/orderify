import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrderItem } from "../api/orders";

export default function OrderItemList({
  orderItems,
  onRemove,
}: {
  orderItems: OrderItem[];
  onRemove: (productId: number) => void;
}) {
  if (orderItems.length === 0) {
    return;
  }
  return (
    <div className=" p-5 border-2 mx-5 mb-5">
      <h2 className="font-bold text-xl">Order items</h2>
      <ul>
        {orderItems.map((orderItem: OrderItem, index: number) => {
          const productKey = (orderItem.productId ?? 0) + index;
          const total = Math.round(
            orderItem.product.price * orderItem.count
          ).toFixed(2);
          return (
            <li key={productKey.toString()} className="grid grid-cols-3">
              <span>
                {orderItem.product.name} ({orderItem.count})
              </span>
              <span>${total}</span>
              <span className="text-end cursor-auto">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => onRemove(orderItem.product.id)}
                  color="red"
                  size="xs"
                  className="cursor-pointer"
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
