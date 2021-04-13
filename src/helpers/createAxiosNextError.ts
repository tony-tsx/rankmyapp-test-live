import { NextFunction } from 'express'
import createHttpError, { NotFound, InternalServerError } from 'http-errors'

import { isAxiosError } from './isAxiosError'

interface createAxiosNextError {
  ( e: any, next: NextFunction ): void
}

const createAxiosNextError: createAxiosNextError = ( e: any, next: NextFunction ) => {
  if ( isAxiosError( e ) ) {

    if ( e.response ) {

      if ( e.response.status === 404 ) next( new NotFound( e.response.data?.error ) )

      else next( createHttpError( e.response.status, e.response.data.error ) )

    }

  } next( new InternalServerError() )
}

export { createAxiosNextError }
