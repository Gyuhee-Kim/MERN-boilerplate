const mongoose = require('mongoose')
const config = require('config');

const dbConfig = config.get('db');

console.log(dbConfig);

const mongoUri = `mongodb+srv://${dbConfig.userName}:${dbConfig.password}@${dbConfig.cluster}.aqxve.mongodb.net?retryWrites=true&w=majority`;

mongoose
    .connect(mongoUri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('mongoDB connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db 