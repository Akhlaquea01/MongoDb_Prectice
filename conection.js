// conection stablization b/w nodejs and mongodb

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID
//or
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('successfully connecteddb......')
})