import { Command } from 'commander'
import { PORT } from '../constants/server'
import { server } from '../server'

const start = new Command( 'start' )

start.action( async () => {
  server.listen( PORT, () => {
    console.log( `server start in localhost:${PORT}` )
  } )
} )

export { start }