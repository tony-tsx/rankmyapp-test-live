import { Router } from 'express'
import { Character } from '../../interfaces/Character'
import { List } from '../../interfaces/List'
import { rickandmortyapi } from '../../services/rickandmortyapi'
import { createAxiosNextError } from '../../helpers/createAxiosNextError'
import { BadRequest, NotFound } from 'http-errors'

const character = Router()

character.get( '/character', async ( req, res, next ) => {
  const size = req.query.pageSize ? Number( req.query.pageSize ) : 5
  const page = req.query.page ? Math.max( Number( req.query.page ), 1 ) : 1
  const search = req.query.q || req.query.search ? String( req.query.q || req.query.search ) : null

  if ( size > 20 ) return next( new BadRequest( 'max page size is 20' ) )

  rickandmortyapi.get<List<Character>>( '/character' )
    .then( ( { data: { results } } ) => {
      if ( search ) results = results.filter( result => result.name.includes( search ) )

      results = results.slice( ( page - 1 ) * size, page * size )

      if ( !results.length ) next( new NotFound( 'end of list' ) )

      else res.json( results )
    } )
    .catch( e => createAxiosNextError( e, next ) )
} )

export { character }