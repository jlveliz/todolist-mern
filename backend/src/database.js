const mongoose = require('mongoose')


const URI = process.env.MONGOD_URI ? process.env.MONGOD_URI : 'mongodb://localhost/mernstack' ;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('database connected')
})
