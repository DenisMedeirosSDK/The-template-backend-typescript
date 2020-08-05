import 'reflect-metadata';
import express from 'express'
import routes from '../http/routes'

const server = express()

server.use(express.json())
server.use(routes)

server.listen(3333, () => {
  console.log('Start server development, listening port 3333')
})
