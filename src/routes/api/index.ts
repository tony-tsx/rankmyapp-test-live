import { Router, ErrorRequestHandler } from 'express'
import { character } from './character'
import { isHttpError } from 'http-errors'
const api = Router()

api.use( character )

api.use( ( ( error, req, res, next ) => {
  if ( isHttpError( error ) )
    return res.status( error.statusCode ).json( { message: error.message } )

  res.status( 500 ).json()
} ) as ErrorRequestHandler )

export { api }