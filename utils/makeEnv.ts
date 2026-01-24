import { doesTheFileExist, writeFile } from './fileControl'
import path from 'path'
import pc from 'picocolors'
const ENV_PATH = path.join(__dirname, '../.env')

const ENV = `# Before configure this is recommended to read the README.md file
PORT=3000
TEST_REPO=
TEST_REPO_OWNER=
`

if (!doesTheFileExist(ENV_PATH)) {
  writeFile(ENV_PATH, ENV)
  console.log(pc.green(`.env created`))
}
else console.log(pc.yellow(`.env already exits`))
