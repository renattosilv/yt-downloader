import express from 'express'
import { Server as IoServer } from 'socket.io'
import { createServer } from 'node:http'
import { routerStatic } from './routes/static'
import { routerDownload } from './routes/download'

const app = express()
const server = createServer(app)
const ioServer = new IoServer(server)

app.use(express.json())
app.use('/downloads', routerStatic)
app.use('/download', routerDownload)

ioServer.on("connection", (socket) => {
    console.info(`Connection successful, socket: ${socket.id}`)
})

export { server, ioServer }