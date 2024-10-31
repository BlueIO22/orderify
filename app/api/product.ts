import dayjs from "dayjs";
import { supabase } from "../utils/supabase";

export type CreateProductInput = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
};

export async function getProducts() {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .order("created_at");
  if (error) {
    return [];
  }
  return data.map((product: Product) => {
    return {
      ...product,
      created_at: dayjs(product.created_at).format("DD.MM.YYYY"),
    };
  });
}

export async function getProductById(id) {
  const { data: product, error } = await supabase
    .from("product")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return [];
  }
  return {
    ...product,
    created_at: dayjs(product.created_at).format("DD.MM.YYYY"),
  };
}

export async function updateProductEntry(entry: CreateProductInput) {
  const productResponse = await supabase
    .from("product")
    .update(entry)
    .eq("id", entry.id);

  return productResponse;
}

export async function createProductEntry(entry: CreateProductInput) {
  let input: any = {
    name: entry.name,
    price: entry.price,
    description: entry.description,
    created_at: dayjs(),
  };

  if (entry.id) {
    input = { ...input, id: entry.id };
  }

  const productResponse = await supabase.from("product").upsert(input);

  console.log(productResponse);

  return productResponse;
}
