const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/stock_pilot';

mongoose.connect(MONGO_URI,  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) =>  {
console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose.connection;
