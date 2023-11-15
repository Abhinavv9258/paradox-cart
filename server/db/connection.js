const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ifrwvyi.mongodb.net/?retryWrites=true&w=majority`;

const connexion = mongoose
    .connect(uri)
    .then(() => console.log('Connection established with database..!!'))
    .catch((error) => console.log('Error while connecting to database..!!', error));

module.exports = connexion;