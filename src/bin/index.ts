import commander from 'commander'
import { start } from '../cli/start'

commander.addCommand( start )

commander.parse( process.argv )