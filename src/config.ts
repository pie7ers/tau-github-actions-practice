import 'dotenv/config'
import env from 'env-var'

export const CONSTS = {
  PORT: env.get('PORT').required().asPortNumber()
}