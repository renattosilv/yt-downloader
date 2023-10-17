import 'dotenv/config'
import { server } from './server'

const SERVER_PORT = process.env.SERVER_PORT

server.listen(SERVER_PORT)