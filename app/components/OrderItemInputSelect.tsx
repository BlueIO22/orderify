import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { OrderItemInput } from "../api/orders";
import { Product } from "../api/product";

export default function OrderItemInputSelect({
  product,
  orderId,
  isSelected,
  quantity,
  onOrderItemSelect,
}: {
  product: Product;
  orderId: number;
  isSelected: boolean;
  quantity: number;
  onOrderItemSelect: (input: OrderItemInput) => void;
}) {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  return (
    <li className={`grid grid-cols-5 gap-5 `} key={product.id}>
      <span className="col-span-2">
        {isSelected && (
          <FontAwesomeIcon
            className="mr-2 text-primary"
            icon={faCheckCircle}
            size="xs"
          />
        )}{" "}
        {product.name}
      </span>

      <div className="flex items-center gap-2">
        <label htmlFor="count">
          Amount {isSelected ? selectedQuantity : ""}
        </label>
        {!isSelected && (
          <input
            onChange={(event) => {
              if (event.target.value.length === 0) {
                setSelectedQuantity(0);
                return;
              }
              setSelectedQuantity(parseInt(event.target.value));
            }}
            className="border-2"
            type="number"
            id="count"
          />
        )}
      </div>
      <button
        disabled={selectedQuantity === 0}
        className={`justify-self-end col-span-2 border-2 w-[50px] ${selectedQuantity === 0 ? "bg-[#EBEBE4]" : ""}`}
        onClick={() => {
          const orderItemInput = {
            count: selectedQuantity,
            orderId: orderId,
            productId: product.id,
            productName: product.name,
            productPrice: product.price,
          } as OrderItemInput;

          onOrderItemSelect(orderItemInput);
        }}
      >
        Choose
      </button>
    </li>
  );
}
