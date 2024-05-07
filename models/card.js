const { client } = require('../dbconnect');

exports.getProjects = (callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('Mongo database connected')
            }
            const collection = client.db("card").collection('cards');
            const result = collection.find({}).toArray(callback);
            return result;
        });
    } catch (err) {
        throw err;
    }
};

exports.insertProject = (newProject, callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('Mongo database connected')
            }
            const collection = client.db("card").collection('cards');
            const result = collection.insertOne(newProject, callback);
            return result;
        });
    } catch (err) {
        throw err;
    }
};