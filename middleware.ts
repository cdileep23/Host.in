import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

// Create the original Clerk middleware
const baseMiddleware = clerkMiddleware();

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const url = req.nextUrl.pathname;

  // Routes to ignore (e.g., webhooks)
  const ignoredRoutes = [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ];

  if (ignoredRoutes.some(route => url.startsWith(route))) {
    return NextResponse.next();
  }

  // Apply Clerk middleware otherwise
  return baseMiddleware(req, event);
}
