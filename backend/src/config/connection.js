const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = 'mongodb://mongodb:27017/Library';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

module.exports = connectToDatabase;
