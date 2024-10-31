import dayjs from "dayjs";
import { supabase } from "../utils/supabase";

export type Order = {
  id: number;
  description: string;
  createdAt: string;
};

export async function getOrders() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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
