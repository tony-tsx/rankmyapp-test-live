import Express from 'express'
import { api } from '../routes/api'

const server = Express()

server.use( '/api/v1', api )

export { server }
