import 'dotenv/config'
import env from 'env-var'

export const CONSTS = {
  TEST_REPO: env.get('TEST_REPO').required().asString(),
  TEST_REPO_OWNER: env.get('TEST_REPO_OWNER').required().asString(),
}