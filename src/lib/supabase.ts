import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// The app remains usable in demonstration mode until public configuration is
// supplied at build time. Secret keys are never accepted here.
export const supabase = url && key ? createClient(url, key) : null;
