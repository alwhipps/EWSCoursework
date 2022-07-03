import config from './../config/config'
import mongoose from 'mongoose' 


//Connection URL to mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {dbName: "users"})
mongoose.connection.on('error', err => {
	throw new Error('unable to connect to database: ${config.mongoUri}')
})

import app from './express'

app.listen(config.port, (err) => {
	if (err) {
		console.log(err)
	}
	
	console.info('Server started on port %s.', config.port)
	
	
	