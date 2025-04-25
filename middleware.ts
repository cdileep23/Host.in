import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ]
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // This matches all routes except static files and Next.js internals
    '/',
    '/(api|trpc)(.*)', // API and TRPC routes
  ],
};
