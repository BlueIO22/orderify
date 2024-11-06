import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  profile_image: string;
};

export async function login(email: string, password: string) {
  console.log(email);
  const data: AuthTokenResponsePassword =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  return data.data ?? data.error;
}

export async function getUsersById(id: number) {
  const userResponse = await supabase
    .from("user")
    .select("*")
    .eq("id", id)
    .single();
  if (userResponse.error) {
    return null;
  }
  return userResponse.data as unknown as User;
}
