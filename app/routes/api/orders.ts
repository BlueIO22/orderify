import { supabase } from "./utils/supabase";

export type Order = {
  id: number;
  description: string;
  createdAt: string;
};

export async function getOrders() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  let { data: orders, error } = await supabase.from("orders").select("*");
  if (error) {
    return [];
  }
  if (!orders) {
    return [];
  }
  return orders.map((order: any) => {
    return {
      ...order,
      createdAt: order.created_at,
    } as Order;
  });
}
