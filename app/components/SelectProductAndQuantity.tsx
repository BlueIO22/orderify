import { useEffect, useState } from "react";
import { Order, OrderItemInput } from "../api/orders";
import { getProducts, Product } from "../api/product";
import OrderItemInputSelect from "./OrderItemInputSelect";

export default function SelectProductAndQuantity({
  onSubmitted,
  order,
}: {
  onSubmitted: (selectedItems: OrderItemInput[]) => void;
  order: Order;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<OrderItemInput[]>(
    []
  );

  useEffect(() => {
    getProducts().then((products: Product[]) => {
      setProducts(products);
    });
  }, []);

  if (products.length === 0) {
    return <p>Fant ingen produkter</p>;
  }

  return (
    <div className="p-5 border-2 mx-5 text-xl">
      <p>Choose product module v.1</p>
      <h2 className="text-xl font-bold">Choose products</h2>
      <ul className="border-t-2 max-h-[200px] overflow-auto p-2 pt-5 flex flex-col gap-5">
        {products.map((product: Product) => {
          const isProductSelected = selectedProducts.some(
            (x) => x.productId === product.id
          );

          return (
            <OrderItemInputSelect
              key={
                isProductSelected
                  ? "selected" + product.id
                  : "non-selected" + product.id
              }
              orderId={order.id}
              isSelected={isProductSelected}
              product={product}
              onOrderItemSelect={(input: OrderItemInput) => {
                const foundInput = selectedProducts.find(
                  (x) => x.productId === input.productId
                );
                if (foundInput) {
                  setSelectedProducts(
                    selectedProducts.filter(
                      (x) => x.productId !== input.productId
                    )
                  );
                  return;
                }
                setSelectedProducts([...selectedProducts, input]);
              }}
              quantity={
                selectedProducts.find((x) => x.productId === product.id)
                  ?.count ?? 0
              }
            />
          );
        })}
      </ul>
      {selectedProducts.length > 0 && (
        <div className="p-5 border-2">
          <h2 className="font-bold">Oppsumering</h2>
          <ul>
            {selectedProducts.map((input: OrderItemInput, index: number) => {
              const itemKey = ((input.id ?? 0) + index).toString();
              const total = Math.round(
                input.productPrice * input.count
              ).toFixed(2);
              return (
                <li className="grid grid-cols-3" key={itemKey}>
                  <span>
                    {input.productName} ({input.count})
                  </span>
                  <span>per item ${input.productPrice}</span>
                  <span>total ${total}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="flex gap-2 [&>button]:w-full">
        <button
          className="p-2 mt-5 border-2 bg-[red] text-white"
          onClick={() => {
            setSelectedProducts([]);
          }}
        >
          Clear
        </button>
        <button
          className="p-2 mt-5 border-2 hover:bg-primary hover:text-white"
          onClick={() => onSubmitted(selectedProducts)}
        >
          Add order items
        </button>
      </div>
    </div>
  );
}
