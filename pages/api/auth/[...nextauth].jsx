import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { login } from "../../../core/api/Login";

async function refreshAccessToken(access, refresh) {
  try {
    const url = "http://3.37.39.47:8080/refresh-token";
    const response = await fetch(url, {
      headers: {
        Authorization: access,
        ["X-Access-Token"]: access,
        ["X-Refresh-Token"]: refresh,
        role: "MENTOR",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();
    console.log("refreshedTokens==", refreshedTokens);

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.headers["x-access-token"],
      refreshToken: refreshedTokens.headers["x-refresh-token"],
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  providers: [
    CredentialProvider({
      id: "email-password-credential",
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await login(credentials.username, credentials.password);
        if (res?.status == 200) {
          return {
            accessToken: res.headers["x-access-token"],
            refreshToken: res.headers["x-refresh-token"],
            role: "MENTOR",
          };
        } else {
          return "login error";
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("user=", user);
      if (user !== "login error") {
        token.access = user.accessToken;
        token.refresh = user.refreshToken;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("session===", session);
      session.user.access = token.access;
      return session;
    },
  },
  pages: { signIn: "/common/auth/login" },
});
