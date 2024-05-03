import { serverConfig } from './configs/serverConfig'
import server from './server'

( ( ) => { 
  server.listen(+serverConfig.port, () => {
    console.log(`Server running on port ${serverConfig.port}`)
  })
}) ();