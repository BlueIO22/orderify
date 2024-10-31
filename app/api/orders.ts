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
