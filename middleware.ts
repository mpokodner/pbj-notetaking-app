import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // This function is called for protected routes
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
