"use client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  
  let token = request.cookies.get('token')


  if (!token) {
    if (request.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.rewrite(new URL("/auth/login", request.url));
    }
  }
  if (token) {
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.rewrite(new URL("/admin", request.url));
    }
  }
}
