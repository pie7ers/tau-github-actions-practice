import jwt from "jsonwebtoken";
import { SECRETS } from "./secrets";

const APP_ID = SECRETS.GH_APP_ID;
const PRIVATE_KEY = SECRETS.GH_PRIVATE_KEY;

const now = Math.floor(Date.now() / 1000);

// 1. Create JWT for GitHub App
const jwtToken = jwt.sign(
  {
    iat: now - 60, //seconds
    exp: now + 600, //seconds
    iss: APP_ID,
  },
  PRIVATE_KEY,
  { algorithm: "RS256" },
);

// Helper to requests GitHub
async function ghFetch(url: string, options: any = {}): Promise<any> {
  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${jwtToken}`,
      ...(options.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${res.status} ${res.statusText} - ${body}`);
  }

  return res.json();
}

export default async function getGithubToken(): Promise<string> {
  // 2. Get App install
  const installations = await ghFetch(
    "https://api.github.com/app/installations",
  );

  const installationId = installations[0].id;

  // 3. Create Access Token Install
  const tokenResponse = await ghFetch(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    { method: "POST" },
  );
  return tokenResponse.token;
}
