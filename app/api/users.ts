import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

export async function login(email: string, password: string) {
  console.log(email);
  const data: AuthTokenResponsePassword =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  return data.data ?? data.error;
}
