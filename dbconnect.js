const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://shreya1:shreya123@carts.ttzrffi.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = { client };