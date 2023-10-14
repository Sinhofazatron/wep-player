import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabse = createMiddlewareClient({
    req,
    res,
  });

  await supabse.auth.getSession()
  return res
}
