const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./user.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('User seeded!');
  process.exit(0);
});
