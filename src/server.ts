import { app } from './app'
import { AppDataSource } from './data-source'

const PORT = 3000

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => { console.log(`http://localhost:${PORT}/`) })
}).catch(error => { console.log(error) })

export { app }
