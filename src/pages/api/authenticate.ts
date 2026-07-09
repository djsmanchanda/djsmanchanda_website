import { NextApiRequest, NextApiResponse } from "next";
import { parseCookie, stringifySetCookie } from "cookie";
import { createHmac, randomBytes, timingSafeEqual } from "crypto";

const AUTH_COOKIE_NAME = "authToken";
const AUTH_MAX_AGE_SECONDS = 60 * 60;

function getAuthSecret() {
  return process.env.AUTH_TOKEN_SECRET || process.env.PAGE_ACCESS_PASSWORD;
}

function signToken(nonce: string, expiresAt: number, secret: string) {
  return createHmac("sha256", secret).update(`${nonce}.${expiresAt}`).digest("base64url");
}

function isCorrectPassword(candidate: unknown, correctPassword: string) {
  if (typeof candidate !== "string" || candidate.length === 0) {
    return false;
  }

  const candidateBuffer = Buffer.from(candidate);
  const passwordBuffer = Buffer.from(correctPassword);

  return (
    candidateBuffer.length === passwordBuffer.length &&
    timingSafeEqual(candidateBuffer, passwordBuffer)
  );
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password } = req.body;
    const correctPassword = process.env.PAGE_ACCESS_PASSWORD;
    const authSecret = getAuthSecret();

    if (!correctPassword || !authSecret) {
      console.error("Required auth environment variables are not set");
      return res.status(500).json({ message: "Internal server error" });
    }

    if (isCorrectPassword(password, correctPassword)) {
      const nonce = randomBytes(16).toString("base64url");
      const expiresAt = Math.floor(Date.now() / 1000) + AUTH_MAX_AGE_SECONDS;
      const signature = signToken(nonce, expiresAt, authSecret);

      res.setHeader(
        "Set-Cookie",
        stringifySetCookie({
          name: AUTH_COOKIE_NAME,
          value: `${nonce}.${expiresAt}.${signature}`,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: AUTH_MAX_AGE_SECONDS,
          sameSite: "strict",
          path: "/",
        }),
      );

      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}