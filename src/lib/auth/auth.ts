import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/src/lib/drizzle/db";
import * as schema from "@/src/lib/drizzle/schema";

const crosDomains = process.env.CORS_ALLOWED_ORIGINS
  ? process.env.CORS_ALLOWED_ORIGINS.split(",")
  : [];

const frontendURL = process.env.FRONTEND_URL || "http://localhost:5173";

const trustedOrigins = [...new Set([...crosDomains, frontendURL])];

console.log("CORS Allowed Origins for Auth:", trustedOrigins);
export const auth = betterAuth({
  basePath: "/api/v1/auth",
  trustedOrigins: trustedOrigins,
  baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    apple: {
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    },
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: "lax",
      secure: false,
    },
    crossSubDomainCookies: {
      enabled: false,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  callbacks: {
    redirect: {
      afterSignIn: frontendURL,
      afterSignUp: frontendURL,
      afterSignOut: frontendURL,
    },
  },
});
