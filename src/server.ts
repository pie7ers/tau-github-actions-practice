import { app } from './app'
import { CONSTS } from './config'

const PORT = CONSTS.PORT

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`)
})
