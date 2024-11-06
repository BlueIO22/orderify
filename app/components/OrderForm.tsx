import dayjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Order, OrderInput, OrderItem, OrderItemInput } from "../api/orders";
import { Product } from "../api/product";
import OrderItemList from "./OrderItemList";
import SelectProductAndQuantity from "./SelectProductAndQuantity";

function mapOrderItemInputToOrderItem(input: OrderItemInput) {
  return {
    id: 0,
    count: input.count,
    productId: input.productId,
    orderId: input.orderId,
    product: {
      name: input.productName,
      id: input.id,
      description: "",
      price: input.productPrice,
      created_at: dayjs().toString(),
    } as Product,
  } as OrderItem;
}

export default function orderForm({
  onSubmit,
  order,
}: {
  onSubmit: (data: OrderInput) => void;
  order?: Order;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderInput>();

  const someErrors = errors.description || errors.orderItemInputs;

  const [description, setDescription] = useState(order?.description);
  const [showSelectProducts, setShowSelectedProducts] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>(
    order?.orderItems ?? []
  );

  const hasBeenEdited =
    description !== order?.description || order?.orderItems !== orderItems;

  function onHandleSubmit(value) {
    let formData = value;
    if (order) {
      formData = {
        ...value,
        id: order.id,
        orderItems: orderItems,
      };
    }
    onSubmit(formData);
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onHandleSubmit)}
      className="w-[800px] text-xl [&>div]:p-5 [&>div]:flex [&>div]:flex-col [&>div>input]:text-xl [&>div>input]:p-2 [&>div>label]:text-xl [&>div>input]:border-2 [&>div>textarea]:border-2 [&>div>textarea]:p-2 [&>div>textarea]:text-xl"
    >
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", {
            required: true,
            validate: (value) => {
              return (
                value.length > 3 ||
                "The description must be greater than 3 characters"
              );
            },
          })}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          name="description"
          id="description"
          placeholder={order ? order.description : "Enter description..."}
        />
      </div>
      <OrderItemList
        orderItems={orderItems}
        onRemove={(productId: number) => {
          setOrderItems(orderItems.filter((x) => x.product.id !== productId));
        }}
      />
      <a
        onClick={() => {
          setShowSelectedProducts(!showSelectProducts);
        }}
        className="mx-5 hover:bg-primary hover:text-white border-2 p-2"
      >
        {showSelectProducts ? "Hide" : "Add more products"}
      </a>
      {showSelectProducts && order && (
        <SelectProductAndQuantity
          onSubmitted={(orderItemInputs: OrderItemInput[]) => {
            setOrderItems([
              ...orderItems,
              ...orderItemInputs.map((x) => mapOrderItemInputToOrderItem(x)),
            ]);
            setShowSelectedProducts(false);
          }}
          order={order}
        />
      )}
      <div>
        {(!order || hasBeenEdited) && (
          <button
            type="submit"
            className="border-2 py-2 text-lg w-full cursor-pointer hover:bg-primary hover:text-white"
          >
            {order ? "Update order" : "Create order"}
          </button>
        )}
      </div>
      {someErrors && (
        <div className="px-10 [&>p]:text-lg">
          <h2 className="text-2xl">Cannot submit form</h2>
          {errors.description?.message && (
            <p>- {errors.description?.message}</p>
          )}
        </div>
      )}
    </form>
  );
}
