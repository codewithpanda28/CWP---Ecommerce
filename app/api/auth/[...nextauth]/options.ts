import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Password",
        },
      },
/**
 * Authorizes a user based on provided credentials.
 *
 * @param credentials - The user's credentials including username and password.
 * @returns A user object containing user information if the credentials are valid, otherwise null or undefined.
 */

      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "42", name: "Akash", password: "ak123456789.?" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
            return user;
        }else {
          return null;
        }

      },
    }),
  ],
};