import dotenv from 'dotenv'
import env from 'env-var'
dotenv.config({
  path: ".secrets",
  quiet: true,
})

export const SECRETS = {
  GITHUB_TOKEN: env.get("GITHUB_TOKEN").required().asString(),
  GH_APP_ID: env.get("GH_APP_ID").required().asString(),
  GH_PRIVATE_KEY: env.get("GH_PRIVATE_KEY").required().asString(),
}