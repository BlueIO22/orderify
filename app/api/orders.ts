import dayjs from "dayjs";
import { supabase } from "../utils/supabase";
import { Product } from "./product";

export type OrderItem = {
  id: number;
  productId: number;
  orderId: number;
  count: number;
  product: Product;
};

export type OrderItemInput = {
  id: number;
  productId: number;
  orderId: number;
  count: number;
  productName: string;
  productPrice: number;
};

export type OrderInput = {
  id: number;
  description: string;
  orderItemInputs: OrderItemInput[];
};

export type Order = {
  id: number;
  description: string;
  createdAt: string;
  orderItems: OrderItem[];
};

export async function getOrderById(orderId) {
  let { data: order, error } = await supabase
    .from("orders")
    .select(
      `*,
    order_item (
      id,
      order_id,
      product_id,
      count,
      product (
        id,
        name,
        price
      )
    )
    `
    )
    .eq("id", orderId)
    .single();

  console.log(order, error);

  if (error || !order) {
    return [];
  }

  return {
    ...order,
    created_at: dayjs(order.created_at).format("DD.MM.YYYY hh:mm"),
    orderItems: order.order_item.map((item: any) => {
      return {
        ...item,
        product: item.product as Product,
      } as OrderItem;
    }),
    products:
      order.order_item
        .map((item: any) => {
          return item.product.name;
        })
        .join(", ") || "no products",
  } as Order;
}

export async function updateOrderEntry(order: Order) {
  const createOrderResponse = await supabase
    .from("orders")
    .update({
      ...order,
      orderItems: undefined,
    })
    .eq("id", order.id);

  await supabase.from("order_item").delete().eq("order_id", order.id);

  for (const orderItem of order.orderItems) {
    await supabase.from("order_item").upsert({
      ...orderItem,
      product: undefined,
      productId: undefined,
      order_id: order.id,
      id: undefined,
      orderId: undefined,
    });
  }

  return createOrderResponse;
}

export async function getLatestOrders() {
  let { data: orders, error } = await supabase
    .from("orders")
    .select(
      `
    *,
    order_item (
      id,
      order_id,
      product_id,
      count,
      product (
        id,
        name,
        price
      )
    )
    `
    )
    .order("created_at", {
      ascending: false,
    })
    .limit(10);

  if (error || !orders) {
    return [];
  }

  return orders.map((order: any) => {
    return {
      ...order,
      created_at: dayjs(order.created_at).format("DD.MM.YYYY hh:mm"),
      products:
        order.order_item
          .map((item: any) => {
            return item.product.name;
          })
          .join(", ") || "no products",
    } as Order;
  });
}

export async function getOrders() {
  let { data: orders, error } = await supabase.from("orders").select(`
    *,
    order_item (
      id,
      order_id,
      product_id,
      count,
      product (
        id,
        name,
        price
      )
    )
    `);

  if (error || !orders) {
    return [];
  }

  return orders.map((order: any) => {
    return {
      ...order,
      created_at: dayjs(order.created_at).format("DD.MM.YYYY hh:mm"),
      products:
        order.order_item
          .map((item: any) => {
            return item.product.name;
          })
          .join(", ") || "no products",
    } as Order;
  });
}
