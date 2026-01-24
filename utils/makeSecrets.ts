import { doesTheFileExist, writeFile } from './fileControl'
import path from 'path'
import pc from 'picocolors'
const SECRETS_PATH = path.join(__dirname, '../.secrets')

const SECRETS = `# Before configure this is recommended to read the README.md file
GITHUB_TOKEN=
GH_APP_ID=
GH_PRIVATE_KEY=
`

if (!doesTheFileExist(SECRETS_PATH)) {
  writeFile(SECRETS_PATH, SECRETS)
  console.log(pc.green(`.secrets created`))
}
else console.log(pc.yellow(`.secrets already exits`))
