import { NextApiRequest, NextApiResponse } from "next";
import { parseCookie, stringifySetCookie } from "cookie";
import { createHmac, timingSafeEqual } from "crypto";

const AUTH_COOKIE_NAME = "authToken";

function getAuthSecret() {
  return process.env.AUTH_TOKEN_SECRET || process.env.PAGE_ACCESS_PASSWORD;
}

function signToken(nonce: string, expiresAt: number, secret: string) {
  return createHmac("sha256", secret).update(`${nonce}.${expiresAt}`).digest("base64url");
}

function isValidAuthToken(token: string | undefined, secret: string) {
  if (!token) {
    return false;
  }

  const [nonce, expiresAtValue, signature] = token.split(".");
  const expiresAt = Number(expiresAtValue);

  if (!nonce || !signature || !Number.isFinite(expiresAt)) {
    return false;
  }

  if (expiresAt <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expectedSignature = signToken(nonce, expiresAt, secret);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = parseCookie(req.headers.cookie || "");
  const authSecret = getAuthSecret();

  if (!authSecret) {
    return res.status(500).json({ authenticated: false });
  }

  if (isValidAuthToken(cookies[AUTH_COOKIE_NAME], authSecret)) {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(401).json({ authenticated: false });
  }
}