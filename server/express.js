import express from 'express'

import path from 'path'

import bodyParser from 'body-parser'

import cookieParser from 'cookie-parser'

import compress from 'compression'

import cors from 'cors'

import helmet from 'helmet'

const app = express()

//Parse body params and attache them to req.body

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())

//Secure apps by setting various HTTP headers
app.use(helmet())

//Enable CORS - Cross Origin Resource Sharing
app.use(cors())

export default app